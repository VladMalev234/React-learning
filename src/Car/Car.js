import React from "react";
//import Radium from 'radium'
import  "./Car.css"

class Car extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps',nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate',nextProps, nextState);
        console.log(nextProps.name.trim() !== this.props.name.trim());
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate',nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Car componentDidUpdate');
    }
// при удалении компонента
    componentWillUnmount() {
        console.log('Car componentWillUnmount');
    }

    render() {
console.log('Car Render');

        const inputClasses = ['input']
   
        if(this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if(this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer'
            }
        }

        return (
            <div className="Car" style={style}> 
            <h3> Car name: {this.props.name} </h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            {//через props передаем сылку на нужную функцию которую хотим вызвать
            }
            <input 
                type="text" 
                onChange={this.props.onChangeName} 
                value={this.props.name} 
                className={inputClasses.join(' ')}
            />
            <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

//props- обьект в которм содержатся все дочерние атрибуты данного компонента
//const Car = props => {
    
//}


export default Car;

//function Car() {
//    return(
//        <h2>This is car component</h2>
//    )
//}

//const car = ()=> {
//    return (
//        <h2>This is car component</h2>
//    )
//}

//const car = () => (
//<div> 
//    This is car component
//    <strong> test</strong>
//</div>;
//)


//export default (props) => (
//    <div> 
//       <h3> Car name: {props.name} </h3>
//       <p>Year: <strong>{props.year}</strong></p>
//    </div>
//)

//export default props => (
//    <div> 
//       <h3> Car name: {props.name} </h3>
//       <p>Year: <strong>{props.year}</strong></p>
//       {/* ключевое поле для передачи парметра внутрь компонента если мы пердаем контент как содержимое тега даного компонента */}
//       {props.children}
//    </div>
//)


