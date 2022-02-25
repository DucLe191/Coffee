import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import ListProduct from '../components/Product/ListProduct';
import '../assets/styles/Page.scss'
 
function Search({productItemSearch}) {
    useEffect(() => {
        if(window.location.path = '/tim-kiem') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })
    return(
        <div className="search">
            <div className="container">
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i>
                            </Link>
                        </li>
                        <li> Trang tìm kiếm </li>
                    </ul>
                    <div className='title_page'> - HALUCAFE </div>
                </div>
                <div className='search_content'>
                    {productItemSearch.map((product,index) => {
                        return <div className='search_content_product' key={product.id}>
                            <ListProduct 
                                product={product}
                            />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search;