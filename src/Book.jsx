import musicStore from './musicStore';
import scrollStore from './scrollStore';
import './scss/Book.scss';
export default () => {
    return (
        <div className='Book free_img'>
            <div className='free_img' style={{
                translate: `${-scrollStore.pos + scrollStore.sceneWRaw * 0.17}px 88dvh`,
                transition: `translate 200ms ease-out, transform 500ms`,
            }}>
                <img
                    src="/img/book.png"
                    alt=""
                    style={{
                        height: `10dvh`,
                    }} onClick={() => { musicStore.piu() }}

                />
            </div>
        </div>
    )
}