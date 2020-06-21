import React from 'react'

class Button extends React.Component{
  render(props){
    return <button onClick={this.props.handleClick}>{this.props.text}</button>
  }
}

export default Button