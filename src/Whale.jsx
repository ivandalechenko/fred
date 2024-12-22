import musicStore from './musicStore';
import scrollStore from './scrollStore';
import './scss/Whale.scss';
export default () => {
    return (
        <div className='Whale free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.847}px 67dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/whale.png"
                    alt=""
                    style={{
                        height: `20dvh`,
                    }}
                    onClick={() => { musicStore.piu() }}

                />
            </div>
        </div>
    )
}