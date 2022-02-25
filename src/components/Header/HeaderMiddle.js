import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import '../../assets/styles/Header.scss'

function HeaderMiddle({cartItem,productItem,search,searchText,productItemSearch}) {
    return(
        <div className="header_middle">
            <div className="container">
                <div className="header_middle_left">
                    <input type='checkbox' id='nav_bar' />
                    <label htmlFor='nav_bar' className='nav_icon_mobile_tablet'> 
                        <i className="icofont-navigation-menu"></i>
                    </label>
                    <nav className='nav_mobile_tablet'>
                        <ul className='nav_mobile_tablet_list'>
                            <li> <Link to='/'  className='header_nav_link_mobile_tablet'> Trang chủ </Link>  </li>
                            <li> <Link to='/gioi-thieu' className='header_nav_link_mobile_tablet'> 
                                Giới thiệu 
                            </Link> </li>
                            <li className='nav_list_item'>
                                <Link to='/san-pham' className='header_nav_link_mobile_tablet'> 
                                    Sản phẩm 
                                </Link>
                                <label htmlFor='nav_sub_menu'> <i className="icofont-rounded-down"></i> </label>
                                <input type='checkbox' id='nav_sub_menu' />
                                <ul className='sub_menu'>
                                    <li> <Link to='/coffee' className='sub_menu_link'> Coffee </Link> </li>
                                    <li> <Link to='/nuoc-ep' className='sub_menu_link'> Nước ép </Link> </li>
                                    <li> <Link to='/tra' className='sub_menu_link'> Trà sữa </Link> </li>
                                    <li> <Link to='/cock-tail' className='sub_menu_link'> Cocktail </Link> </li>
                                </ul>
                            </li>
                            <li> <Link to='/tin-tuc' className='header_nav_link_mobile_tablet'> Tin tức </Link>  </li>
                            <li>  <Link to='/lien-he' className='header_nav_link_mobile_tablet'> Liên hệ </Link> </li>
                        </ul>
                    </nav>
                    <div className="logo">
                        <Link to='/' className='header_nav_link'> <img src={Logo} alt='logo'/> </Link>
                    </div>
                    <nav>
                        <ul>
                            <li> <Link to='/'  className='header_nav_link'> Trang chủ </Link>  </li>
                            <li> <Link to='/gioi-thieu' className='header_nav_link'> Giới thiệu </Link> </li>
                            <li>
                                <Link to='/san-pham' className='header_nav_link'> Sản phẩm </Link>
                            </li>
                            <li> <Link to='/tin-tuc' className='header_nav_link'> Tin tức </Link>  </li>
                            <li>  <Link to='/lien-he' className='header_nav_link'> Liên hệ </Link> </li>
                        </ul>
                    </nav>
                </div>
                <div className="header_middle_right">
                    <div className="search">
                        <i className="icofont-search-2"></i>
                        <div className='search_box'>
                            <form action='/tim-kiem'>
                                <span>
                                    <button> <i className="icofont-search-2"></i> </button>
                                </span>
                                <input placeholder='Tìm kiếm...' 
                                        value={search}
                                        onChange={searchText}
                                />
                            </form>
                        </div>
                    </div>
                    <div className="cart">
                        <Link to='/gio-hang' className='cart_link'> 
                            <i className="icofont-shopping-cart"></i>
                            <span> {cartItem.length} </span> 
                        </Link>
                    </div>
                    <div className="user">
                        <i className="icofont-user-alt-3"></i>
                        <div className='user_box'>
                            <ul>
                                <li> <Link to='/dang-nhap' className='user_box_link'> Đăng nhập </Link> </li>
                                <li> <Link to='/dang-ky' className='user_box_link'> Đăng ký </Link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle;
