import { useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Hotel.scss';
export default () => {

    const [isHovered, setisHovered] = useState(false);

    return (
        <div className='Hotel free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.327}px 52dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src={`/img/${isHovered ? 'hodl' : 'hotel'}.png`}
                    alt=""
                    style={{
                        height: `16dvh`,
                    }}
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)}
                />
            </div>
        </div>
    )
}