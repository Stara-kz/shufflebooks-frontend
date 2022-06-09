import './Footer.css'
import fly from '../../assets/img_2.png'
export const Footer = () => {
    return (
        <footer className="footer ">
            <div className="footer-inner d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-between footer-item footer-item-1 mr-5">
                    <div className="footer-shuffle">Shuffle.</div>
                    <div className="d-flex flex-column">
                        <div className="align-self-end">+6289 456 3455</div>
                        <div>www.funiro.com</div>
                    </div>
                </div>
                <div className="d-flex flex-column footer-item ml-5">
                    <div className="footer-shuffle">Menu</div>
                    <p>Products</p>
                    <p>Rooms</p>
                    <p>Inspirations</p>
                    <p>About Us</p>
                    <p>Terms & Policy</p>
                </div>
                <div className="d-flex flex-column footer-item mx-5">
                    <div className="footer-shuffle">Account</div>
                    <p>My account</p>
                    <p>Checkout</p>
                    <p>My Cart</p>
                    <p>My catalog</p>
                </div>
                <div className="d-flex flex-column footer-item mx-5">
                    <div className="footer-shuffle">Stay Connected</div>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
                <div className="d-flex flex-column footer-item mx-5">
                    <div className="footer-shuffle">Stay Updated</div>
                    <div className="d-flex input-container">
                        <div className="input-container--inner"><input className="input-container--inner-item" placeholder="Enter your email"/></div>
                        <div className="fly-container">
                            <div className="fly-container-item">
                                <img src={fly} alt="fly" width="25px" height="24px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}