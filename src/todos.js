import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import store from './store';

class Root extends Component {
  constructor(props){
    super(props);
    this.state={
      id:1
    }
  }
  add(){
    var id = this.state.id+1
    this.setState({id:id})
    debugger
    store.dispatch({type:'add',payload:{title:'2222'}})
  }
  del(id){
    store.dispatch({type:'del',payload:{id}})
  }
  render() {
    console.log(store.getState())
    return (
      <div>
        <button onClick={()=>{this.add()}}>增加</button>
        
       <ul>
         {store.getState().map((item)=>{
           return <li >{item.title} <button onClick={()=>{this.del(item.id)}}>删除</button></li>
         })}
      </ul>
      <input onChange={this}/>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    list: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch: dispatch,
  }
}
var RootNew = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
const App = () => (
    <Provider store={store} >
      <RootNew />
    </Provider>
);

export default App;