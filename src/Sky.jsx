import { useEffect, useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Sky.scss';
export default () => {
    const [w, setw] = useState(0);

    useEffect(() => {
        gameInit();
        window.addEventListener("resize", gameInit);
        return () => {
            window.removeEventListener("resize", gameInit);
        };
    }, []);


    const gameInit = () => {
        setw(+document.documentElement.clientWidth)
    }

    return (
        <div className='Sky free_img'>
            <img src={`/img/${w > 800 ? 'skyPc' : 'sky'}.webp`} style={{
                transform: `rotate(${360 * (scrollStore.percent / 100)}deg)`
            }} alt="" />
        </div>
    )
}