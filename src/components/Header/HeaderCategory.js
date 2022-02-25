import { Link } from 'react-router-dom'
import Category1 from '../../assets/img/header_category1_image.jpg'
import Category2 from '../../assets/img/header_category2_image.png'
import Category3 from '../../assets/img/header_category3_image.jpg'
import Category4 from '../../assets/img/header_category4_image.jpg'
import Category5 from '../../assets/img/header_category5_image.jpg'
import Category6 from '../../assets/img/header_category6_image.jpg'
import '../../assets/styles/Header.scss'

function HeaderCategory() {
    return(
        <div className='header_category'>
            <div className='container'>
                <ul>
                    <li>
                        <Link to='/coffee' className='header_category_link'> 
                            <img src={Category1} /> COFFEE 
                        </Link>
                    </li>
                    <li>
                        <Link to='/nuoc-ep' className='header_category_link'> 
                            <img src={Category2} /> NƯỚC ÉP 
                        </Link>
                    </li>
                    <li>
                        <Link to='/cake' className='header_category_link'>
                            <img src={Category3} /> CAKE
                        </Link>
                    </li>
                    <li>
                        <Link to='/cock-tail' className='header_category_link'>
                            <img src={Category4} /> COCKTAIL 
                        </Link>
                    </li>
                    <li>
                        <Link to='/sua' className='header_category_link'> 
                            <img src={Category5} /> SỮA
                        </Link>
                    </li>
                    <li>
                        <Link to='/tra' className='header_category_link'>
                            <img src={Category6} /> TRÀ 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderCategory;