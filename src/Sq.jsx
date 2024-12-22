import { useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Sq.scss';
import musicStore from './musicStore';

export default () => {
    const [coins, setCoins] = useState([]);

    const addCoin = () => {
        musicStore.piu()

        const id = Math.random().toString(36).substr(2, 9); // Уникальный ID
        const direction = Math.random() * 360; // Случайное направление
        const velocity = 3; // Начальная скорость
        const gravity = 0.5; // Сила притяжения

        // Добавляем новую монетку
        setCoins((prevCoins) => [
            ...prevCoins,
            { id, direction, opacity: 1, x: 0, y: 0, velocityY: 0 },
        ]);

        // Обновляем координаты монетки
        const interval = setInterval(() => {
            setCoins((prevCoins) =>
                prevCoins.map((coin) => {
                    if (coin.id === id) {
                        const rad = (coin.direction * Math.PI) / 180;
                        return {
                            ...coin,
                            x: coin.x + Math.cos(rad) * velocity, // Движение в сторону
                            y: coin.y + coin.velocityY, // Добавляем ускорение вниз
                            velocityY: coin.velocityY + gravity, // Ускорение от гравитации
                            opacity: coin.opacity - 0.02, // Плавное угасание
                        };
                    }
                    return coin;
                })
            );
        }, 50);

        // Удаляем монетку через 2 секунды
        setTimeout(() => {
            clearInterval(interval); // Останавливаем обновление
            setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
        }, 2000);
    };

    return (
        <div className='Sq free_img'>
            <img
                src="/img/sq.svg"
                className='Sq_sq'
                alt=""
                style={{
                    transform: `translate(${-scrollStore.pos + scrollStore.sceneWRaw * 0.0195}px,21.6dvh)`,
                    transition: `transform 200ms ease-out`,
                    height: `11.5vh`,
                }}
                onClick={addCoin}
            />
            <div
                className='Sq_coins free_img'
                style={{
                    transform: `translate(${-scrollStore.pos + scrollStore.sceneWRaw * 0.0180}px,22dvh)`,
                }}
            >
                {coins.map((coin) => (
                    <div
                        key={coin.id}
                        className='Sq_coin free_img'
                        style={{
                            transition: `all 50ms ease-out`,
                            transform: `translate(${coin.x}px, ${coin.y}px)`,
                            opacity: coin.opacity,
                            pointerEvents: 'none',
                        }}
                    >
                        <img src="/img/coin.png" alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};
