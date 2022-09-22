import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";

import classes from "./styles.module.css";
import data from "public/data.json";

import Card from "src/components/card";
import CarouselControllers from "src/components/carousel-controllers";
import List from "src/components/list";
import Form from "src/components/search-form";
import Main from "src/components/main";
import Title from "src/components/title";
import TrendingCard from "src/components/trending-card";

export async function getStaticProps() {
    const trendingMoviesList = data.filter(item => item.isTrending);
    const recommendedMoviesList = data.filter(item => !item.isTrending);

    return {
      props: {
        recommendedMoviesList,
        trendingMoviesList,
      },
    }
};

const Home = ({ recommendedMoviesList, trendingMoviesList }) => {
    const [ searchList, setSearchList ] = useState([]);

    const childrenList = useRef([]);
    const currentIndex = useRef(0);
    const sliderRef = useRef(null);
    const setChildrenListRef = useRef(null);
    const gap = useRef(0);
    const widthReducer = useRef(0);
    
    const layout = useCallback(() => {
        const { innerWidth } = window;

        let width = innerWidth;
        gap.current = 70;
        widthReducer.current = 90;

        childrenList.current.forEach((child, index) => {
            if(innerWidth > 1230) {
                widthReducer.current = 90
                width = innerWidth / 2.4;
            } 
            else if(innerWidth > 1000) {
                widthReducer.current = 90
                width = innerWidth / 2;
            } 
            else if(innerWidth > 900) {
                widthReducer.current = 90
                width = innerWidth / 1.5
            } 
            else if(innerWidth > 840) {
                widthReducer.current = 290;
            } 
            else if(innerWidth > 680) {
                widthReducer.current = 250;
            } 
            else if(innerWidth > 540) {
                widthReducer.current = 150;
            } else {
                
            }

            child.style.width = `${width - widthReducer.current}px`;
            child.style.left = `${(width - (widthReducer.current - 20)) * index}px`;
        });

        sliderRef.current.style.width = `${width * childrenList.current.length}px`;
    }, []);

    const slide = useCallback(({ index }) => {
        const { innerWidth } = window;
        let width = innerWidth - (widthReducer.current - 20);

        if(innerWidth > 1230) {
            width = innerWidth / 2.4 - (widthReducer.current - 20);
        } 
        else if(innerWidth > 1000) {
            width = innerWidth / 2 - (widthReducer.current - 20);
        } 
        
        const slideIndex = index ?? currentIndex.current;
        sliderRef.current.style.transform = `translateX(-${slideIndex * width}px)`
    }, []);

    const resizeHandler = useCallback(() => {
        layout();
        slide({});
    }, [ layout, slide ]);

    useEffect(() => {
        if(searchList.length === 0) {
            const list = [ ...sliderRef.current.children ];
            childrenList.current = list;
            layout();
            setChildrenListRef.current?.(list);
        }
    }, [ layout, searchList ])

    useEffect(() => {
        const currentWindow = window;
    
        currentWindow.addEventListener("resize", resizeHandler);

        return () => {
            currentWindow.removeEventListener("resize", resizeHandler);
        };
    }, [ resizeHandler ])

    const formMemo = useMemo(() => (
        <div className="px-4">
            <Form 
                data={[ ...recommendedMoviesList, ...trendingMoviesList ]}
                setData={setSearchList}
            />
        </div>
    ), []);

    const trendingSectionMemo = useMemo(() => (
        <section className="overflow-hidden pl-4 relative w-full">
            <Title>Trending</Title>
            <ul 
                className={classNames(classes.trendingList, "mt-6 relative")}
                ref={sliderRef}>
                {
                    trendingMoviesList.map((item, index) => <TrendingCard { ...item } key={index} />)

                }
            </ul>
            <CarouselControllers 
                indexRef={currentIndex}
                slide={slide} 
                setChildrenListRef={setChildrenListRef} 
            />
        </section>
    ), [ slide, trendingMoviesList ]);

    const recommendedSectionMemo = useMemo(() => (
        <section className="mt-8 px-4 xl:pr-4">
            <Title>Recommended for you</Title>
            <List>
                {
                    recommendedMoviesList.map((item, index) => <Card { ...item } key={index} />)
                }
            </List>
        </section>
    ), [ recommendedMoviesList ])
    
    return (
        <>
            <Main>
                { formMemo }
                {
                    searchList.length > 0 ? (
                        <div className="mt-4 px-4 xl:pr-4">
                            <List>
                                {
                                    searchList.map((item, index) => <Card { ...item } key={`${item.title}${index}`} />)
                                }
                            </List>
                        </div>
                    ) : (
                        <>
                            { trendingSectionMemo }
                            { recommendedSectionMemo }
                        </>
                    )
                }
            </Main>
        </>
    );
};

export default Home;