import React from 'react';

class Counter extends React.Component{
    state={counter:null};
    
    componentDidMount(){
        this.handleCounter();
    }
    
    componentWillUnmount(){
        this.handleReset();
    }
    
    handleCounter=()=>{
        setInterval(()=>{
            // console.log("counter increased")
            this.setState({counter:this.state.counter +1})
        },3000)
    }
    handleReset=()=>{
        this.setState({
            counter: null 
        })
    }
    
    render(){
        const {counter}=this.state;
        return(
            <div>
                <h1>Counter App</h1>
                <h2> Increasing after every 3 seconds</h2>
                <h2>Counter: {counter}</h2>
                <div className="ui button primary" onClick={this.handleReset}>Reset</div>
            </div>
        )
    }
    
    
    }
    
    export default Counter;