import { useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Mine.scss';
import musicStore from './musicStore';
export default () => {

    const [rotation, setRotation] = useState(0);

    const handleShake = () => {
        musicStore.piu()

        const randomAngle = (Math.random() * 30 - 15); // Случайный угол от -10 до 10
        setRotation(randomAngle);
        setTimeout(() => setRotation(0), 100); // Возврат к исходному состоянию
    };

    return (
        <div className='Mine free_img'>
            <div
                className='Mine_mine free_img'
                style={{
                    translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.5077}px 77.3dvh`,
                }}
            >
                <img
                    src={`/img/mine.png`}
                    alt=""
                    style={{
                        height: `35dvh`,
                        transition: ``,
                    }}
                    onClick={handleShake}
                />
            </div>
            <div
                className='Mine_asics free_img'
                style={{
                    translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.5077}px 77.3dvh`,
                    transition: `translate 200ms ease-out, transform 500ms`,
                    pointerEvents: 'none'
                }}
            >
                <img
                    src={`/img/asics.png`}
                    alt=""
                    style={{
                        height: `35dvh`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                // onClick={handleShake}
                />
            </div >
        </div >
    )
}