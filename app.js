// TODO
// var App = () => (
//     <GroceryList groceryList={['Cucumber', 'Kale']} />
// );

// var GroceryList = (props) => {
//   var onGroceryListClick = (event) => {
//       console.log('I got clicked');
//   };
//   return (
//     <ul>
//         <li onClick={onGroceryListClick}>{props.groceryList[0]}</li>
//         <li>{props.groceryList[1]}</li>
//     </ul>
//   );
// }

var App = () => (
    <GroceryList groceryList={['Cucumber', 'Kale']} />
);

var GroceryList = (props) => (
    <ul>
        <GroceryListItem name={props.groceryList[0]}/>
        <li>{props.groceryList[1]}</li>
    </ul>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }

    onItemClick() {
        this.setState({done: !this.state.done});
        console.log(this.state);
    }

    render() {
        var style = {textDecoration: this.state.done ? 'line-through' : 'none'};

        return (
            <li style={style} onClick={this.onItemClick.bind(this)}>{this.props.name}</li>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("app"));

/*
var TodoList = (props) => (
    <ul>
      <li>{props.Cucumber}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
  
  var App = () => (
    <div>
      <h2>My Todo List</h2>
      <TodoList GroceryList={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
    </div>
  );
*/
