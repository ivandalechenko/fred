import musicStore from './musicStore';
import scrollStore from './scrollStore';
import './scss/Trace.scss';
export default () => {
    return (
        <div className='Trace free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.275}px 92dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/trace.png"
                    alt=""
                    style={{
                        height: `11dvh`,
                    }}
                    onClick={() => { musicStore.piu() }}

                />
            </div>
        </div>
    )
}