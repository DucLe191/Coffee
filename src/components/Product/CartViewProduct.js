import { Link } from "react-router-dom";
import '../../assets/styles/Product.scss'

function CartViewProduct({product,addToCart,cartItem,removeCart,closeCartView}) {
    const totalPrice = cartItem.reduce((price,item) => price + item.quantity * item.price,0)
    return(
        <div className="cart_view">
            <div className="cart_view_product">
                <div className="cart_view_title">
                    <i className="icofont-check"></i> 
                    Bạn đã thêm <span> {product.name} </span> vào giỏ hàng
                </div>
                <Link to='#' className="cart_view_quanlity_link">
                    <i className="icofont-shopping-cart"></i>
                    Giỏ hàng của bạn <span> ({cartItem.length} sản phẩm) </span> 
                    <i className="icofont-caret-right"></i>
                </Link>
                <div className="cart_view_content">
                    <div className="cart_view_content_head">
                        <div className="text_left"> Sản phẩm </div>
                        <div className="text_center first"> Đơn giá </div>
                        <div className="text_center second"> Số lượng </div>
                        <div className="text_right"> Thành tiền </div>
                    </div>
                    <div className="cart_view_content_body">
                        {cartItem.map((item) => {
                            return <div className="cart_view_content_body_item" key={item.id}>
                                <div className="item_detail">
                                    <div className="item_image">
                                        <Link to='#'>
                                            <img src={item.image} />
                                        </Link>
                                    </div>
                                    <div className="item_info">
                                        <p> <Link to={`/${item.slug}`} className="item_info_link"> {item.name} </Link> </p>
                                        <p className="first"> <i className="icofont-close"></i> Xóa sản phẩm </p>
                                        <p className="second"> <i className="icofont-check"></i> Sản phẩm vừa thêm </p>
                                    </div>
                                </div>
                                <div className="item_price"> {item.price}₫ </div>
                                <div className="item_quanlity">
                                    <div className='number'>
                                        <span onClick={() => removeCart(item)}> - </span>
                                        <span> {item.quantity} </span>
                                        <span onClick={() => addToCart(item)}> + </span>
                                    </div>
                                </div>
                                <div className="item_total"> {item.price}₫ </div>
                            </div>
                        })}
                    </div>
                    <div className="cart_view_content_foot">
                        <div className="cart_view_content_foot1">
                            <p className="first"> Giao hàng trên toàn quốc </p>
                            <p className="second"> Thành tiền: <span> {totalPrice.toFixed(3)}₫ </span> </p>
                        </div>
                        <div className="cart_view_content_foot2">
                            <span onClick={closeCartView}> <i className="icofont-caret-left"></i> Tiếp tục mua hàng </span>
                            <Link to='#' className="cart_view_content_foot2_link"> 
                                Tiến hành đặt hàng <i className="icofont-long-arrow-right"></i> 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='quick_view_product_close' onClick={closeCartView}> <i className="icofont-close"></i> </div>
            </div>
        </div>
    )
}

export default CartViewProduct;