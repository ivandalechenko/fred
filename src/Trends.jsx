import scrollStore from './scrollStore';
import './scss/Trends.scss';
export default () => {
    return (
        <div className='Trends free_img'>
            <div className='Trends_bull free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.07}px 68.6dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/bull.png"
                    alt=""
                    style={{
                        height: `26.5dvh`,
                    }}
                />
            </div>
            <div className='Trends_bear free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.042}px 68.6dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/bear.png"
                    alt=""
                    style={{
                        height: `26.5dvh`,
                        transform: `scaleX(-1)`
                    }}
                />
            </div>
        </div >
    )
}