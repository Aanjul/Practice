import React from 'react';
import Array1 from './Array1';
import Array2 from  './Array2';
import 'react-virtualized/styles.css'
//import { Column, Table } from 'react-virtualized'
class  App extends React.Component {
  
  compare = () => {
    const newArray =  Array1.length === Array2.length && Array1.map((e,i) => e.name === Array2[i].name || e.type === Array2[i].type);
       
    // if(Array1.length === Array2.length && Array1.map((e,i) => e.name === Array2[i].name)){
      //   if(true){
      //   return <div>Red</div>
      //   } else {
      //   return <div>Blue</div>
      // }
      // } else {
      //   return <div>Green</div>
      // }
      
   return newArray.map((item) => { 
     if(item === true){
       return <div>Red</div>
     } else
      return (
        <div>Green</div>
      )
    }
    
    )

  // return <div>DIV</div>

  }


render(){
  console.log(Array1.length === Array2.length && Array1.map((e,i) => e.ID === Array2[i].ID))
  console.log(Array1.length ===  Array2.length && Array1.map((e,i) =>e.name === Array2[i].name))
  console.log(Array1.length ===  Array2.length && Array1.map((e,i) => e.type  === Array2[i].type ))
 return (
    <div>
      {this.compare()}
     {/* <div> {
        Array1.map((item) => {
          return(
          <div>
            <p>{item.ID}</p>
              <p>{item.name}</p>
              <p>{item.type}</p>
              <br/> <br/> <br/>
          </div>
          )
        })
      }</div>
     <div>{ Array2.map((Value1) => {
          return(
            <div>
              <div>{Value1.ID}</div>
              <div>{Value1.name}</div>
              <div>{Value1.type}</div>
              <br/><br/><br/>
            </div>
          )
        }
      )}
      </div> */}
    </div>
  )       
 }
}

export default App;
