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
    return (
        <>
            <button className={`accordion ${toggle ? 'active' : ''}`} onClick = {()=> {ModalHandler(modalHandler, data.parent)}}>
            <i className= {`arrow ${toggle ? '' : 'up'}`} onClick = {toggleAccordion} ></i>            
            {data.index + 1}. {data.parent.title}</button>
            <div className="panel" ref = {panelRef}>
                { data.childList.length > 0 &&
                    <AccordionContent contentList = {data.childList} />
                }    
            </div>
        </>
    )
}
export default Accordion;