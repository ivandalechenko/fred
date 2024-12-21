import scrollStore from './scrollStore';
import './scss/Flag.scss';
export default () => {
    return (
        <div className='Flag free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.156}px 48dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/flag.png"
                    alt=""
                    style={{
                        height: `10dvh`,
                    }}
                />
            </div>
        </div>
    )
}