import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import FbBtn from '../assets/img/fb-btn.svg'
import GgBtn from '../assets/img/gp-btn.svg'
import '../assets/styles/Page.scss'

function Register() {
    useEffect(() => {
        if(window.location.path = '/dang-ky') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })
    return(
        <div className="login">
            <div className="container">
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i>
                            </Link>
                        </li>
                        <li> Đăng ký tài khoản </li>
                    </ul>
                    <div className='title_page'> Đăng ký tài khoản </div>
                </div>
                <div className='login_content'>
                    <h1> Đăng ký tài khoản </h1>
                    <div className='content_register'>
                        <span> Nếu chưa có tài khoản vui lòng đăng ký tại đây </span>
                            <form action='/dang-ky' id='customer_register'>
                                <div className='row'>
                                    <div className='col first_name'>
                                        <fieldset className='form_group'>
                                            <label> Họ: </label>
                                            <input type='text' />
                                        </fieldset>
                                    </div>
                                    <div className='col last_name'>
                                        <fieldset className='form_group'>
                                            <label> Tên: </label>
                                            <input type='text' />
                                        </fieldset>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col phone_number'>
                                        <fieldset className='form_group'>
                                            <label> Số điện thoại: </label>
                                            <input type='text' />
                                        </fieldset>
                                    </div>
                                    <div className='col email'>
                                        <fieldset className='form_group'>
                                            <label>  Email: </label>
                                            <input type='email' />
                                        </fieldset>
                                    </div>
                                    <div className='col password'>
                                        <fieldset className='form_group'>
                                            <label>  Mật khẩu: </label>
                                            <input type='password' />
                                        </fieldset>
                                    </div>
                                </div>
                                <div className='form_action'>
                                    <button type='submit'> Đăng ký </button>
                                </div>
                            </form>
                    </div>
                    <div className='login_social_network'>
                        <h3> Đăng nhập bằng Facebook hoặc Google </h3>
                        <div className='facebook_login'>
                            <Link to='#' className='login_social_network_link'>
                                <img src={FbBtn} /> 
                            </Link>
                        </div>
                        <div className='google_login'>
                            <Link to='#' className='login_social_network_link'>
                                <img src={GgBtn} /> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;