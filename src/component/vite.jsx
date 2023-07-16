import React, { Component } from 'react';
class Number extends Component {
    state = {
        number:this.props.number.value,
        // url:"https://picsum.photos/seed/picsum/200/300"
     } 
    handleIncrement = (event)=>{
        //  console.log(event)
        this.setState({number: this.state.number + 1})
    }
    render() { 
        console.log(this.props)
        return (<>
          {/* <img src={this.state.url} alt="" /> */}
         <div className='bg-info'>
           <span className={this.getColor()}>{this.getNumber()}</span>
               <button className='btn btn-primary m-2 p-2'
               onClick={this.handleIncrement}>INCREMENT</button>
               <button onClick={()=>{this.props.onDelete(this.props.number.id)}} className='btn btn-danger'>Delete</button>
          </div>
        </>);
    }
    getColor = ()=>{
        let classes = 'm-2 p-2 bg-'
        classes += this.state.number===0 ? 'danger text-warning' : 'success'
        return classes 
    }
    getNumber = ()=>{
        const{number} = this.state
        return number===0 ? 'zero' : number
    }
}
 
export default Number;