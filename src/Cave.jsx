import scrollStore from './scrollStore';
import './scss/Cave.scss';
export default () => {
    return (
        <div className='Cave free_img'>
            <div className='Cave_cave free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.098}px 70dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/cave.png"
                    alt=""
                    style={{
                        height: `21dvh`,
                    }}
                />
            </div>
            <div className='Cave_inner free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.098}px 70dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/caveInner.png"
                    alt=""
                    style={{
                        height: `21dvh`,
                    }}
                />
            </div>
        </div>
    )
}