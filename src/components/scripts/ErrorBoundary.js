import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super();
        this.state={
            hasError:false
        }
    }

    componentDidCatch(){
        this.setState({hasError:true});
    }

    render(){
        return this.state.hasError? 
        <h1>Sorry, Something went wrong</h1>:
        this.props.children;
    }
}

export default ErrorBoundary;