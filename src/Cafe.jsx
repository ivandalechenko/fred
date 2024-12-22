import { useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Cafe.scss';
import musicStore from './musicStore';
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
                    onClick={() => { musicStore.piu() }}

                />
            </div>
            <div className='Cafe_text free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.315}px 47.1dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <div className='Cafe_text_inner' style={{
                    opacity: isHovered ? 1 : 0
                }}>
                    Mt. Gox, one of the first and largest crypto exchanges, went bankrupt in 2014 after losing about 850,000 bitcoins due to a hacking attack and management failures.
                </div>
            </div>
        </div >
    )
}