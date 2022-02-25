import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import HotProduct from '../components/Product/HotProduct';
import ListProduct from '../components/Product/ListProduct';
import SliderBanner from "../components/Home/SliderBanner";
import ModuleBanner1 from '../assets/img/blog2.jpg'
import ModuleBanner2 from '../assets/img/module_banner2.png'
import ModuleBanner3 from '../assets/img/module_banner3.png'
import IconImage from '../assets/img/icon-cf.png'
import SliderProcedure1 from '../assets/img/sec_quy_trinh_images1.png'
import SliderProcedure2 from '../assets/img/sec_quy_trinh_images2.png'
import SliderProcedure3 from '../assets/img/sec_quy_trinh_images3.png'
import Blog1 from '../assets/img/blog3.jpg'
import Blog2 from '../assets/img/blog2.jpg'
import Blog3 from '../assets/img/blog1.jpg'
import Customer1 from '../assets/img/avatar-testimonial1.jpg'
import Customer2 from '../assets/img/avatar-testimonial2.jpg'
import Customer3 from '../assets/img/avatar-testimonial3.jpg'
import WhyImage1 from '../assets/img/image-feature1.png'
import WhyImage2 from '../assets/img/image-feature2.png'
import WhyImage3 from '../assets/img/image-feature3.png'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import '../assets/styles/Home.scss'

const options = {
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    },
}

function Home({productItem}) {
    return(
        <div className="home"> 
            <SliderBanner />
            <div className="section2">
                <div className="container">
                    <div className="row">
                        <div className='col first'>
                            <Link to='/san-pham' className='section2_link'>
                                <img src={ModuleBanner1} />
                                <div className='overlay'></div>
                                <div className='text'>
                                    <h3> Coffee hương vị mới </h3>
                                    <span> Tìm hiểu </span>
                                </div>
                            </Link>
                        </div>
                        <div className='col second'>
                            <Link to='/san-pham' className='section2_link'>
                                <img src={ModuleBanner2} />
                                <div className='overlay'></div>
                                <div className='text'>
                                    <h3> Thứ 6 này 25 % ưu đãi </h3>
                                    <span> Tìm hiểu </span>
                                </div>
                            </Link>
                            <Link to='/san-pham' className='section2_link'>
                                <img src={ModuleBanner3} />
                                <div className='overlay'></div>
                                <div className='text'>
                                    <h3> Tuyệt vời món mới </h3>
                                    <span> Tìm hiểu </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu'>
                <div className='container'>
                    <div className='title'>
                        <h2> Khám phá menu </h2>
                        <p> Có gì đặc biệt ở đây </p>
                    </div>
                    <div className='menu_product'>
                        <div className='row'>
                            {productItem.map((product) => {
                                if(product.type=="coffee" && product.note==='hot-item') {
                                    return <HotProduct key={product.id}
                                                product={product}
                                    />
                                }
                            })}
                        <Link to='/coffee' className='btn-read-more'> Xem thêm menu </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='list'>
                <div className='container'>
                    <div className='title'>
                        <h2> Coffee là hương vị của bạn </h2>
                        <p> Có gì bất ngờ tại đây </p>
                    </div>
                    <OwlCarousel items={4}  
                        className="owl-theme"  
                        nav  
                        {...options}
                    >
                        {productItem.map((product) => {
                            if(product.type=="coffee" && product.note=='list-item') {
                                return <ListProduct key={product.id}
                                              product={product}
                                        />
                            }
                        })}
                    </OwlCarousel>
                </div>
            </div>
            <div className='procedure'>
                <div className='container'>
                    <div className='row'>
                        <div className='col first'>
                            <h2> Quy trình làm <br/> COFFEE </h2>
                            <p> Chúng tôi muốn bạn tự hào cho chính bản thân mình hương vị cà phê theo ý thích. Đó là bản chất cơ bản nhất để có những tách cà phê thơm ngon nhất </p>
                            <Link to='#' className='btn-read-more'> Khám phá quy trình </Link>
                            <img src={IconImage} />
                        </div>
                        <div className='col second'>
                            <OwlCarousel items={1}  
                                className="owl-theme"  
                                nav  
                            >
                                <div className='item'> <img src={SliderProcedure1} /> </div>
                                <div className='item'> <img src={SliderProcedure2} /> </div>
                                <div className='item'> <img src={SliderProcedure3} /> </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className='blog'>
                <div className='container'>
                    <div className='title'>
                        <h2> <Link to='/tin-tuc' className='blog_link'> Tin tức </Link> </h2>
                        <p> Mỗi tuần là mỗi một câu chuyện ấm áp, mỗi tuần là một câu chuyện tình. Nào cùng <br/> thưởng thức cà phê và đọc nhé! </p>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='blog_image'>
                                <Link to='#' className='blog_link'> <img src={Blog1} /> </Link>
                                <span> <i className="icofont-clock-time"></i> 04/04/2019 </span>
                                <div className='overlay'></div>
                            </div>
                            <div className='blog_content'>
                                <h3> <Link to='#' className='blog_link'> CHẾ BIẾN CÀ PHÊ </Link> </h3>
                                <p>  Cà phê sạch hiểu đơn giản là 100% cà phê, không pha trộn thêm bất cứ thứ gì khác. Vậy quy trình ... </p>
                            </div>
                        </div>
                        <div className='col middle'>
                            <div className='blog_image'>
                                <Link to='#' className='blog_link'> <img src={Blog2} /> </Link>
                                <span> <i className="icofont-clock-time"></i> 04/04/2019 </span>
                                <div className='overlay'></div>
                            </div>
                            <div className='blog_content'>
                                <h3> <Link to='#' className='blog_link'> TÌNH YÊU VÀ CÀ PHÊ </Link> </h3>
                                <p> TÌNH YÊU VÀ CÀ PHÊ Yêu một người cũng giống yêu một hương vị cà phê. Có thể mất rất ít thời gi... </p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='blog_image'>
                                <Link to='#' className='blog_link'> <img src={Blog3} /> </Link>
                                <span> <i className="icofont-clock-time"></i> 04/04/2019 </span>
                                <div className='overlay'></div>
                            </div>
                            <div className='blog_content'>
                                <h3> <Link to='#' className='blog_link'> LẮNG NGHE CÀ PHÊ KỂ CHUYỆN </Link> </h3>
                                <p> Cuộc đời cafe, cũng như cuộc đời của con người, cũng phải 9 tháng 10 ngày thai nghén mới đượ... </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='customer'>
                <div className='container'>
                    <div className='title'>
                        <h2> Khách hàng nói gì </h2>
                        <p> Khách hàng nói gì </p>
                    </div>
                    <OwlCarousel items={1}  
                        className="owl-theme"  
                        nav  
                    >
                        <div className='review-item'>
                            <div className='customer_image'>
                                <img src={Customer1} />
                            </div>
                            <h3> Ngô Thanh Vân </h3>
                            <p> Cà phê đúng gu, thức uống ngon và khá đặc biệt hơn nữa dessert ở đây luôn là loại vừa ý với mình nhất. IziCoffee luôn làm cho mọi giác quan của mình kích thích tối đa. </p>
                        </div>
                        <div className='review-item'>
                            <div className='customer_image'>
                                <img src={Customer2} />
                            </div>
                            <h3> Hà Duy Khương </h3>
                            <p> Mình rất thích đưa khách hàng của mình đến đây bởi vì phong cách rất chuyên nghiệp. Hơn nữa thức uống ở đây rất ngon, có hương vị rất khác biệt, các vị khách của mình vô cùng thích. </p>
                        </div>
                        <div className='review-item'>
                            <div className='customer_image'>
                                <img src={Customer3} />
                            </div>
                            <h3> Hà Minh Tuyết </h3>
                            <p> Phong cách coffee tại IziCoffee vô cùng khác biệt nhưng lại hợp ý mình. Mình và các bạn của mình mỗi khi gặp mặt thì đều đến đây cả.Mong IziCoffee luôn cho nhiều thức uống mới nhé. </p>
                        </div>  
                    </OwlCarousel>
                </div>
            </div>
            <div className='why'>
                <div className='container'>
                    <div className='title'>
                        <h2> Vì sao nên chọn HaluCafe </h2>
                        <p> Không những mang đến sự tuyệt vời thông qua các thức uống bí mật mà hơn thế nữa là cảm giác bạn tận hưởng được chỉ khi đến với Halu Cafe. </p>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <img src={WhyImage1} /> 
                            <h3> COFFEE NGUYÊN CHẤT </h3>
                            <p> Hạt cà phê được thu hoạch và rang xay theo quy trình khép kín đúng công thức đặc biệt đảm bảo tính nguyên chất. </p>
                        </div>
                        <div className='col'>
                            <img src={WhyImage2} /> 
                            <h3> PHA CHẾ ĐỘC ĐÁO </h3>
                            <p> Bí kíp tạo nên sự độc là trong từng thức uống đó chính là phương pháp pha chế độc đáo của Thanh Tùng Coffee. </p>
                        </div>
                        <div className='col'>
                            <img src={WhyImage3} /> 
                            <h3> DESSERT ĐẶC BIỆT </h3>
                            <p> Các món bánh tráng miệng và hoa quả tại Thanh Tùng Coffee được chế biến theo phong cách Châu Âu với nhiều hương vị khác. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;