import './styles.css';
import {useState} from "react";

export const SignInUp = ({uref, closeModal}) => {
    const [isSignIn, setIsSignIn] = useState(true);
    return <form ref={uref} className="signup-container" style={{padding: '50px 25px', backgroundColor: 'white', zIndex: '3', fontSize: '20px'}}>
        <div style={{width: '550px', height: '650px'}}>
            <div style={{margin: '0 auto', width: 'max-content', fontSize: '48px', color: '#4CA4F4', fontWeight: 'bold'}}>Stara</div>
            <div className="d-flex">
                <div className="text-center" onClick={() => {setIsSignIn(true)}} style={{width: '275px', cursor: 'pointer', borderBottom: isSignIn ? '3px solid #4CA4F4' : ''}}>Вход</div>
                <div className="text-center" onClick={() => {setIsSignIn(false)}} style={{width: '275px', cursor: 'pointer', borderBottom: !isSignIn ? '3px solid #4CA4F4' : ''}}>Регистрация</div>
            </div>
            {
                isSignIn
                    ? <div>
                        <label style={{marginTop: '20px',display: 'block'}}>
                            <div style={{marginBottom: '10px'}}>Почта</div>
                            <input className="input-signin" placeholder="введите почту"/>
                        </label>
                        <label  style={{marginTop: '30px', display: 'block'}}>
                            <div style={{marginBottom: '10px'}}>Пароль</div>
                            <input className="input-signin" placeholder="введите пароль"/>
                        </label>
                        <div style={{marginTop: '70px'}}>
                            <button className="btn-create" onClick={(e) => {e.preventDefault();}}>
                                Войти
                            </button>
                        </div>
                    </div>
                    : <div>
                        <label style={{marginTop: '20px',display: 'block'}}>
                            <div style={{marginBottom: '10px'}}>Имя</div>
                            <input className="input-signin" placeholder="введите имя"/>
                        </label>
                        <label  style={{marginTop: '30px', display: 'block'}}>
                            <div style={{marginBottom: '10px'}}>Фамилия</div>
                            <input className="input-signin" placeholder="введите фамилию"/>
                        </label>
                        <label style={{marginTop: '20px',display: 'block'}}>
                            <div style={{marginBottom: '10px'}}>Почта</div>
                            <input className="input-signin" placeholder="введите почту"/>
                        </label>
                        <label  style={{marginTop: '30px', display: 'block'}}>
                            <div style={{marginBottom: '10px'}}>Пароль</div>
                            <input className="input-signin" placeholder="введите пароль"/>
                        </label>
                        <div>
                            <button className="btn-create" onClick={(e) => {e.preventDefault();}}>
                                Регистрация
                            </button>
                        </div>
                    </div>
            }
        </div>
    </form>
}