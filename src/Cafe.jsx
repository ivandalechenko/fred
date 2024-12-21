import { useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Cafe.scss';
export default () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='Cafe free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.315}px 71.1dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/cafe.png"
                    alt=""
                    style={{
                        height: `30dvh`,
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </div>
            <div className='Cafe_text free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.315}px 47.1dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <div className='Cafe_text_inner' style={{
                    opacity: isHovered ? 1 : 0
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, fuga. Minus doloremque quas itaque dolores saepe nam vel quasi dolorem.
                </div>
            </div>
        </div >
    )
}