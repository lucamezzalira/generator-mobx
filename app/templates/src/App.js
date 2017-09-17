import React from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

const counter = observable({
    value: 0,
    inc: function(){
        counter.value++
    },
    dec: function(){
        counter.value--
    }
});

@observer
export class Counter extends React.Component{
    render(){
        return (<div>
            {this.props.state.value}
            <div>
                <button type="button" onClick={this.props.state.inc}>increment</button>
                <button type="button" onClick={this.props.state.dec}>decrement</button>
            </div>
        </div>)
    }
}

console.log(counter)

ReactDOM.render(
    <Counter state={counter}></Counter>,
    document.getElementById("app")
);