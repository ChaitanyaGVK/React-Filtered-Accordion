const parent_Objective_id = "";
let parent_Objective_arr = [];
let child_Objective_arrList = [];
let filters = [];
let result = [];
let dataRefined = false;
export const groupDataByObjective = (data) => {
    if(!dataRefined) {
        result = data.slice();
        result.forEach(obj => {
            if(obj.parent_objective_id === parent_Objective_id) {
                parent_Objective_arr.push(obj);
            } else {
                child_Objective_arrList.push(obj);
            }
            if(!filters.includes(obj.category)){
                filters.push(obj.category);
            }
        });
        dataRefined = true;
    }    
    return [parent_Objective_arr, child_Objective_arrList, filters];
};
