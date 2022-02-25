import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import AsideBanner from '../assets/img/aside_banner.png'
import HotProductNav from '../components/Product/HotProductNav'
import '../assets/styles/Page.scss'

function Introduce({productItem}) {
    useEffect(() => {
        if(window.location.path = '/gioi-thieu') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })

    return(
        <div className="introduce">
            <div className="container">
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i>
                            </Link>
                        </li>
                        <li> Giới thiệu </li>
                    </ul>
                    <div className='title_page'> Giới thiệu  </div>
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
                                            <Link to='/coffee' className='content_category_box_link'> 
                                                Coffee <i className="icofont-rounded-down"></i> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/nuoc-ep' className='content_category_box_link'> 
                                                Nước ép <i className="icofont-rounded-down"></i> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/tra' className='content_category_box_link'> 
                                                Trà sữa <i className="icofont-rounded-down"></i> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/cock-tail' className='content_category_box_link'> 
                                                Cocktail <i className="icofont-rounded-down"></i> 
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                            <aside className='content_hot_item'>
                                <div className='content_hot_item_title'>
                                    <h2> SẢN PHẨM HOT </h2>
                                </div>
                                <div className='content_hot_item_box'>
                                    {productItem.map((product) => {
                                        if(product.type=="coffee" && product.note==='hot-item') {
                                            return <HotProductNav key={product.id}
                                                        product={product}
                                                    />
                                        }
                                    })}
                                </div>
                            </aside>
                            <aside className='content_banner'>
                                <img src={AsideBanner} />
                            </aside>
                        </div>
                        <div className='col product'>
                            <h1> Giới thiệu </h1>
                            <p> Nội dung trang giới thiệu </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;