import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../../assets/styles/Page.scss'

function DetailProduct(props) {
    const [type,setType] = useState(0);
    const [number,setNumber] = useState(1)
    const activeTab = 'tab_active' 
    const {product,addToCart} = props
    
     const upNumber = () => {
        setNumber(number + 1)
    }
    const downNumber = () => {
        setNumber(number - 1)
    }
    useLayoutEffect(() => {
        if(number < 1 ) {
            setNumber(1)
        }
    },[number])
    
    return (
        <div className='detail_content'>
            <div className='row'>
                <div className='detail_content_image'>
                    <Link to='#' className='detail_content_image_link'> <img src={product.image} /> </Link>
                </div>
                <div className='detail_content_info'>
                    <h1> {product.name} </h1>
                    <div className="information">
                        <p className='first'> Thương hiệu: <span> Trung Nguyên </span> </p>
                        <p className='second'> Tình trạng: <span> {product.status} </span> </p>
                        <p className='third'> {product.price}₫ </p>
                    </div>
                    <div className='form_group'>
                        <form>
                            <div className='form_group_number'>
                                <span className='decrease' onClick={downNumber}> - </span>
                                <input value={number} 
                                        maxLength={3}
                                        onChange={e => setNumber(e.target.value) 
                                 />
                                <span className='increase' onClick={upNumber}> + </span>
                            </div>
                            <div className='form_group_btn' onClick={() => addToCart(product)}> Đặt hàng </div>
                        </form>
                    </div>
                    <div className='description'>
                        <p> {product.description} </p>
                    </div>
                    <div className='social_sharing'>
                        <span> Chia sẻ: </span>
                        <Link to='#' className='social_link facebook'> <i className="icofont-facebook"></i> </Link>
                        <Link to='#' className='social_link twitter'> <i className="icofont-twitter"></i> </Link>
                        <Link to='#' className='social_link pinterest'> <i className="icofont-pinterest"></i> </Link>
                        <Link to='#' className='social_link google'> <i className="icofont-google-plus"></i> </Link>
                    </div>
                </div>
            </div>
            <div className='detail_content_table'>
                <ul className='table_list'>
                    <li onClick={() => {setType(0)}} 
                        className={`table_list_item ${type ==0 ? activeTab : '' }`}
                    > 
                        <h4> Thông tin sản phẩm </h4> 
                    </li>
                    <li onClick={() => {setType(1)}} 
                        className={`table_list_item ${type ==1 ? activeTab : '' }`}
                    > 
                        <h4> Chính sách </h4> 
                    </li>
                    <li onClick={() => {setType(2)}} 
                        className={`table_list_item ${type ==2 ? activeTab : '' }`}
                    > 
                        <h4> Đánh giá sản phẩm </h4> 
                    </li>
                </ul>
                <div className='tab_content' hidden={type != 0}>
                    <p> {product.description} </p>
                </div>
                <div className='tab_content' hidden={type != 1}> Nội dung tùy chỉnh viết ở đây </div>
                <div className='tab_content' hidden={type != 2}>
                    <div className='tab_content_review'>
                        <p> Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này </p>
                        <button> Gửi đánh giá của bạn </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct;
