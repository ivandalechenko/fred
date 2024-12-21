import scrollStore from './scrollStore';
import './scss/Clock.scss';
export default () => {
    return (
        <div className='Clock free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.3501}px 34dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src={`/img/clock.png`}
                    alt=""
                    style={{
                        height: `12dvh`,
                    }}
                />
            </div>
        </div>
    )
}