import { useState } from 'react';
import { Link} from 'react-router-dom';
import QuickViewProduct from './QuickViewProduct';
import CartViewProduct from './CartViewProduct';
import '../../assets/styles/Product.scss'

function ListProduct2(props) {
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
        <div className='list_product2'>
            <div className="list_product2_row"> 
                <div className='list_product2_thumbnail'>
                    <Link to={`/${product.slug}`} className='list_product2_thumbnail_link'>
                        <img src={product.image} /> 
                    </Link>
                </div>
                <div className='list_product2_info'>
                    <div className='list_product2_name'>
                        <h3> 
                            <Link to={`/${product.slug}`} className='list_product2_name_link'> {product.name} </Link> 
                        </h3>
                    </div>
                    <div className='list_product2_price'> {product.price} </div>
                    <div className='list_product2_description'>
                        <p> {product.description} </p>
                    </div>
                    <div className='list_product2_action'>
                        <div className='show_icon_cart' onClick={() => {
                            showCart();
                            addToCart(product)
                        }}>
                        <i className="icofont-cart-alt"></i>
                        </div>      
                        <div className='show_icon_view' onClick={showQuickView}>
                            <i className="icofont-eye-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
            {showQuickViewProduct && 
                <QuickViewProduct product={product} closeQuickView={closeQuickView} addToCart={addToCart} /> 
            }
            {showCartView && 
                <CartViewProduct product={product} addToCart={addToCart} cartItem={cartItem} removeCart={removeCart}
                closeCartView={closeCartView} /> 
            }
        </div>
    )
}

export default ListProduct2;