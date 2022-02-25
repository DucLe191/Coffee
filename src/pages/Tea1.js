import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import AsideBanner from '../assets/img/aside_banner.png'
import SortProduct from '../components/Product/SortProduct';
import HotProductNav from '../components/Product/HotProductNav';
import ListProduct from '../components/Product/ListProduct';
import ListProduct2 from '../components/Product/ListProduct2';
import '../assets/styles/Page.scss'

function Tea1({productItem,cartItem,addToCart,removeCart}) {
    const [show,setShow] = useState(false)
    const showListProduct2 = () => {
        setShow(true)
    }
    const hideListProduct2 = () => {
        setShow(false)
    }

    useEffect(() => {
        if(window.location.path = '/sua') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })

    return(
        <div className="tea">
            <div className="container">
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i>
                            </Link>
                        </li>
                        <li> Sữa </li>
                    </ul>
                    <div className='title_page'> Sữa </div>
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
                            <SortProduct showListProduct2={showListProduct2} hideListProduct2={hideListProduct2}
                                show={show}  
                            />
                            <div className='product_view'>
                                {productItem.map((product) => {
                                    if(product.type=='tea' && show===false) {
                                        return <div className='product_view_content' key={product.id} >
                                                <ListProduct
                                                    product={product}
                                                    addToCart={addToCart}
                                                    cartItem={cartItem}
                                                    removeCart={removeCart}
                                                />
                                        </div> 
                                    }
                                })}
                                {productItem.map((product) => {
                                    if(product.type=='tea' && show===true) {
                                        return <div className='product_view_content2' key={product.id} >
                                                <ListProduct2
                                                    product={product}
                                                    addToCart={addToCart}
                                                    cartItem={cartItem}
                                                    removeCart={removeCart}
                                                />
                                        </div> 
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tea1;