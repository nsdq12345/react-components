// TODO
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

