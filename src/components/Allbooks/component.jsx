import './Allbooks.css';
import books from "../../utils/books";
export const Allbooks = () => {
    return <div>
        <div className="d-flex justify-content-between my-3">
            <div style={{fontSize: '20px', fontWeight: 'bold'}}>Книги</div>
            <select defaultValue="Свободные" className="select-form">
                <option>Свободные</option>
            </select>
        </div>
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
}