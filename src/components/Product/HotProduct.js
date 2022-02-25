import {Link,useParams} from 'react-router-dom'
import '../../assets/styles/Product.scss'

function HotProduct(props) {
    const {slug} = useParams()
    const {product} = props 
    return(
        <>
            <div className='product_box'>
                <div className='product_thumbnail'>
                    <Link to={`/${product.slug}`} className='product_thumbnail_link'> <img src={product.image} /> </Link>
                </div>
                <div className='product_info'>
                    <Link to={`/${product.slug}`} className='product_info_link'> <h3> {product.name} </h3> </Link>
                    <span>{product.price}₫ </span>
                    <div className='content'>
                    <p> {product.description} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotProduct;