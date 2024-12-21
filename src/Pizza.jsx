import { useState } from 'react';
import './scss/Pizza.scss';
import scrollStore from './scrollStore';
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
                />
            </div>
            <div className='Pizza_text free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.385}px 57.1dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <div className='Pizza_text_inner' style={{
                    opacity: isHovered ? 1 : 0
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, fuga. Minus doloremque quas itaque dolores saepe nam vel quasi dolorem.
                </div>
            </div>
        </div >
    )
}