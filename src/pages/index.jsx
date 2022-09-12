import React, { useCallback, useEffect, useRef } from "react"
import data from "public/data.json";

import Card from "src/components/card";
import TrendingCard from "src/components/trending-card";
import CarouselControllers from "src/components/carousel-controllers";

const Home = () => {
    const list = data.filter(item => !item.isTrending);
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
        const list = [ ...sliderRef.current.children ];
        childrenList.current = list;
        layout();
        setChildrenListRef.current?.(list);
    }, [ layout ])

    useEffect(() => {
        const currentWindow = window;
    
        currentWindow.addEventListener("resize", resizeHandler);

        return () => {
            currentWindow.removeEventListener("resize", resizeHandler);
        };
    }, [ resizeHandler ])

    return (
        <>
            <main className="main overflow-y-auto pt-4 xl:pl-4">
                <section className="overflow-hidden pl-4 relative w-full">
                    <ul 
                        className="relative trending-list"
                        ref={sliderRef}>
                        {
                            data.filter(item => item.isTrending)
                                .map((item, index) => <TrendingCard { ...item } key={index} />)

                        }
                    </ul>
                    <CarouselControllers 
                        indexRef={currentIndex}
                        slide={slide} 
                        setChildrenListRef={setChildrenListRef} 
                    />
                </section>
                <section className="mt-8 px-4 xl:pr-4">
                    <ul className="flex flex-wrap items-stretch">
                        {
                            list.map((item, index) => <Card { ...item } key={index} />)
                        }
                    </ul>
                </section>
                <style jsx>
                    {
                        `
                            .trending-list {
                                height: 180px;
                                transition: transform 1.5s ease;
                            }

                            @media screen and (min-width: 420px) {
                                .trending-list {
                                    height: 220px;
                                }
                            }

                            @media screen and (min-width: 710px) {
                                .trending-list {
                                    height: 240px;
                                }
                            }

                            @media screen and (min-width: 900px) {
                                .main {
                                    width: calc(100% - 5rem);
                                }
                            }

                            @media screen and (min-width: 1024px) {
                                .main {
                                    width: calc(100% - 6rem);
                                }
                            }
                        `
                    }
                </style>
            </main>
        </>
    );
};

export default Home;