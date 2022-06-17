const receipt1 =
{
  person: 'Karolin',
  order: {
    main: 'Burrito',
    protein: 'Organic Tofu',
    rice: 'Purple Rice',
    sauce: 'Green Crack',
    toppings: [
      'Baby Bok Choy', 'Cucumber Kimchi'
    ],
    drink: 'Korchata',
    cost: 22
  },
  paid: false
}
const receipt2 = {
person: 'Jerrica',
order: {
  main: 'Rice Bowl',
  protein: 'Ginger Soy Chix',
  rice: 'Sticky Rice',
  sauce: 'Korilla',
  toppings: [
    'Yuzu Pickled Sweet Pepper', 'Kale'
  ],
  drink: 'Korchata',
  cost: 19
},
paid: false
}
const receipt3 = {
person: 'Matt',
order: {
  main: 'Salad Bowl',
  protein: 'Organic Tofu',
  rice: 'none',
  sauce: "K'lla",
  toppings: [
    'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
  ],
  drink: 'Sparkling Blood Orange Soda',
  cost: 20
},
paid: true
}
  

class Receipt extends React.Component {
    render(){
        return(
            <div style={receiptStyle}>
                <h2>{this.props.receipt1}</h2>
                <h5>{this.props}</h5>
            </div>
            
        )
    }
}
  
class App extends React.Component {
    state = {
        person: '',
        order: {
            main: '',
            protein: '',
            rice: '',
            sauce: '',
            toppings: [],
            drink: '',
            cost: 0
            },
        paid: true,
      };

      // const newItem = {
      //   name: this.state.name,
      //   price: this.state.price,
      //   description: this.state.description,
      // };
  
      // Add the new item to our data array
    //   this.setState({
    //     data: [newItem, this.state.data],
    //   });
    // };

    render(){
        return(
            <Receipt/>
        )
    }
}
  
  // RENDER COMPONENT TO THE SCREEN
  ReactDOM.render(<App />, document.querySelector(".container"));
