import scrollStore from './scrollStore';
import './scss/Sky.scss';
export default () => {
    return (
        <div className='Sky free_img'>
            <img src="/img/sky.webp" style={{
                transform: `rotate(${360 * (scrollStore.percent / 100)}deg)`
            }} alt="" />
        </div>
    )
}