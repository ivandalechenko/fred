import React, { useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Nest.scss';
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
        <div className='Nest free_img'>
            <div
                className='free_img'
                style={{
                    translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.468}px 32dvh`,
                    transition: `translate 200ms ease-out, transform 500ms`,
                }}
            >
                <img
                    src={`/img/nest.png`}
                    alt=""
                    style={{
                        height: `15dvh`,
                        transform: `rotate(${rotation}deg)`,
                        transition: ``,
                    }}
                    onClick={handleShake}
                />
            </div>
        </div>
    );
};
