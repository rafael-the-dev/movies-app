import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import classNames from "classnames";
import ArrowIcon from "public/icons/icon-arrow.svg"

const CarouselControllers = ({ indexRef, slide, setChildrenListRef }) => {
    const [ index, setIndex ] = useState(0);
    const [ childrenList, setChildrenList ] = useState([]); 
    const isFirstRender = useRef(true);

    const hasPreviousItem = useMemo(() => index - 1 < 0, [ index ]);

    const hasNextItem = useMemo(() => {
        if(isFirstRender.current) return;

        const { innerWidth } = window;

        return innerWidth > 1000 ? index + 2 >= childrenList.length : index + 1 >= childrenList.length
    }, [ childrenList, index ]);

    const nextItemClickHandler = useCallback(() => {
        setIndex(currentIndex => {
            return currentIndex + 1;
        })
    }, []);

    const previousItemClickHandler = useCallback(() => {
        setIndex(currentIndex => {
            return currentIndex - 1;
        })
    }, []);

    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [])

    useEffect(() => {
        setChildrenListRef.current = list => setChildrenList(list);
    }, [ setChildrenListRef ]);

    useEffect(() => {
        indexRef.current = index;
        slide({ index });
    }, [ index, slide ]);

    return (
        <div className="absolute controllers-container flex justify-between w-full">
            <button 
                className={classNames(`controllers__button controllers__button--previous flex items-center 
                jusitfy-center rounded-full`, { "opacity-0": hasPreviousItem})}
                disabled={hasPreviousItem}
                onClick={previousItemClickHandler}>
                <ArrowIcon />
            </button>
            <button 
                className={classNames(`controllers__button flex items-center jusitfy-center rounded-full`,
                { "opacity-0": hasNextItem})}
                disabled={hasNextItem}
                onClick={nextItemClickHandler}>
                <ArrowIcon />
            </button>
            <style jsx>
                {
                    `
                        .controllers-container {
                            left: 0;
                            top: 50%;
                            transform: translate(0, -50%);
                            width: 95%;
                        }

                        .controllers__button {
                            background-color: #97979794;
                            height: 40px;
                            width: 40px;
                        }

                        .controllers__button--previous {
                            transform: rotate(180deg)
                        }
                    `
                }
            </style>
        </div>
    );
};

export default CarouselControllers;