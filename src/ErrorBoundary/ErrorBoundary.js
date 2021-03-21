import React from 'react'
//метод для отслеживания ошибок и их отрабаывания 
export default class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if(this.state.hasError) {
            return <h1 style={{color:'red'}}>Somrthing went wrong</h1>  
         } 
             return this.props.children
         
    }
 }