import {Link} from 'react-router-dom'
import '../../assets/styles/Page.scss'

function HotProductNav(props) {
    const {product} = props
    return(
        <div className='hot_item_list'>
            <div className='hot_item_list_thumbnail'>
                <Link to={`/${product.slug}`}> <img src={product.image} /> </Link>
            </div>
            <div className='hot_item_list_info'>
                <Link to={`/${product.slug}`} className='hot_item_list_info_link'> <h3> {product.name} </h3> </Link>
                <span> {product.price}₫ </span>
            </div>
        </div>
    )
}

export default HotProductNav;