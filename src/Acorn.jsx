import { useState } from 'react';
import './scss/Acorn.scss';
import scrollStore from './scrollStore';
import musicStore from './musicStore';
export default () => {
    const [acornState, setacornState] = useState(0);
    const [rotate, setrotate] = useState(false);

    return (
        <div className='Acorn free_img'>
            <img src={`/img/acorn${acornState + 1}.png`} alt="" onClick={() => {
                setrotate(!rotate)
                musicStore.piu()
                setTimeout(() => {
                    setacornState(prev => (prev + 1) % 4)
                }, 200);
            }} style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.015}px 80dvh`,
                transition: `translate 200ms ease-out, rotate 400ms cubic-bezier(.51,-0.48,.5,1.42)`,
                height: `11.5dvh`,
                rotate: `${rotate ? 720 : 0}deg`
            }} />
        </div>
    )
}