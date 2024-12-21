import scrollStore from './scrollStore';
import './scss/Bridge.scss';
export default () => {
    return (
        <div className='Bridge free_img'>
            <div className='Bridge_inner free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.123}px 55.8dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/bridge.png"
                    alt=""
                    style={{
                        height: `10dvh`,
                    }}
                />
            </div>
        </div>
    )
}