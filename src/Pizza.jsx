import { useState } from 'react';
import './scss/Pizza.scss';
import scrollStore from './scrollStore';
import musicStore from './musicStore';
export default () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='Pizza free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.385}px 85.1dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/pizza.png"
                    alt=""
                    style={{
                        height: `20dvh`,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => { musicStore.piu() }}

                />
            </div>
            <div className='Pizza_text free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.385}px 57.1dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <div className='Pizza_text_inner' style={{
                    opacity: isHovered ? 1 : 0
                }}>
                    The first Bitcoin purchase was in 2010 when 10,000 BTC were used to buy two pizzas.
                </div>
            </div>
        </div >
    )
}