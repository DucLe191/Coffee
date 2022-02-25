import { useEffect } from 'react';
import {Link,useParams} from 'react-router-dom'
import '../assets/styles/Page.scss'
import DetailProduct from '../components/Product/DetailProduct';


function Detail({productItem,addToCart}) {
    const {slug} = useParams()

    useEffect(() => {
        if(window.location.path = '/:slug') {
            document.querySelector('.header_middle').classList.remove('header_transparent')
            document.querySelector('.header_category').classList.remove('header_transparent')
          }
        return () => {
            document.querySelector('.header_middle').classList.add('header_transparent')
            document.querySelector('.header_category').classList.add('header_transparent')
        }
    })

    return(
        <div className="detail">
            <div className="container">
                <div className="breadcrumb">
                    <ul>
                        <li className="home">
                            <Link to='/' className='contact_link'> 
                                Trang chủ <i className="icofont-rounded-double-right"></i>
                            </Link>
                        </li>
                        {productItem.filter((product) => product.slug==slug).map((product,index) => {
                            return <li key={index}> {product.name} </li> 
                        })}
                    </ul>
                </div>
                {productItem.filter((product) => product.slug==slug).map((product) => {
                    return <DetailProduct key={product.id}
                                        product={product}
                                        addToCart={addToCart}
                            />                 
                })}
            </div>
        </div>
    )
}

export default Detail;