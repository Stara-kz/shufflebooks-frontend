import './Main.css';
import books from '../../utils/books.js'
export const Main = () => {
    return <>
        <div className="main-img">
            <div className="main-img--container">Обменивайтесь и читайте книги бесплатно</div>
        </div>
        <div className="mt-5">
            <div className="book-title mb-4">Книги</div>
            <div className="d-flex flex-wrap book-array justify-content-between">
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
    </>

}