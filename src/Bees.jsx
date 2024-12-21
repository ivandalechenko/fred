import scrollStore from './scrollStore';
import './scss/Bees.scss';
export default () => {
    return (
        <div className='Bees free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos * .8 + scrollStore.sceneWRaw * 0.6}px 80dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src={`/img/bee.png`}
                    alt=""
                    style={{
                        height: `10dvh`,
                        transform: 'scaleX(-1)'
                    }}
                />
            </div>
        </div>
    )
}