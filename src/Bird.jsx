import scrollStore from './scrollStore';
import './scss/Bird.scss';
export default () => {
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
                />
            </div>
        </div>
    )
}