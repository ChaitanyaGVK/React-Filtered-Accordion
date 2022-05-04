import { useContext } from 'react';
import ModalHandler from './ModalHandler';
import { ModalContext} from '../App';
function AccordionContent(props) {
    const modalHandler = useContext(ModalContext);
    return (
        <ol type = 'a'>
           {
               props.contentList.map(item => {
                   return <li key = {item.id} onClick = {()=> {ModalHandler(modalHandler, item)}}>
                   {item.title}
                   </li>
               })
           } 
        </ol>
    )

}
export default AccordionContent;