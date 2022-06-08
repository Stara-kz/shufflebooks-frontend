import './Header.css'
import {Icon} from '../Icon';
import location from '../../assets/location.svg'
import search from '../../assets/search.svg'
export const Header = () => {
    return <header className="p-4 header">
        <div className="header--inner d-flex justify-content-between align-items-center">
            <div>
                Ansar
            </div>
            <div className="search-bar d-flex p-2 align-items-center">
                <Icon style={{cursor: 'pointer'}} src={search} borderRadiusFalse width="22px" height="25px"/>
                <input
                    className="mx-2 search-input"
                    placeholder="Name, Author or ISBN"
                />
            </div>
            <div className="d-flex align-items-center">
                <span className="d-flex align-items-center mx-2">
                    <Icon src={location} height="25px" width="25px" borderRadiusFalse/>
                    <div>Astana</div>
                </span>
                <button className="btn btn-primary">
                    Войти
                </button>
            </div>
        </div>
    </header>
}