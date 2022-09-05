import React, { useCallback, useEffect, useRef } from "react"
import data from "public/data.json";

import Card from "src/components/card";
import TrendingCard from "src/components/trending-card";

const Home = () => {
    const list = data.filter(item => !item.isTrending);
    const childrenList = useRef([]);
    const currentIndex = useRef(0);
    const sliderRef = useRef(null);

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
    }, [])

    useEffect(() => {
        const list = [ ...sliderRef.current.children ];
        childrenList.current = list;
        layout();
    }, [ layout ])

    return (
        <>
            <main className="px-4 pt-4">
                <section className="overflow-hidden w-100">
                    <ul 
                        className="flex items-stretch justify-between relative trending-list"
                        ref={sliderRef}>
                        {
                            data.filter(item => item.isTrending)
                                .map((item, index) => <TrendingCard { ...item } key={index} />)

                        }
                    </ul>
                </section>
                <section className="mt-8">
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
                                transition: transform 1s ease;
                            }
                        `
                    }
                </style>
            </main>
        </>
    );
};

export default Home;