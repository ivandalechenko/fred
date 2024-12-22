import { useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Bird.scss';
import musicStore from './musicStore';
export default () => {
    const replics = ['caw', "CAW", "CAAW!!!", "HODL"]
    const [text, settext] = useState('caw');
    const [visible, setvisible] = useState(false);
    const [rotate, setrotate] = useState(0);

    const say = () => {
        musicStore.piu()

        setrotate(20 - Math.random() * 40)
        setvisible(true);
        settext(replics[Math.floor(Math.random() * replics.length)])
        // тут случайное значение из replics
        setTimeout(() => {
            setvisible(false)
        }, 100);
    }

    return (
        <div className='Bird free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.7425}px 24dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src={`/img/bird${scrollStore.percent > 72 ? scrollStore.percent < 75 ? Math.floor((scrollStore.percent - 71) % 4) : 3 : 1}.png`}
                    alt=""
                    style={{
                        height: `16dvh`,
                    }}
                    onClick={say}
                />
            </div>
            <div className={`free_img Bird_text ${visible && 'Bird_text_show'}`} style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.735}px 20dvh`,
                transition: `translate 200ms ease-out, transform 500ms, opacity 500ms`,
                rotate: `${rotate}deg`
            }}>
                {text}
            </div>
        </div>
    )
}