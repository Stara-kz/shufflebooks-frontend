import './Book.css';
import logo from '../../assets/img_1.png'
import otherHolders from "../../utils/otherHolder";
import {CreateExistingBookModal} from "../CreateExistingBookModal";

export const Book = () => {
    return  <>
        <div className="book-outer mt-5">
            <div className="book-top d-flex">
                <div style={{width: '265px', cursor: 'pointer'}}>
                    <img src={logo} height="390px" width="265px"/>
                    <div className="text-center mt-3 d-flex align-items-center justify-content-center" style={{fontWeight: 'bold', height: '37px', width: '100%', border: '1px solid #00B894', borderRadius: '7px', color: '#00B894'}}>Предложите эту книгу</div>
                </div>
                <div style={{flexGrow: '1', marginLeft: '30px'}}>
                    <div style={{color: '#4CA4F4', fontSize: '35px'}}>Harry Potter</div>
                    <div className="mt-3">
                        <span style={{marginRight: '20px'}}><strong>2008</strong></span>
                        <span style={{marginRight: '20px'}}><strong>480 страниц</strong></span>
                        <span><strong>ISBN: 234-DFS-Sdfs123123</strong></span>
                    </div>
                    <div className="mt-3" style={{color: '#00B290'}}>J.K Rowling</div>
                    <div>
                        Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard,
                        Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.
                        The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal,
                        overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).<br/><br/>
                        The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1]
                        A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance),
                        the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3]
                        Other major themes in the series include prejudice, corruption, and madness.
                    </div>
                    <div className="mt-3">
                        Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard,
                        Harry Potter, and his friends Hermione Granger and Ron Weasley,
                        all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort,
                        a dark wizard who intends to become immortal,
                        overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).
                    </div>
                </div>
            </div>
            <div style={{height: '700px'}}>
                <hr style={{height: '3px', backgroundColor: 'black', margin: '0', color: 'black'}}/>
                <div style={{fontSize: '25px', fontWeight: 'bold', margin: '20px 0 30px'}}>Другие обладатели этой книги</div>
                {
                    otherHolders.map((elem, i) => {
                        return <>
                            <div>
                                <img src={elem.icon} width="50px" height="50px" style={{marginLeft: '20px'}}/>
                                <span style={{marginLeft: '20px', marginRight: '90px'}}>{elem.name}</span>
                                <span style={{marginRight: '90px', color: '#E8B961'}}>{elem.rate}</span>
                                <span>{elem.date}</span>
                            </div>
                            <hr />
                        </>
                    })
                }
            </div>
        </div>
        <CreateExistingBookModal/>
    </>
}