import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Product.scss'

function QuickViewProduct({product,closeQuickView,addToCart}) {
    const [number,setNumber] = useState(1)

    const handleIncrease = () => {
        setNumber(number + 1)
    }
    const handleDecrease = () => {
        setNumber(number -1 )
    }

    useLayoutEffect(() => {
        if(number < 1 ) {
            setNumber(1)
        }
    },[number])
    
    return(
        <div className='quick_view'>
            <div className="quick_view_product">
                <div className="row">
                    <div className="quick_view_product_thumbnail">
                        <img src={product.image} />
                    </div>
                    <div className="quick_view_product_right">
                        <h3> <Link to='#' className='quick_view_link'> {product.name} </Link> </h3>
                        <div className="quick_view_product_info">
                            <p className='first'> Thương hiệu: <span> Trung Nguyên </span> </p>
                            <p className='second'> Tình trạng: <span> {product.status} </span> </p>
                            <p className='third'> {product.price}₫ </p>
                        </div>
                        <div className='quick_view_product_description'>
                            <p> {product.description} </p>
                            <Link to={`/${product.slug}`} className='quick_view_product_description_link'> 
                                Chi tiết <i className="icofont-simple-right"></i> 
                            </Link>
                        </div>
                        <div className='quick_view_product_quantily'>
                            <div className='number'>
                                <button onClick={handleDecrease}> - </button>
                                <input value={number}
                                        onChange={ e => setNumber(e.target.value) }
                                />
                                <button onClick={handleIncrease}> + </button>
                            </div>
                            <button type='submit'>
                                <Link to='#' className='quick_view_product_quantily_link'
                                        onClick={() => addToCart(product)}
                                > 
                                    Mua hàng
                                </Link> 
                            </button>
                        </div>
                        <div className='quick_view_product_close' onClick={closeQuickView}>
                            <i className="icofont-close"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickViewProduct;