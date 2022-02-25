import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import AsideBanner from '../assets/img/aside_banner.png'
import Blog1 from '../assets/img//blog3.jpg'
import Blog2 from '../assets/img//blog2.jpg'
import Blog3 from '../assets/img//blog1.jpg'
import '../assets/styles/Page.scss'

function News() {
    useEffect(() => {
        if(window.location.path = '/tin-tuc') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })
    return(
        <div className="coffee">
            <div className="container">
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i>
                            </Link>
                        </li>
                        <li> Tin tức </li>
                    </ul>
                    <div className='title_page'> Tin tức </div>
                </div>
                <div className='content'>
                    <div className='row'>
                        <div className='col sidebar'>
                            <aside className='content_category'>
                                <div className='content_category_title'>
                                    <h2> DANH MỤC </h2>
                                </div>
                                <div className='content_category_box'>
                                    <ul>
                                        <li>
                                            <Link to='/' className='content_category_box_link'> 
                                                Trang chủ 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/gioi-thieu' className='content_category_box_link'> 
                                                Giới thiệu 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/san-pham' className='content_category_box_link'> 
                                                Sản phẩm 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/lien-he' className='content_category_box_link'> 
                                                Liên hệ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                            <aside className='content_banner'>
                                <img src={AsideBanner} />
                            </aside>
                        </div>
                        <div className='col product'>
                            <div className='blog_item first'>
                                <div className='blog_item_thumbnail'>
                                    <img src={Blog1} />
                                </div>
                                <div className='blog_item_info'>
                                    <h3> CHẾ BIẾN CÀ PHÊ </h3>
                                    <div className='blog_item_meta'>
                                        <p className='post_author'> Nguyễn Hữu Mạnh </p>
                                        <p className='post_time'> 04/04/2019 - </p>
                                        <p className='post_comment'> <span> 0 </span> bình luận </p>
                                    </div>
                                    <p className='blog_item_summary'> Cà phê sạch hiểu đơn giản là 100% cà phê, không pha trộn thêm bất cứ thứ gì khác. Vậy quy trình sản xuất chế biến cà phê sạch như thế nà... </p>
                                </div>
                            </div>
                            <div className='blog_item'>
                                <div className='blog_item_thumbnail'>
                                    <img src={Blog2} />
                                </div>
                                <div className='blog_item_info'>
                                    <h3> TÌNH YÊU VÀ CÀ PHÊ </h3>
                                    <div className='blog_item_meta'>
                                        <p className='post_author'> Nguyễn Hữu Mạnh </p>
                                        <p className='post_time'> 04/04/2019 - </p>
                                        <p className='post_comment'> <span> 0 </span> bình luận </p>
                                    </div>
                                    <p className='blog_item_summary'> TÌNH YÊU VÀ CÀ PHÊ Yêu một người cũng giống yêu một hương vị cà phê. Có thể mất rất ít thời gian để thích, để khám phá. Nhưng cả tình ... </p>
                                </div>
                            </div>
                            <div className='blog_item'>
                                <div className='blog_item_thumbnail'>
                                    <img src={Blog3} />
                                </div>
                                <div className='blog_item_info'>
                                    <h3> LẮNG NGHE CÀ PHÊ KỂ CHUYỆN </h3>
                                    <div className='blog_item_meta'>
                                        <p className='post_author'> Nguyễn Hữu Mạnh </p>
                                        <p className='post_time'> 04/04/2019 - </p>
                                        <p className='post_comment'> <span> 0 </span> bình luận </p>
                                    </div>
                                    <p className='blog_item_summary'> Cuộc đời cafe, cũng như cuộc đời của con người, cũng phải 9 tháng 10 ngày thai nghén mới được thu hoạch. Café cũng có quãng thời g... </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;