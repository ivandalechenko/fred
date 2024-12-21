import scrollStore from './scrollStore';
import './scss/MountTrace.scss';
export default () => {
    return (
        <div className='MountTrace free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.635}px 67dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/mountTrace.png"
                    alt=""
                    style={{
                        height: `11dvh`,
                    }}
                />
            </div>
        </div>
    )
}