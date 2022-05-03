const parent_Objective_id = "";
let parent_Objective_arr = [];
let child_Objective_arrList = [];
let filters = [];
export const groupDataByObjective = (data) => {
  
  parent_Objective_arr = data.filter(objective => {
    return objective.parent_objective_id === parent_Objective_id;
  });
  parent_Objective_arr.forEach((parentObjective, index)=> {
      if(!filters.includes(parentObjective.category)){
          filters.push(parentObjective.category);
      } 
      child_Objective_arrList[index] = data.filter(objective => {
          return parentObjective.id === objective.parent_objective_id;
      });
  });
  return [parent_Objective_arr, child_Objective_arrList, filters];
};
