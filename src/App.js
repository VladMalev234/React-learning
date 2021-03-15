
import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';





class App extends Component {

  constructor(props) {
    //console.log('App constructor');
    super(props)
    this.state = {
      cars : [
        {name: 'Ford', year: 2018},
        //{name: 'Audi', year: 2016},
        //{name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false,
    }

  }

//значения переменных который задается обьектом state 
  // state = {
  //  cars : [
  //    {name: 'Ford', year: 2018},
  //    {name: 'Audi', year: 2016},
  //    {name: 'Mazda', year: 2010}
  //  ],
  //  pageTitle: 'React components',
  //  showCars: false,
  //}
  
// метод изменения заголовка относительно переданого параметра
toggleCarsHandler = () => {
 // передаем обьект с новым состоянием
  this.setState({
    showCars: !this.state.showCars
  })
}

// изменение имени укащаного компонента машины
onChangeName (name, index) {
  const car = this.state.cars[index];
  car.name = name
  //создаем новый массив со значениями машин
  let cars = [...this.state.cars]
  //cars[index] = car
  this.setState({
    //cars:cars
    cars
  })
}

onDeleteHandler(index) {
  const cars = this.state.cars.concat()
  cars.splice(index, 1)
  this.setState({cars})
}
//жизненный цыкл компеонента
//componentWillMount() {
//  //console.log('App componentWillMount');
//}

componentDidMount() {
  console.log('App componentDidMount');
}

// метод для отрисовки страницы
render () {
  console.log('App render');
  const divStyle = {
    textAlign: "center",
  } 

  let cars = null;
  if(this.state.showCars) {
    cars = this.state.cars.map((car, index)=>{
      return (
        <Car 
        // уникальный индентификатор для удобного поиска
        key = {index}
        name = {car.name}
        year = {car.year}
        //onChangeTitle = {()=> this.changeTitleHendler(car.name)}
        onChangeName = {event => this.onChangeName(event.target.value, index)}
        onDelete = {this.onDeleteHandler.bind(this, index)}
        />
      )
    })
  }

  return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}

        <h1>{this.props.title}</h1>

        <button 
        onClick={this.toggleCarsHandler}
        >Toggle cars</button>
        {/* стили передаються как обьект стилей*/}
        <div style={{
          width: 400,
          margin: 'auto',
          padding: '20px'
        }}>
          {/* список всех машин */}
          {cars}
        </div>
        
      </div>
  )
  }
}

export default App;


//changeTitleHendler = (pageTitle) => {
//this.setState({
//  pageTitle 
//})
//}


// метод изменения заголовка относительно переданого параметра
//changeTitleHendler = (newTitle) => {
//  // передаем обьект с новым состоянием
//   this.setState({
//     pageTitle: newTitle,
//   })
// }

/*<button 
onClick={this.changeTitleHendler.bind(this, 'Changed!')}
>Change title</button>*/

//handleInput = (event) => {
//  console.log("Changed", event.target.value);
//  this.setState({
//    pageTitle: event.target.value
//  })
// }  


// <input type='text'  onChange={this.handleInput}/>
  /*<Car 
        name={cars[0].name} 
        year={cars[0].year} 
        onChangeTitle={this.changeTitleHendler.bind(this, cars[0].name)}
        />
        <Car 
        name={cars[1].name} 
        year={cars[1].year} 
        onChangeTitle={()=> this.changeTitleHendler(cars[1].name)}  
         />
        <Car 
        name={cars[2].name} 
        year={cars[2].year} 
        onChangeTitle={()=> this.changeTitleHendler(cars[2].name)} />*/


//function App() {
//  const divStyle = {
//      textAlign: "center",
//  } 
//  return (
//    <div style={divStyle}>
//      <h1>Hello world!</h1>
//      <Car name={"Ford"} year={2018}>
//        <p style={{color: 'blue'}}> Color</p>
//      </Car> 
//      <Car name="Audi" year="2016">
//       <p style={{color: 'red'}}> Color</p>
//      </Car> 
//      <Car name={"Mazda"} year={2010} />
//    </div>
//  );


  //return React.createElement(
  //  'div',
  //    {
  //      className: 'App'
  //    },
  //    React.createElement(
  //      'h1',
  //       null,
  //       'Hello wirld!'
  //        )
  //)

