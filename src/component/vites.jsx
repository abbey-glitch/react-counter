import React, { Component } from 'react';
import Number from './vite';
class Numbers extends Component {
    state = { numbers:[
        {id:1, value:5},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ] } 
    render() { 
        return (<>
            {this.state.numbers.map(number=>
            <Number key={number.id}
             number={number}>
                <h3>title</h3>
                </Number>)}
        </>);
    }
}
 
export default Numbers;