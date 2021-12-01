import Rea from "react";
import logo from "./lco_logo.png"
import "./App.css"


class App extends Rea.Component{

  constructor(props){
    super(props); 
    this.state={
      newItem:"",
      list:[]
    }
  }

  addItem(todovalue){
    if(todovalue!==""){
      const newItem={
        id: Date.now(),
        value: todovalue,
        isDone: false
      };

      const list=[...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }
  }

  deleteItem(id){
    const list=[...this.state.list];
    const updatedlist=list.filter(item=> item.id!==id);

    this.setState({list:updatedlist}); 
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  updateCheckbox(id){
    const list=[...this.state.list];
    var updatedlist=list.filter(item=>item.id!==id);
    const list2=list.filter(item=>item.id===id);
    const ele=list2[0];
    ele.isDone=!(ele.isDone);
    updatedlist.push(ele);

    this.setState({list:updatedlist});
  }

  render(){
    return(
      <div>
        <img src={logo} width="250" height="100" className="logo"/>
        <h1 className="app-title"> LCO ToDo App</h1>
        <div className="container">
          Add an Item...
          <br/>
          <input 
          type="text" 
          className="input-text"
          placeholder="Write a ToDO"
          required
          value={this.state.newItem}
          onChange={e=>this.updateInput(e.target.value)}

          ></input>
          <button 
          className="add-btn"
          onClick={()=>this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add ToDo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item=>{
                return(
                  <li key={item.id}>
                    <input 
                    type="checkbox"
                    checked={item.isDone}
                    onChange={()=>this.updateCheckbox(item.id)}
                    ></input>
                    {item.value}
                    <button 
                    className="btn" 
                    onClick={()=>this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              })}

              <li>
                <input type="checkbox"></input>
                Record Youtube videos
                <button className="btn">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;