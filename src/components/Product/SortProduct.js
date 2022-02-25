import {Link} from 'react-router-dom'
import '../../assets/styles/Page.scss'

function SortProduct({showListProduct2,hideListProduct2,show}) {
    const listActive = 'list_active'
    return(
        <>
            <div className='sort_product'>
                <div className='row'>
                    <div className='col'>
                        <Link to='#' className={`sort_product_view_table ${show===false ? listActive : '' } `}
                                onClick={hideListProduct2}
                        >
                            <i className="icofont-ghost"></i>
                        </Link>
                        <Link to='#' className={`sort_product_view_list ${show===true ? listActive : '' } `} 
                                onClick={showListProduct2}
                        >
                            <i className="icofont-listing-box"></i>
                        </Link>
                    </div>
                    <div className='col'>
                        <h4> Sắp xếp: </h4>
                        <ul className='sort_product_list'>
                            <li>
                                <span> Thứ tự </span>
                                <i className="icofont-rounded-down"></i>
                            </li>
                            <ul className='sort_product_list_hidden'>
                                <li>
                                    <Link to='#' className='sort_product_list_hidden_link'> Mặc định </Link>
                                </li>
                                <li>
                                    <Link to='#' className='sort_product_list_hidden_link' > 
                                        A <i className="icofont-long-arrow-right"></i> Z 
                                    </Link>
                                </li>
                                <li>
                                    <Link to='#' className='sort_product_list_hidden_link'> 
                                        Z <i className="icofont-long-arrow-right"></i> A 
                                    </Link>
                                </li>
                                <li>
                                    <Link to='#' className='sort_product_list_hidden_link'> Giá tăng dần </Link>
                                </li>
                                <li>
                                    <Link to='#' className='sort_product_list_hidden_link'> Giá giảm dần </Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SortProduct;