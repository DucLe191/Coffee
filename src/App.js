import React, { useEffect, useState } from 'react';  
import {BrowserRouter,Routes,Route, useLinkClickHandler} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IconOrder from './components/IconOrder/IconOrder';
import BackTop from './components/Back-Top/BackTop';
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'
import Introduce from './pages/Introduce';
import Coffee from './pages/Coffee';
import Products from './pages/Products';
import Juice from './pages/Juice';
import Cake from './pages/Cake';
import Cocktail from './pages/Cocktail';
import Tea1 from './pages/Tea1';
import Tea2 from './pages/Tea2';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Data from './Data'
import Search from './pages/Search';


function App() {
  const {productItem} = Data

  //Cart
  const [cartItem,setCartItem] = useState([])

  const addToCart = (product) => {
      const ProductExist = cartItem.find(item => item.id === product.id)
      if(ProductExist) {
        setCartItem(cartItem.map(item => 
          item.id === product.id ? {...ProductExist, quantity:ProductExist.quantity +1} : item
        ))
      }
      else {
        setCartItem([...cartItem, {...product, quantity:1}])
      }
  }

  const removeCart = (product) => {
    const ProductExist = cartItem.find(item => item.id === product.id)
      if(ProductExist.quantity === 1) {
          setCartItem(cartItem.filter(item => item.id !== product.id)) 
      }
      else {
        setCartItem(cartItem.map((item) => 
          item.id === product.id ? {...ProductExist, quantity:ProductExist.quantity -1} : item
        ))
      }
  }

  //Search
  const [search,setSearch] = useState('')
    const searchText = (e) => {
        setSearch(e.target.value)
    }
    const productItemSearch = productItem.filter(item => {
        return Object.keys(item).some(key => 
            item[key].toString().toLowerCase().includes(search.toString().toLowerCase())    
        )
    })
  
  useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 100) {
            document.querySelector('.header_middle').classList.add('fixed_padding')
            document.querySelector('.back-top').classList.add('back-top-show')
        }
        else {
            document.querySelector('.header_middle').classList.remove('fixed_padding')
            document.querySelector('.back-top').classList.remove('back-top-show')
        }
      }
      window.addEventListener('scroll',handleScroll)
      return () => {
        window.removeEventListener('scroll',handleScroll)
      }
  },[])

  useEffect(() => {
    if(window.location.path = '/') {
      document.querySelector('.header_middle').classList.add('header_transparent')
      document.querySelector('.header_category').classList.add('header_transparent')
    }
  },[]) 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return (
    <BrowserRouter>
      <div className="App">
          <Header productItem={productItem} cartItem={cartItem} search={search} searchText={searchText}
                  productItemSearch={productItemSearch}
          />
          <IconOrder />
            <Routes>
              <Route exact path='/' element={ <Home productItem={productItem} /> } />
              <Route path='/gioi-thieu' element={ <Introduce productItem={productItem} /> } />
              <Route path='/san-pham' 
                element={ <Products productItem={productItem} addToCart={addToCart} cartItem={cartItem} 
                          removeCart={removeCart} /> } 
              />
              <Route path='/tin-tuc' element={ <News /> } />
              <Route path='/lien-he' element={ <Contact /> } />
              <Route path='/tim-kiem' element={ <Search productItemSearch={productItemSearch} search={search} /> } />
              <Route path='/dang-nhap' element={ <Login /> } />
              <Route path='/dang-ky' element={ <Register /> } />
              <Route path='/gio-hang' 
                element={ <Cart cartItem={cartItem} addToCart={addToCart} removeCart={removeCart} /> } 
              />
              <Route path='/coffee' 
                element={ <Coffee productItem={productItem} addToCart={addToCart} cartItem={cartItem} 
                          removeCart={removeCart} /> } 
              />
              <Route path='/nuoc-ep' 
                element={ <Juice productItem={productItem} addToCart={addToCart} cartItem={cartItem} 
                            removeCart={removeCart} /> } 
              />
              <Route path='/cake' 
                element={ <Cake productItem={productItem} addToCart={addToCart} cartItem={cartItem} 
                            removeCart={removeCart} /> } 
              />
              <Route path='/cock-tail' 
                element={ <Cocktail productItem={productItem} addToCart={addToCart} cartItem={cartItem} 
                            removeCart={removeCart} /> }
              />
              <Route path='/sua' 
                element={ <Tea1 productItem={productItem} addToCart={addToCart} cartItem={cartItem} 
                            removeCart={removeCart} /> }
              />
              <Route path='/tra' 
                element={ <Tea2 productItem={productItem} addToCart={addToCart} cartItem={cartItem} 
                            removeCart={removeCart} /> } 
              />
              <Route path='/:slug' element={ <Detail productItem={productItem} addToCart={addToCart} /> } />
              <Route path='/dat-ban' element={ <Order /> } />
            </Routes>
          <BackTop onScrollToTop={scrollToTop} /> 
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
