import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import FbBtn from '../assets/img/fb-btn.svg'
import GgBtn from '../assets/img/gp-btn.svg'
import '../assets/styles/Page.scss'

function Login() {
    useEffect(() => {
        if(window.location.path = '/dang-nhap') {
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
                        <li> Đăng nhập tài khoản </li>
                    </ul>
                    <div className='title_page'> Đăng nhập tài khoản </div>
                </div>
                <div className='login_content'>
                    <h1> Đăng nhập tài khoản </h1>
                    <div className='row'>
                        <div className='col login'>
                            <span> Nếu bạn đã có tài khoản, đăng nhập tại đây. </span>
                            <form action='/dang-nhap' id='customer_login'>
                                <fieldset className='form_group'>
                                    <label htmlFor='name'> Email: </label>
                                    <input type='email' name='email'  placeholder='Email' />
                                </fieldset>
                                <fieldset className='form_group'>
                                    <label htmlFor='password'> Mật khẩu: </label>
                                    <input type='password' name='password'  placeholder='Mật khẩu' />
                                </fieldset>
                                <div className='form_action'>
                                    <button type='submit'> Đăng nhập </button>
                                    <Link to='#' className='form_action_link'> Đăng ký </Link>
                                </div>
                            </form>
                        </div>
                        <div className='col recover_password'>
                            <span> Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email. </span>
                            <form id='recover_customer_password'>
                                <fieldset className='form_group'>
                                    <label htmlFor='name'> Email: </label>
                                    <input type='email' name='email'  placeholder='Email' />
                                </fieldset>
                                <div className='form_action'>
                                    <button type='submit'> Lấy lại mật khẩu </button>   
                                </div>
                            </form>
                        </div>
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

export default Login;