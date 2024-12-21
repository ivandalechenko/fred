import scrollStore from './scrollStore';
import './scss/SatoshiShadow.scss';
export default () => {
    return (
        <div className='SatoshiShadow free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.441}px 78dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src={`/img/satoshiShadow.png`}
                    alt=""
                    style={{
                        height: `20dvh`,
                    }}
                />
            </div>
        </div>
    )
}   