import './Header.css'
import {Icon} from '../Icon';
import location from '../../assets/location.svg'
import {Link} from "react-router-dom";

export const Header = () => {
    return <header className="header">
        <div className="header--inner d-flex align-items-center">
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div style={{color: '#2898FF', fontSize: '30px', fontWeight: 'bold'}}>
                    Stara
                </div>
            </Link>
            <div className="d-flex align-items-center" style={{marginLeft: '50px', cursor: 'pointer'}}>
                <div style={{color: '#4CA4F4', fontSize: '20px', fontWeight: 'bold'}}>Добавить книгу</div>
                <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="7.98438" y="7" width="26" height="26" rx="8" fill="#4CA4F4"/>
                    <path d="M21.084 13V27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.0293 20H28.137" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="d-flex align-items-center" style={{marginLeft: 'auto'}}>
                <span className="d-flex align-items-center mx-4">
                    <Icon src={location} height="25px" width="25px" borderRadiusFalse/>
                    <div>Astana</div>
                </span>
                <button className="btn btn-primary" style={{backgroundColor: '#4CA4F4', border: '1px solid #4CA4F4'}}>
                    Войти
                </button>
            </div>
        </div>
    </header>
}