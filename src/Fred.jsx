import { useEffect, useState } from 'react';
import './scss/Fred.scss';
import scrollStore from './scrollStore';
export default () => {



    const [fredDirToFront, setfredDirToFront] = useState(true);
    const [fredState, setfredState] = useState();
    useEffect(() => {
        if (scrollStore.fredMoveTO) {
            clearTimeout(scrollStore.fredMoveTO)
            scrollStore.fredMoveTO = null;
        } else {
            scrollStore.fredMove = true;
        }
        scrollStore.fredMoveTO = setTimeout(() => {
            scrollStore.fredMove = false
            scrollStore.fredMoveTO = null
        }, 300);
        if (scrollStore.percent > scrollStore.percentOld) {
            setfredDirToFront(true)
        } else {
            setfredDirToFront(false)
        }
        scrollStore.percentOld = scrollStore.percent
    }, [scrollStore.percent])


    useEffect(() => {
        if (scrollStore.fredMove) {
            if (!scrollStore.fredMoveInt) {
                scrollStore.fredMoveCounter = 1;
                scrollStore.fredMoveInt = setInterval(() => {
                    scrollStore.fredMoveCounter = scrollStore.fredMoveCounter + 1;
                    setfredState(scrollStore.fredMoveCounter % 7 + 1)
                }, 150);
            }
        } else {
            setfredState(0)
            clearInterval(scrollStore.fredMoveInt)
            scrollStore.fredMoveInt = null
        }
    }, [scrollStore.fredMove])

    // const numbers = 
    return (
        <>
            {Array.from({ length: 8 }, (_, index) => (
                <div className="Fred free_img" key={index}>
                    <img
                        src={`/img/fred/fred_anim${index}.svg`}
                        alt=""
                        style={{
                            transform: `scaleX(${fredDirToFront ? 1 : -1})`,
                            opacity: fredState === index ? 1 : 0
                        }}
                    />
                </div>
            ))}
        </>
    )
}