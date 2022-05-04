import { useContext } from 'react';
import ModalHandler from './ModalHandler';
import { ModalContext} from '../App';
function AccordionContent(props) {
    const modalHandler = useContext(ModalContext);
    return (
        <ol type = 'a'>
           {
               props.contentList.map(item => {
                   return (
                    <div key = {item.id}>   
                        <i className='far fa-user-circle' style={{fontSize:'24px'}}></i>     
                        <li onClick = {()=> {ModalHandler(modalHandler, item)}}>
                        {item.title}
                        </li>
                    </div>)
               })
           } 
        </ol>
    )

}
export default AccordionContent;