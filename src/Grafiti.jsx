import scrollStore from './scrollStore';
import './scss/Grafiti.scss';
export default () => {
    return (
        <div className='Grafiti free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.3525}px 80dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src={`/img/grafiti.png`}
                    alt=""
                    style={{
                        height: `12dvh`,
                    }}
                />
            </div>
        </div>
    )
}