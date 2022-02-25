import {Link} from 'react-router-dom'
import '../../assets/styles/Order.scss'

function IconOrder() {
    return(
        <div className='icon_order'> 
            <Link to='dat-ban' className='icon_order_link'>
                <span> Đặt bàn </span>
                <i className="icofont-calendar"></i>
            </Link>
        </div>
    )
}

export default IconOrder;