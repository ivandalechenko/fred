import musicStore from './musicStore';
import scrollStore from './scrollStore';
import './scss/Rocks.scss';
export default () => {




    return (
        <div className='Rocks free_img'>
            <div className='Rocks_left free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.129}px 85dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/RocksLeft.png"
                    alt=""
                    style={{
                        height: `10dvh`,
                    }} onClick={() => { musicStore.piu() }}

                />
            </div>
            <div className='Rocks_right free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.129}px 85dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/RocksRight.png"
                    alt=""
                    style={{
                        height: `10dvh`,
                    }} onClick={() => { musicStore.piu() }}

                />
            </div>
        </div>
    )
}