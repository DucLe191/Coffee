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
                                    <h3> Coffee h????ng v??? m???i </h3>
                                    <span> T??m hi???u </span>
                                </div>
                            </Link>
                        </div>
                        <div className='col second'>
                            <Link to='/san-pham' className='section2_link'>
                                <img src={ModuleBanner2} />
                                <div className='overlay'></div>
                                <div className='text'>
                                    <h3> Th??? 6 n??y 25 % ??u ????i </h3>
                                    <span> T??m hi???u </span>
                                </div>
                            </Link>
                            <Link to='/san-pham' className='section2_link'>
                                <img src={ModuleBanner3} />
                                <div className='overlay'></div>
                                <div className='text'>
                                    <h3> Tuy???t v???i m??n m???i </h3>
                                    <span> T??m hi???u </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu'>
                <div className='container'>
                    <div className='title'>
                        <h2> Kh??m ph?? menu </h2>
                        <p> C?? g?? ?????c bi???t ??? ????y </p>
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
                        <Link to='/coffee' className='btn-read-more'> Xem th??m menu </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='list'>
                <div className='container'>
                    <div className='title'>
                        <h2> Coffee l?? h????ng v??? c???a b???n </h2>
                        <p> C?? g?? b???t ng??? t???i ????y </p>
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
                            <h2> Quy tr??nh l??m <br/> COFFEE </h2>
                            <p> Ch??ng t??i mu???n b???n t??? h??o cho ch??nh b???n th??n m??nh h????ng v??? c?? ph?? theo ?? th??ch. ???? l?? b???n ch???t c?? b???n nh???t ????? c?? nh???ng t??ch c?? ph?? th??m ngon nh???t </p>
                            <Link to='#' className='btn-read-more'> Kh??m ph?? quy tr??nh </Link>
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
                        <h2> <Link to='/tin-tuc' className='blog_link'> Tin t???c </Link> </h2>
                        <p> M???i tu???n l?? m???i m???t c??u chuy???n ???m ??p, m???i tu???n l?? m???t c??u chuy???n t??nh. N??o c??ng <br/> th?????ng th???c c?? ph?? v?? ?????c nh??! </p>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='blog_image'>
                                <Link to='#' className='blog_link'> <img src={Blog1} /> </Link>
                                <span> <i className="icofont-clock-time"></i> 04/04/2019 </span>
                                <div className='overlay'></div>
                            </div>
                            <div className='blog_content'>
                                <h3> <Link to='#' className='blog_link'> CH??? BI???N C?? PH?? </Link> </h3>
                                <p>  C?? ph?? s???ch hi???u ????n gi???n l?? 100% c?? ph??, kh??ng pha tr???n th??m b???t c??? th??? g?? kh??c. V???y quy tr??nh ... </p>
                            </div>
                        </div>
                        <div className='col middle'>
                            <div className='blog_image'>
                                <Link to='#' className='blog_link'> <img src={Blog2} /> </Link>
                                <span> <i className="icofont-clock-time"></i> 04/04/2019 </span>
                                <div className='overlay'></div>
                            </div>
                            <div className='blog_content'>
                                <h3> <Link to='#' className='blog_link'> T??NH Y??U V?? C?? PH?? </Link> </h3>
                                <p> T??NH Y??U V?? C?? PH?? Y??u m???t ng?????i c??ng gi???ng y??u m???t h????ng v??? c?? ph??. C?? th??? m???t r???t ??t th???i gi... </p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='blog_image'>
                                <Link to='#' className='blog_link'> <img src={Blog3} /> </Link>
                                <span> <i className="icofont-clock-time"></i> 04/04/2019 </span>
                                <div className='overlay'></div>
                            </div>
                            <div className='blog_content'>
                                <h3> <Link to='#' className='blog_link'> L???NG NGHE C?? PH?? K??? CHUY???N </Link> </h3>
                                <p> Cu???c ?????i cafe, c??ng nh?? cu???c ?????i c???a con ng?????i, c??ng ph???i 9 th??ng 10 ng??y thai ngh??n m???i ???????... </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='customer'>
                <div className='container'>
                    <div className='title'>
                        <h2> Kh??ch h??ng n??i g?? </h2>
                        <p> Kh??ch h??ng n??i g?? </p>
                    </div>
                    <OwlCarousel items={1}  
                        className="owl-theme"  
                        nav  
                    >
                        <div className='review-item'>
                            <div className='customer_image'>
                                <img src={Customer1} />
                            </div>
                            <h3> Ng?? Thanh V??n </h3>
                            <p> C?? ph?? ????ng gu, th???c u???ng ngon v?? kh?? ?????c bi???t h??n n???a dessert ??? ????y lu??n l?? lo???i v???a ?? v???i m??nh nh???t. IziCoffee lu??n l??m cho m???i gi??c quan c???a m??nh k??ch th??ch t???i ??a. </p>
                        </div>
                        <div className='review-item'>
                            <div className='customer_image'>
                                <img src={Customer2} />
                            </div>
                            <h3> H?? Duy Kh????ng </h3>
                            <p> M??nh r???t th??ch ????a kh??ch h??ng c???a m??nh ?????n ????y b???i v?? phong c??ch r???t chuy??n nghi???p. H??n n???a th???c u???ng ??? ????y r???t ngon, c?? h????ng v??? r???t kh??c bi???t, c??c v??? kh??ch c???a m??nh v?? c??ng th??ch. </p>
                        </div>
                        <div className='review-item'>
                            <div className='customer_image'>
                                <img src={Customer3} />
                            </div>
                            <h3> H?? Minh Tuy???t </h3>
                            <p> Phong c??ch coffee t???i IziCoffee v?? c??ng kh??c bi???t nh??ng l???i h???p ?? m??nh. M??nh v?? c??c b???n c???a m??nh m???i khi g???p m???t th?? ?????u ?????n ????y c???.Mong IziCoffee lu??n cho nhi???u th???c u???ng m???i nh??. </p>
                        </div>  
                    </OwlCarousel>
                </div>
            </div>
            <div className='why'>
                <div className='container'>
                    <div className='title'>
                        <h2> V?? sao n??n ch???n HaluCafe </h2>
                        <p> Kh??ng nh???ng mang ?????n s??? tuy???t v???i th??ng qua c??c th???c u???ng b?? m???t m?? h??n th??? n???a l?? c???m gi??c b???n t???n h?????ng ???????c ch??? khi ?????n v???i Halu Cafe. </p>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <img src={WhyImage1} /> 
                            <h3> COFFEE NGUY??N CH???T </h3>
                            <p> H???t c?? ph?? ???????c thu ho???ch v?? rang xay theo quy tr??nh kh??p k??n ????ng c??ng th???c ?????c bi???t ?????m b???o t??nh nguy??n ch???t. </p>
                        </div>
                        <div className='col'>
                            <img src={WhyImage2} /> 
                            <h3> PHA CH??? ?????C ????O </h3>
                            <p> B?? k??p t???o n??n s??? ?????c l?? trong t???ng th???c u???ng ???? ch??nh l?? ph????ng ph??p pha ch??? ?????c ????o c???a Thanh T??ng Coffee. </p>
                        </div>
                        <div className='col'>
                            <img src={WhyImage3} /> 
                            <h3> DESSERT ?????C BI???T </h3>
                            <p> C??c m??n b??nh tr??ng mi???ng v?? hoa qu??? t???i Thanh T??ng Coffee ???????c ch??? bi???n theo phong c??ch Ch??u ??u v???i nhi???u h????ng v??? kh??c. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;