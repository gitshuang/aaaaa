import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toDoReducer from 'store/root/toDoReducer'
require('./todo.less');
import Container from 'component/container'

class Root extends Component {
  constructor(props){
    super(props);
    this.state={
      id:1
    }
    this.handlechange = this.handlechange.bind(this)
  }
  add(){
    const {value} = this.state;
    var id = this.state.id+1
    this.props.dispatch({type:'add',payload:{title:value,id}})
    this.setState({id})
  }
  del(id){
    this.props.dispatch({type:'del',payload:{id}})
  }
  handlechange(e){
    this.setState({value:e.target.value})
  }
  render() {
    const {value} = this.state
    return (
      <Container pos = 'outside'>
        <ul>
          {this.props.list.map((item)=>{
            return <li >{item.title} <button onClick={()=>{this.del(item.id)}}>删除</button></li>
            })}
        </ul>
        <Container pos = 'inside'>
          <button onClick={()=>{this.add()}}>增加</button>
          <input onChange={this.handlechange} value={value}/>
        </Container>
        
      </Container>
      
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
    toDoReducer:bindActionCreators(toDoReducer,dispatch)
  }
}
var RootNew = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)


export default RootNew;