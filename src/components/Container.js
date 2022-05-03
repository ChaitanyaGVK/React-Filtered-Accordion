import { useState } from 'react';
import FilterDropdown from './FilterDropdown';
import Accordion from './Accordion';
import { groupDataByObjective } from '../Utils/Utils';

function Container(props) {
    const [filter, setFilter] = useState("");
    const [parentObjectiveList, childObjectiveList, filterList] = groupDataByObjective(props.data);
    const list = filter === "default" ? parentObjectiveList : 
          parentObjectiveList.filter(item => item.category.includes(filter));
    return (
        <div className = "container">
            <FilterDropdown filters = {filterList} handle = {setFilter} />
            {
                list.length > 0 && 
                list.map((item, index)=> {
                    return <Accordion key = {item.id} index = {index} parent = {item}
                            childList = {childObjectiveList[index]}/>
                })
            }
        </div>    
    )      
}
export default Container;