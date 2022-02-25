import Back from'../../assets/img/back-top.jpg'
import '../../assets/styles/Order.scss' 

function BackTop({onScrollToTop}) {
    return(
        <div className='back-top' onClick={onScrollToTop}> 
            <img src={Back} />
        </div>
    )
}

export default BackTop;