import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import '../assets/styles/Order.scss'

function Order() {
    useEffect(() => {
        if(window.location.path = '/dat-ban') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })

    return(
        <div className="order">
            <div className="container">
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i>
                            </Link>
                        </li>
                        <li> Đặt bàn </li>
                    </ul>
                    <div className='title_page'> Đặt bàn </div>
                </div>
                <div className='order_content'>
                    <div className='row'>
                        <div className='order_left'>
                            <div className='text'>
                                <h3> Giờ mở cửa </h3>
                                <p> <b> Thứ 2 - Thứ 6 hàng tuần </b> <br/> 7h sáng - 11h sáng <br/> 11h sáng - 10h tối </p>
                                <p> <b> Thứ 7, Chủ nhật hàng tuần </b> <br/> 8h sáng - 1h chiều  <br/> 1h chiều - 9h tối </p>
                                <h3 className='border'> Số điện thoại </h3>
                                <span> 0902068068 </span>
                            </div>
                        </div>
                        <div className='order_right'>
                            <h3> Gọi ngay cho chúng tôi để đặt bàn </h3>
                            <form action='/contact' id='contact'>
                                <div className='row'>
                                    <div className='col'>
                                        <fieldset className='form_group'>
                                            <i className="icofont-user-alt-1"></i>
                                            <input type='text' placeholder='Họ tên*' />
                                        </fieldset>
                                    </div>
                                    <div className='col'>
                                        <fieldset className='form_group'>
                                            <i className="icofont-phone"></i>
                                            <input type='text' placeholder='Điện thoại*' />
                                        </fieldset>
                                    </div>
                                    <div className='col'>
                                        <fieldset className='form_group'>
                                            <i className="icofont-ui-calendar"></i>
                                            <input type='date' placeholder='Ngày*' />
                                        </fieldset>
                                    </div>
                                    <div className='col'>
                                        <fieldset className='form_group'>
                                            <i className="icofont-clock-time"></i>
                                            <input type='time' placeholder='Giờ*' />
                                        </fieldset>
                                    </div>
                                </div>
                                <fieldset className='form_group'>
                                    <textarea placeholder='Nhập nội dung*' />
                                </fieldset>
                                <button type='submit'> Đặt bàn ngay </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;