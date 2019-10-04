import React from 'React';
import './App.css';
import './details.json';
import details from './details';

class App extends React.Component{
        compare (e){
            console.log(e);
            if (e === '200' ){
               return <button>Test</button>


            } else { 
            return <button>Test 2</button>
        }
    }

    render(){
        return(
            <div>{
                details.map((e) =>
                {
                    console.log(e);
                    return(<div>{ this.compare(e.status)}</div>)
                }) 


            }</div>
        )
    } 


}

export default App;