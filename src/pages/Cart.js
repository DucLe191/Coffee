import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/Page.scss'

function Cart({cartItem,addToCart,removeCart}) {
    const totalPrice = cartItem.reduce((price,item) => price + item.quantity * item.price,0)

    useEffect(() => {
        if(window.location.path = '/gio-hang') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })

    return(
        <div className='cart'>
            <div className='container'>
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i>
                            </Link>
                        </li>
                        <li> Giỏ hàng </li>
                    </ul>
                    <div className='title_page'> Giỏ hàng </div>
                </div>
                <div className='cart_content'>
                    {cartItem.length ===0 && <p> Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua sắm. </p>}
                    {cartItem.length !==0 && 
                        <>
                            <form action='/gio-hang'>
                                <div className='cart_content_thead'>
                                    <div style={{width:'18%'}}> Ảnh sản phẩm </div>
                                    <div style={{width:'32%'}}> Tên sản phẩm </div>
                                    <div style={{width:'17%'}}> Đơn giá </div>
                                    <div style={{width:'14%'}}> Số lượng </div>
                                    <div style={{width:'14%'}}> Thành tiền </div>
                                    <div style={{width:'5%'}}> Xóa </div>
                                </div>
                                <div className='cart_content_tbody'>
                                {cartItem.map((item) => {
                                    if(window.outerWidth > 820) {
                                        return <div key={item.id} className='cart_content_box'> 
                                                <div className='cart_image' style={{width:'18%'}}>
                                                    <img src={item.image} />
                                                </div>
                                                <div className='cart_name' style={{width:'32%'}}>
                                                    <Link to={`/${item.slug}`} className='cart_content_tbody_link'> 
                                                        {item.name} 
                                                    </Link>
                                                </div>
                                                <div className='cart_price' style={{width:'17%'}}> {item.price}₫ </div>
                                                <div className='cart_number' style={{width:'14%'}}>
                                                    <span className='item_decrease' 
                                                        onClick={() => removeCart(item)}
                                                    > - 
                                                    </span>
                                                    <span className='item_quantity'> {item.quantity} </span>
                                                    <span className='item_increase'
                                                        onClick={() => addToCart(item)}
                                                        > + 
                                                    </span>
                                                </div>
                                                <div className='cart_price2' style={{width:'14%'}}>
                                                    <span> {item.price}₫ </span>
                                                </div>
                                                <div className='cart_delete' 
                                                    style={{width:'5%'}} 
                                                    onClick={() => removeCart(item)}
                                                > 
                                                    <i className="icofont-trash"></i>
                                                </div>
                                            </div>
                                    }
                                    else {
                                        return <div key={item.id} className='cart_content_box2'> 
                                            <div className='cart_content_box2_left'>
                                                <div className='cart_image'>
                                                    <img src={item.image} />
                                                </div>
                                                <div className='cart_name'>
                                                <Link to={`/${item.slug}`} className='cart_name_link'> 
                                                    {item.name} 
                                                </Link>
                                                </div>
                                                <div className='cart_price'> Giá: <span> {item.price}₫ </span> </div>
                                            </div>
                                            <div className='cart_content_box2_right'>
                                                <div className='cart_number'>
                                                    <span className='item_decrease' 
                                                        onClick={() => removeCart(item)}
                                                    > - 
                                                    </span>
                                                    <span className='item_quantity'> {item.quantity} </span>
                                                    <span className='item_increase'
                                                        onClick={() => addToCart(item)}
                                                        > + 
                                                    </span>
                                                </div>
                                                <div className='cart_delete' 
                                                    onClick={() => removeCart(item)}
                                                > 
                                                    <i className="icofont-trash"></i>
                                                </div>
                                            </div>
                                    </div> 
                                    }
                                })}
                                </div>
                            </form> 
                            <div className='row'>
                                <div className='col'>
                                    <Link to='/' className='btn_cart_continue'> Tiếp tục mua hàng </Link>
                                </div>
                                <div className='col'>
                                    <div className='table_total'>
                                        <div className='table_total_text'> Tổng tiền thanh toán: </div>
                                        <div className='table_total_price'> {totalPrice.toFixed(3)}₫ </div>
                                    </div>
                                    <Link to='#' className='btn_checkout_cart'> Tiến hành thanh toán </Link>
                                </div>
                            </div>
                        </>   
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart;