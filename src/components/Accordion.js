import React, { useState, useRef, useEffect, useContext } from 'react';
import './Accordion.css';
import AccordionContent from './AccordionContent';
import ModalHandler from './ModalHandler';
import { ModalContext} from '../App';
function Accordion(data) {
    const [toggle, setToggle] = useState(true);
    const panelRef = useRef();
    useEffect(()=>{
        panelRef.current.style.maxHeight = toggle ? panelRef.current.scrollHeight + 'px' : null;
    }, [toggle]);
    const toggleAccordion = (e)=> {
        e.stopPropagation();
        setToggle((prevState) => !prevState);
    }
    const modalHandler = useContext(ModalContext);
    const list = data.filter === "default" ? data.childList.filter(item => item.parent_objective_id === data.parent.id) : 
          data.childList.filter(item => item.parent_objective_id === data.parent.id && item.category.includes(data.filter)); 
    return (
        <>
            <button className={`accordion ${toggle ? 'active' : ''}`} onClick = {()=> {ModalHandler(modalHandler, data.parent)}}>
            <i className= {`arrow ${toggle ? '' : 'up'}`} onClick = {toggleAccordion} ></i>   
            <i className='far fa-user-circle' style={{fontSize:'24px'}}></i>         
            {data.index + 1}. {data.parent.title}</button>
            <div className="panel" ref = {panelRef}>
                { list.length > 0 &&
                    <AccordionContent contentList = {list} />
                }    
            </div>
        </>
    )
}
export default Accordion;