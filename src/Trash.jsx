import { useState } from 'react';
import './scss/Trash.scss';
import scrollStore from './scrollStore';
export default () => {
    const [coins, setCoins] = useState([]);

    const addCoin = () => {
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
        <div className='Trash free_img'>
            <img
                src="/img/trash.png"
                className='Trash_trash'
                alt=""
                style={{
                    transform: `translate(${-scrollStore.pos + scrollStore.sceneWRaw * 0.88}px,84dvh)`,
                    transition: `transform 200ms ease-out`,
                    height: `11.5dvh`,
                }}
                onClick={addCoin}
            />
            <div
                className='Trash_coins free_img'
                style={{
                    transform: `translate(${- scrollStore.pos + scrollStore.sceneWRaw * 0.875}px,84dvh)`,
                    transition: `transform 200ms ease-out`,
                }}
            >
                {coins.map((coin) => (
                    <div
                        key={coin.id}
                        className='Trash_coin free_img'
                        style={{
                            transition: `all 50ms ease-out`,
                            transform: `translate(${coin.x}px, ${coin.y}px)`,
                            opacity: coin.opacity,
                            pointerEvents: 'none',
                        }}
                    >
                        <img src="/img/trashGold.png" alt="" />
                    </div>
                ))}
            </div>
        </div >
    );
}