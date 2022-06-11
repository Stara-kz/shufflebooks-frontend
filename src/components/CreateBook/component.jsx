import './CreateBook.css'
import {CreatebookModal} from "../CreatebookModal";
import {useEffect, useRef, useState} from "react";
export const CreateBook = () => {
    const [isOpen, setIsOpen] = useState(false);
    const uref = useRef();
    useEffect(() => {
        const hide = (e) => {
            if (e && e.target.className !== 'create-book-btn' && isOpen && uref.current && !uref.current?.contains(e.target)) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            document.addEventListener('click', hide);
        }
        return () => {
            document.removeEventListener('click', hide);
        }
    }, [isOpen])
    return (<>
        <div style={{width: '100%', height: '1000px'}}>
            <div style={{margin: '50px auto 0', width: 'max-content'}}>
                <div style={{color: '#4CA4F4', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}>Попробуйте найти на сайте</div>
                <div className="search-bar d-flex p-2 align-items-center" style={{margin: '0 auto'}}>
                    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.55 25.65C21.8578 25.65 25.35 22.2474 25.35 18.05C25.35 13.8526 21.8578 10.45 17.55 10.45C13.2422 10.45 9.75 13.8526 9.75 18.05C9.75 22.2474 13.2422 25.65 17.55 25.65Z" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.2998 27.55L23.0586 23.4175" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <input
                        style={{flexGrow: '1'}}
                        className="mx-2 search-input"
                        placeholder="Name, Author or ISBN"
                    />
                    <button className="search-button">Поиск</button>
                </div>
                <div style={{marginTop: '50px'}}>
                    <div style={{width: '407px'}}>Упс, мы не смогли найти эту книгу на нашем сайте. Создайте ее сами!</div>
                    <button className="create-book-btn" onClick={() => {setIsOpen(true)}} >Создать книгу</button>
                </div>
            </div>
        </div>
        { isOpen && <CreatebookModal uref={uref}/>}
    </>
    )
}