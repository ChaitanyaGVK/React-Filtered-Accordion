import { createContext, useState, useCallback, useEffect } from 'react';
import  { useApi } from './data/data';
import Container from './components/Container';
import Modal from './components/Modal';

function App() {
  const { loading, data } = useApi('https://okrcentral.github.io/sample-okrs/db.json');
  const [selectedObjective, setSelectedObjective] = useState({
    show: false,
    objective: {}
  });
  const modalDisplayHandler = useCallback((obj)=> {
    setSelectedObjective({
      show: obj.show,
      data: obj.objective
    });
  }, []);
  if(loading) return <h1>Loading...</h1>
  return (
    <div className="App">
      <ModalContext.Provider value = {modalDisplayHandler}>
        <Container data = {data} /> 
        <Modal objective = {selectedObjective} handler = {modalDisplayHandler} /> 
      </ModalContext.Provider>  
    </div>
  );
}
export const ModalContext = createContext();
export default App;
