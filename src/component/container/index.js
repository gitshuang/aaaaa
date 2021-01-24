import React, { Component } from 'react';
require('./index.less');

class Container extends Component {
  constructor(props){
    super(props);
  }
 componentDidMount(){
     console.log('=======',this.props.pos)
 }
  render() {
    
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    list: state
  }
}


export default Container;