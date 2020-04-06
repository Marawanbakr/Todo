import React, {Component} from 'react';
import TodoItem from './component/TodoItem/TodoItem'
import AddItem from './component/AddItem/AddItem'

class App extends Component {
  state ={
   items: [
     {id:1,name:'marwan',age:'21',location:'alex',Socialstatus:'single',University:'alex'},
     {id:1,name:'ahmed',age:'22',location:'cairo',Socialstatus:'marrid',University:'cairo'},
     {id:1,name:'hend',age:'20',location:'alex',Socialstatus:'single',University:'Ain-Shams-University'},
     {id:1,name:'hamza',age:'27',location:'elmansore',Socialstatus:'marrid',University:'elmansore'},

   ]
  }
render (){
  return (
    <div className="App">
        TODO LIST
        <TodoItem items={this.state.items}/>
        <AddItem/>
    </div>
  );
  }
}
export default App;

