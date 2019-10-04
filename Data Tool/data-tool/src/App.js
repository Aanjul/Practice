import React from 'react';
import './App.css';
import './details.json';
import details from './details.json';

class App extends React.Component{
  
  compare (e){
      console.log(e);
      if(e === '200'){
        return <button> <img src="/home/aanjul/Desktop/Practice/Data Tool/right.jpeg" alt="IF" onClick={this.myfunction} /></button>

      } else{
        return <button> <img src="/home/aanjul/Desktop/Practice/Data Tool/right.jpeg" alt="ELSE" onClick={this.myfunction} /></button>

      }
  }
  
  render(){
    return(
       <div>{
         details.map((e) => 
         {
           console.log(e);
          return (<div>{this.compare(e.status)}</div>)
            }) 
      }     
       </div>      
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
