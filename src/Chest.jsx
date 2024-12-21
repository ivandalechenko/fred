import scrollStore from './scrollStore';
import './scss/Chest.scss';
export default () => {
    return (
        <div className='Chest free_img  '>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.255}px 78dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/chest.png"
                    alt=""
                    style={{
                        height: `14dvh`,
                    }}
                />
            </div>
        </div>
    )
}