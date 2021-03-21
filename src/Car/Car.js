import React from 'react';
import classes from './Car.module.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

class Car extends React.Component {

    constructor(props) {
        // чтобы базовый компонент мог работать с методом конструктора
        super(props)
        // создаем референцию на элемент input
        this.inputRef = React.createRef()
    }

    // когда компонент зарендерился
    componentDidMount() {
        if(this.props.index === 0) {
            this.inputRef.current.focus()
        } 
    }

    render() {

        //[classes.input]
        const inputClasses = [classes.input]
   
        if(this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if(this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        return (
            <> 
                <h3> Car name: {this.props.name} </h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                {/*через props передаем сылку на нужную функцию которую хотим вызвать*/}
                {/* inputRef - нода каждого инпута компонента this.inputRef - записываем чтоб инпут нода была доступна в классе*/}
                <input 
                //ref = {(inputRef)=> this.inputRef = inputRef }
                    ref = {this.inputRef}
                    type="text" 
                    onChange={this.props.onChangeName} 
                    value={this.props.name} 
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </>
        )
    }
}
//Свойство за которым будет смотреть реакт если оно оперделено
Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car)

//props- обьект в которм содержатся все дочерние атрибуты данного компонента
//const Car = props => {}

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


