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

    const layout = useCallback(() => {
        const { innerWidth } = window;

        sliderRef.current.style.width = `${innerWidth * childrenList.current.length}px`;

        childrenList.current.forEach((child, index) => {
            if(innerWidth > 600) {

            } else {
                child.style.width = `${innerWidth - 90}px`;
                child.style.left = `${(innerWidth - 70) * index}px`;
            }
        })
    }, []);

    const slide = useCallback(({ index }) => {
        const { innerWidth } = window;
        let width = innerWidth - 70;
        const slideIndex = index ?? currentIndex.current;
        sliderRef.current.style.transform = `translateX(-${slideIndex * width}px)`
    }, [])

    useEffect(() => {
        const list = [ ...sliderRef.current.children ];
        childrenList.current = list;
        layout();
        setChildrenListRef.current?.(list);
    }, [ layout ])

    return (
        <>
            <main className="pt-4">
                <section className="overflow-hidden pl-4 relative w-full">
                    <ul 
                        className="flex items-stretch justify-between relative trending-list"
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
                <section className="mt-8 px-4">
                    <ul className="flex flex-wrap items-stretch justify-between">
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
                        `
                    }
                </style>
            </main>
        </>
    );
};

export default Home;