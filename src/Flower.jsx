import scrollStore from './scrollStore';
import './scss/Flower.scss';
export default () => {
    return (
        <div className='Flower free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.77}px 83dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src={`/img/flower${scrollStore.percent > 75 ? scrollStore.percent < 81 ? Math.floor((scrollStore.percent - 74) % 7) : 6 : 1}.png`}
                    alt=""
                    style={{
                        height: `16dvh`,
                    }}
                />
            </div>
        </div>
    )
}


// 