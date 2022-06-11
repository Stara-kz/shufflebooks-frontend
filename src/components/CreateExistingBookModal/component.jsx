import './styles.css'
export const CreateExistingBookModal = ({uref, closeModal}) => {
    return <form ref={uref} className="existing-modal-container" style={{padding: '10px 20px', backgroundColor: 'white', zIndex: '3'}}>
        <div style={{width: '460px', height: '350px', color: '#858585', position: 'relative',}}>
            <div style={{marginTop: '30px'}}>
                <div style={{marginBottom: '20px', textAlign: 'center'}}><strong>Опишите состояние вашей книги!</strong></div>
                <div className="d-flex justify-content-between">
                    <div>
                        <input type="radio" id="new" name="condition" value="CSS" style={{marginRight: '10px'}}/>
                        <label htmlFor="new" style={{marginRight: '25px', fontWeight: 'bold'}}>Новая</label>
                    </div>
                    <div>
                        <input type="radio" id="good" name="condition" value="HTML" style={{marginRight: '10px'}}/>
                        <label htmlFor="good" style={{fontWeight: 'bold', marginRight: '25px'}}>Хорошая</label>
                    </div>
                    <div>
                        <input type="radio" id="shabby" name="condition" value="HTML" style={{marginRight: '10px'}}/>
                        <label htmlFor="shabby" style={{fontWeight: 'bold'}}>Потрепанная</label>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div>Описание</div>
                <textarea className="existing-textarea-description" placeholder="введите описание" style={{resize: 'none'}}/>
            </div>
            <div>
                <button className="btn-create" onClick={(e) => {e.preventDefault();}}>
                    Создать
                </button>
            </div>
            <svg onClick={closeModal} style={{position: 'absolute', top: '-40px', right: '-60px', cursor: 'pointer'}} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 14L14 26" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 14L26 26" stroke="#5C5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </form>
}