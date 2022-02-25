import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import '../../assets/styles/Footer.scss'

function Footer() {
    return(
        <footer className='footer'> 
           <div className='container'>
                <div className='logo'>
                    <img src={Logo} />
                </div>
                <div className='site-footer'>
                    <div className='row'>
                        <div className='col connect'>
                            <h3> Kết nối với chúng tôi </h3>
                            <p> Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất. Là điểm đến đầu tiên dành cho bạn khi muốn thưởng thức trọn vẹn của tách Coffee </p>
                            <ul>
                                <li> <i className="icofont-twitter"></i> </li>
                                <li> <i className="icofont-facebook"></i> </li>
                                <li> <i className="icofont-pinterest"></i> </li>
                                <li> <i className="icofont-instagram"></i> </li>
                                <li> <i className="icofont-brand-youtube"></i> </li>
                            </ul>
                        </div>
                        <div className='col store'>
                            <h3> Hệ thống cửa hàng </h3>
                            <p> <i className="icofont-google-map"></i> Coffe Doi Can </p>
                            <p> Địa chỉ: Ladeco Building, 266 Doi Can Street, Ba Dinh District, Ha Noi </p>
                            <p> Hotline: 19006750 </p>
                        </div>
                        <div className='col policy'>
                            <h3> Chính sách </h3>
                            <ul>
                                <li> <Link to='/' className='footer_nav_link'> Trang chủ </Link> </li>
                                <li> <Link to='/gioi-thieu' className='footer_nav_link'> Giới thiệu </Link> </li>
                                <li> <Link to='/san-pham' className='footer_nav_link'> Sản phẩm </Link> </li>
                                <li> <Link to='/tin-tuc' className='footer_nav_link'> Tin tức </Link> </li>
                                <li> <Link to='/lien-he' className='footer_nav_link'> Liên hệ  </Link> </li>
                            </ul>
                        </div>
                        <div className='col contact'>
                            <h3> Liên hệ </h3>
                            <p> Thứ 2 - Thứ 6: 6am - 9pm </p>
                            <p> Thứ Bảy - Chủ Nhật: 6am - 10pm </p>
                            <p> Mở cửa toàn bộ các ngày trong năm( Chỉ đóng cửa vào ngày lễ). </p>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    © Bản quyền thuộc về halucafe ! Cung cấp bởi Sapo
                </div>
           </div>
        </footer>
    )
}

export default Footer;
