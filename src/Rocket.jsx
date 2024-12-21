import { useEffect, useState } from 'react';
import scrollStore from './scrollStore';
import './scss/Rocket.scss';
export default () => {

    const [rocketState, setrocketState] = useState(0);
    let rocketInt
    useEffect(() => {
        rocketInt = setInterval(() => {
            setrocketState(prev => ((prev + 1) % 3))
        }, 200);
        return () => {
            clearInterval(rocketInt)
        }
    }, [])

    return (
        <div className='Rocket free_img'>
            <div className='Rocket_station free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.226}px 64.5dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/rocketStation.png"
                    alt=""
                    style={{
                        height: `50dvh`,
                    }}
                />
            </div>
            <div className='Rocket_rocket free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.226}px ${scrollStore.percent > 18 ? 60.5 - (scrollStore.percent * 5 - 90) : 60.5}dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src={`/img/rocket${rocketState + 1}.png`}
                    alt=""
                    style={{
                        height: `50dvh`,
                    }}
                />
            </div>
        </div>
    )
}