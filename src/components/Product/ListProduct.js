import { Link} from 'react-router-dom';
import {useState} from 'react'
import QuickViewProduct from './QuickViewProduct';
import CartViewProduct from './CartViewProduct';
import '../../assets/styles/Product.scss'

const style = {
    boxShadow: "0 0 5px 0 rgb(0 0 0 / 15%)"
}

function ListProduct(props) {
    const {product,addToCart,cartItem,removeCart} = props
    const [showQuickViewProduct,setShowQuickViewProduct] = useState(false)
    const [showCartView,setShowCartView] = useState(false)
    const showQuickView = () => {
        setShowQuickViewProduct(true)
    }
    const closeQuickView = () => {
        setShowQuickViewProduct(false)
    }
    const showCart = () => {
        setShowCartView(true)
    }
    const closeCartView = () => {
        setShowCartView(false)
    }
    
    return(
        <>
            <div className='list_product'>
                <div className='list_product_thumbnail'>
                    <Link to={`/${product.slug}`} className='list_product_thumbnail_link'>
                        <img src={product.image} /> 
                    </Link>
                    <div className='show_icon_view' onClick={showQuickView}>
                        <i className="icofont-eye-alt"></i>
                    </div>      
                    <div className='show_icon_cart' onClick={() => {
                        showCart();
                        addToCart(product)
                    }}>
                        <i className="icofont-cart-alt"></i>
                    </div>
                </div>
                <div className='list_product_name'>
                    <h3> <Link to={`/${product.slug}`} className='list_product_name_link'> {product.name} </Link> </h3>
                </div>
                <div className='list_product_price' style={style}> {product.price}₫ </div>
            </div>
            {showQuickViewProduct && 
                <QuickViewProduct product={product} closeQuickView={closeQuickView} addToCart={addToCart} /> 
            }
            {showCartView && 
                <CartViewProduct product={product} addToCart={addToCart} cartItem={cartItem} removeCart={removeCart}
                closeCartView={closeCartView} /> 
            }
        </>
    )
}

export default ListProduct;