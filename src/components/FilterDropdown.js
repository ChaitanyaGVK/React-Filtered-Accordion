import { useState } from 'react';

function FilterDropdown(props) {
    const [category, setCategory] = useState(props);
    const handleChange = (e) => {
        setCategory(e.target.value);
        props.handle(e.target.value);
    }
    return (
        <select  value={category} onChange={handleChange}>         
            <option value={"default"}> Select A Category </option>  
            {
                props.filters.length > 0 &&
                props.filters.map((item, index) => {
                    return <option key = {index} value = {item}>{item}</option>
                })
            }
            
      </select>
    )
}
export default FilterDropdown;