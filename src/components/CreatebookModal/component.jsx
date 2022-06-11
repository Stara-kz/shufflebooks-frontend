import './CreatebookModal.css'
import {useState} from "react";
export const CreatebookModal = ({uref}) => {
    const [name, setName] = useState();
    const onUploadFile = (e) => {
        setName(e.target.files[0].name);
        console.log(e.target.files);
    }
    return <form  id="modal-container" className="modal-container" style={{padding: '50px 50px', backgroundColor: 'white', zIndex: '3'}}>
        <div ref={uref} style={{width: '560px', height: '600px', color: '#858585'}}>
            <div className="d-flex justify-content-between mb-2">
                <div>Название</div>
                <input className="input-createbook" placeholder="введите название книги" style={{padding: '3px 5px'}}/>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <div>Подназвание</div>
                <input className="input-createbook" placeholder="введите подназвание книги"/>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <div>Серийный номер</div>
                <input className="input-createbook" placeholder="введите серийный номер книги"/>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <div>ISBN</div>
                <input className="input-createbook" placeholder="введите ISBN книги"/>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <div>Версия</div>
                <input className="input-createbook" placeholder="введите версию книги"/>
            </div>
            <div className="d-flex justify-content-between">
                <div>Авторы</div>
                <input className="input-createbook" placeholder="введите авторов книги"/>
            </div>
            <div>
                <div style={{fontSize: '15px', fontWeight: 'bold', marginTop: '15px'}}>FORMAT</div>
                <input type="radio" id="paperback" name="format" value="CSS" style={{marginRight: '10px'}}/>
                <label htmlFor="paperback" style={{marginRight: '25px', fontWeight: 'bold'}}>Hardback</label>
                <input type="radio" id="hardback" name="format" value="HTML" style={{marginRight: '10px'}}/>
                <label htmlFor="hardback" style={{fontWeight: 'bold'}}>Paperback</label>
            </div>
            <div className="d-flex align-items-end">
                <label style={{width: '150px', marginRight: '20px'}}>
                    <div style={{fontSize: '15px'}}><strong>YEAR</strong></div>
                    <input className="input-year-pages" style={{width: '150px'}}/>
                </label>
                <label style={{width: '150px'}}>
                    <div style={{fontSize: '15px'}}><strong>NUMBER OF PAGES</strong></div>
                    <input className="input-year-pages" style={{width: '150px'}}/>
                </label>
                <label htmlFor="picture" style={{display: 'block', marginLeft: '50px', width: '130px', height: '80px', border: '1px solid #EBEBEB', borderRadius: '7px'}} className="d-flex flex-column align-items-center justify-content-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 11H13C11.8954 11 11 11.8954 11 13V27C11 28.1046 11.8954 29 13 29H27C28.1046 29 29 28.1046 29 27V13C29 11.8954 28.1046 11 27 11Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18Z" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29 23L24 18L13 29" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <div style={{fontWeight: 'bold'}}>Обложка</div>
                </label>
                <input id="picture" type="file" style={{display: 'none'}} onChange={onUploadFile}/>
            </div>
            <div><div style={{marginLeft: 'auto', width: 'max-content'}}>{name}</div></div>
            <div style={{marginTop: '30px'}}>
                <div style={{marginBottom: '10px'}}><strong>Состояние</strong></div>
                <input type="radio" id="new" name="condition" value="CSS" style={{marginRight: '10px'}}/>
                <label htmlFor="new" style={{marginRight: '25px', fontWeight: 'bold'}}>Новая</label>
                <input type="radio" id="good" name="condition" value="HTML" style={{marginRight: '10px'}}/>
                <label htmlFor="good" style={{fontWeight: 'bold', marginRight: '25px'}}>Хорошая</label>
                <input type="radio" id="shabby" name="condition" value="HTML" style={{marginRight: '10px'}}/>
                <label htmlFor="shabby" style={{fontWeight: 'bold'}}>Потрепанная</label>
            </div>
            <div className="d-flex align-items-start mt-4">
                <span>Описание</span>
                <textarea className="textarea-description" placeholder="введите описание" style={{width: '409px', height: '96px', resize: 'none'}}/>
            </div>
            <div>
                <button className="btn-create" onClick={(e) => {e.preventDefault();}}>
                    Создать
                </button>
            </div>
        </div>
    </form>
}