import React, { createContext } from 'react';
import './App.css';
import Button from './Button';
import Counter from './Counter';
import Form from './Form';
import Formfunc from './Formfunc';
import FunctionCount from './FunctionCount';
import Letter from './Letter';
// import Homepage from './homepage.component';
import Practisetwo from './Practisetwo';
import Practisingone from './Practisingone';
import Question from './Question';
import Search from './Search';
import Simpleform from './Simpleform';
import Quix from './Quix';
import UseCount from './UseCount';
import { Countdown } from './Countdown';
import { Countimer } from './Countimer';
import { Datafetching } from './Datafetching';
import { ComponentC } from './ComponentC';
import { Tpone } from './Tpone';
import { AddItem } from './AddItem';
import { ComplexForm } from './ComplexForm';
import { FormTest } from './FormTest';
export  const UserContext=React.createContext();

function App() {
  return (
    <div >
       {/* <Practisingone/>
       <Practisetwo/>
       <Button/>
      //  <Form/> */}
      {/* //  <Question/>
      //  <Formfunc/>
      //  <Letter/>
      //  <Counter/>
      //  <FunctionCount/>
      //  <Search/> */}
      {/* <Simpleform/>
      <Quix/> */}
      {/* <UseCount/> */}
      {/* <Countdown/>
      <Countimer/>
      <Datafetching/> */}
      {/* <UserContext.Provider value={'shina dev'}> <ComponentC /></UserContext.Provider>
      <Tpone/> */}
      {/* <AddItem/>
      <ComplexForm/>
       */}
       <FormTest/>

    </div>
  );
}

export default App;
