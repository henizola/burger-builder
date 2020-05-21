import React, { createContext } from "react";

export const BuilderContext = createContext();

export class BuilderProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { name: "beff", quantity: 0, price: 25, id: 1 },
        { name: "cheese", quantity: 0, price: 10, id: 2 },
        { name: "bacon", quantity: 0, price: 15, id: 3 },
        { name: "salad", quantity: 0, price: 5, id: 4 },
      ],
      userChoice: [],
      currentUser: null,
    };
  }
  addItem = (event) => {
    const { items } = this.state;
    const ingridentToAdd = items.find(
      (item) => item.name === event.target.name
    );
    let choice = [...this.state.userChoice];
    const itemExist = choice.find((item) => item.id === ingridentToAdd.id);
    if (itemExist) {
      choice.map((item) =>
        item.id === ingridentToAdd.id ? (item.quantity += 1) : item
      );
      this.setState({ userChoice: [...choice] });
    } else {
      ingridentToAdd.quantity = 1;
      this.setState({ userChoice: [...choice, ingridentToAdd] });
    }
  };
  removeItem = (event) => {
    const { items } = this.state;
    const ingridentToRemove = items.find(
      (item) => item.name === event.target.name
    );
    const choice = [...this.state.userChoice];
    const itemExist = choice.find(
      (item) => item.id === ingridentToRemove.id && item.quantity !== 0
    );
    if (itemExist) {
      choice.map((item) =>
        item.id === ingridentToRemove.id && item.quantity !== 0
          ? (item.quantity -= 1)
          : item
      );
      this.setState({ userChoice: [...choice] });
    } else this.setState({ userChoice: [...choice] });
  };
  getPrice = () => {
    const { userChoice } = this.state;
    let price = userChoice.reduce((acc, element) => {
      let sum = element.price * element.quantity;
      return (acc += sum);
    }, 0);
    return price;
  };

  setDeault = () => {
    // if (this.state.userChoice.length > 0) this.setState({ userChoice: [] });
    console.log("got her");
  };
  render() {
    return (
      <BuilderContext.Provider
        value={{
          items: this.state.items,
          addItem: this.addItem,
          removeItem: this.removeItem,
          userChoice: this.state.userChoice,
          price: this.getPrice(),
          setDeault: this.setDeault,
        }}
      >
        {this.props.children}
      </BuilderContext.Provider>
    );
  }
}
