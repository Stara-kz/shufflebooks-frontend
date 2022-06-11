import './Profile.css'
import profileLogo from '../../assets/img_3.png';
import {Icon} from "../Icon";
import books from "../../utils/books";
import {useState} from "react";

export const Profile = () => {
    const [toChange, setToChange] = useState(false);
    return  <div>
        <div className="profile-outer my-5 d-flex flex-column justify-content-center">
            <svg onClick={()=> {setToChange(!toChange)}} className="align-self-end" style={{cursor: 'pointer', position: 'absolute', top: '10px', right: '10px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9146 6.60001L16.8043 9.60001L9.29107 17.4H6.40137V14.4L13.9146 6.60001Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="d-flex align-items-start">
                <Icon src={profileLogo} width="135px" height="140px" styleDiv={{marginLeft: '20px'}}/>
                <div style={{width: "270px", height: '180px'}} className="mx-5 d-flex flex-column justify-content-between">
                    {toChange
                        ? <div>
                            <input value="Kadirbek Sharau" />
                        </div>
                        : <div style={{width: "270px"}}>
                            <span style={{width: '220px', display: 'inline-block'}}>Kadirbek Sharau</span>
                        </div>
                    }
                    {toChange
                        ? <div>
                            <input value="sharaukadirbek@gmail.com" />
                        </div>
                        : <div style={{width: "270px"}}>
                            <span style={{width: '220px', display: 'inline-block', color: '#4CA4F4'}}>sharaukadirbek@gmail.com</span>
                        </div>
                    }
                    {
                        toChange
                            ? <div>
                                <input value="87747541222" />
                            </div>
                            : <div style={{width: "270px"}}>
                                <span style={{width: '220px', display: 'inline-block'}}>87747541222</span>
                            </div>
                    }
                    {toChange && <div>
                        <button className="btn btn-light mx-3">Отменить</button>
                        <button className="btn btn-primary" style={{backgroundColor: '#4CA4F4', border: '1px solid #4CA4F4'}}>Изменить</button>
                    </div>}
                </div>
                <div style={{width: "270px", height: '80px'}} className="mx-5 d-flex flex-column justify-content-between">
                    {toChange
                        ? <select className="form-select">
                            <option>Алматы</option>
                            <option>Астана</option>
                        </select>
                        : <div>Алматы</div>
                    }
                    {toChange
                        ? <input value="Кабанбай батыр, 53"/>
                        : <div style={{width: "270px"}}>
                            <span style={{width: '220px', display: 'inline-block'}}>Кабанбай батыр, 53</span>
                        </div>
                    }
                </div>
            </div>
        </div>
        <div>
            <div className="text-center mb-3" style={{fontWeight: 'bold', fontSize: '20px'}}>Мои предложенные книги</div>
            <div className="d-flex flex-wrap book-array justify-content-start">
                {
                    books.map((book, i) => {
                        const style = {marginRight: '0'};
                        return <div className="mb-4" style={i !== 0 && (i - 4)%5 === 0 ? style : {marginRight: '45px'}}>
                            <img src={book.src} alt="book" style={{maxHeight: '280px'}}/>
                            <div className="book-name">{book.name}</div> <div className="book-author">{book.author}</div>
                        </div>
                    })
                }
            </div>
        </div>
        <div>
            <div className="text-center mb-3" style={{fontWeight: 'bold', fontSize: '20px'}}>Книги других у меня</div>
            <div className="d-flex flex-wrap book-array justify-content-start">
                {
                    books.map((book,i) => {
                        const style = {marginRight: '0'};
                        return <div className="mb-4" style={i !== 0 && (i - 4)%5 === 0 ? style : {marginRight: '45px'}}>
                            <img src={book.src} alt="book" style={{maxHeight: '280px'}}/>
                            <div className="book-name">{book.name}</div> <div className="book-author">{book.author}</div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}