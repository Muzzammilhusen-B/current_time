import React from 'react';

class App extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={date: new Date()}
    }
    
componentDidMount(){
    this.timerId= setInterval(()=>{
        this.tick()
    },1000)
}
componentWillUnmount(){
    clearInterval(this.timerId)
}
tick(){
    this.setState({date: new Date()})
}

    render(){
        return(
        <div>
            <h1>Welcome to AppLocum</h1>
            <h2>It is {this.state.date.toTimeString()}</h2>
        </div>
        );
    }
}

export default App;