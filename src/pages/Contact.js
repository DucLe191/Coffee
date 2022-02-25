import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Iframe from 'react-iframe'
import '../assets/styles/Contact.scss'

function Contact() {

    useEffect(() => {
        if(window.location.path = '/lien-he') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })

    return(
        <div className='contact'>
            <div className='container'>
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i> 
                            </Link>
                        </li>
                        <li> Liên hệ </li>
                    </ul>
                    <div className='title_page'> Liên hệ </div>
                </div>
                <div className='contact_content'>
                    <div className='row'>
                        <div className='col first'>
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7447.808258243062!2d105.7839696!3d21.0365217!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3135ab4a9b88235d%3A0x2aaf2c5a6046cc9b!2zMjIwIFh1w6JuIFRo4buneSBE4buLY2ggVuG7jW5nIEjhuq11IEPhuqd1IEdp4bqleSBIw6AgTuG7mWk!3m2!1d21.036521699999998!2d105.78396959999999!5e0!3m2!1svi!2s!4v1642393194124!5m2!1svi!2s"
                                width="100%"
                                height="450px"
                                className="map"
                                display="initial"
                                position="relative"
                            />
                        </div>
                        <div className='col second'>
                            <h1> Liên hệ </h1>
                            <ul>
                                <li> Địa chỉ: Ladeco Building, 266 Doi Can Street, Ba Dinh District, Ha Noi </li>
                                <li> Điện thoại: <span> 19006750 </span> </li>
                                <li> Email: <span> support@sapo.vn </span> </li>
                            </ul>
                        </div>
                        <div className='col third'>
                            <form>
                                <div className='input'>
                                    <input type='text' placeholder='Họ tên*' className='input_name'/>
                                    <input type='text' placeholder='Email*' />
                                </div>
                                <input type='text' placeholder='Điện thoại*' className='input_phone' />
                                <textarea placeholder='Nhập nội dung*'/>
                                <button type='submit'> Gửi liên hệ </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;