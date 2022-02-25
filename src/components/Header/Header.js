import HeaderMiddle from './HeaderMiddle';
import '../../assets/styles/Header.scss'
import HeaderCategory from './HeaderCategory';

function Header({cartItem,productItem,search,searchText,productItemSearch}) {
    return(
        <header className='header'>
            <HeaderMiddle cartItem={cartItem} productItem={productItem} search={search} searchText={searchText}
                        productItemSearch={productItemSearch}
            />
            <HeaderCategory />
        </header>
    )
}

export default Header;