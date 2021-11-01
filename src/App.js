import React, {Component} from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Products from "./components/products";

class App extends Component {
    products = [
        {id: 1, value: 0, product_name: "Pizza", image: 'pizza.jpeg'},
        {id: 2, value: 0, product_name: "Papanasi", image: 'papanasi.jpeg'},
        {id: 3, value: 0, product_name: "Brownie", image: 'brownie.jpeg'},
        {id: 4, value: 0, product_name: "Salad", image: 'salad.jpeg'},
        {id: 5, value: 0, product_name: "Sandwich", image: 'sandwich.jpeg'},
        {id: 6, value: 0, product_name: "Burger", image: 'burger.jpeg'},
    ]
    state = {
        counters: [...this.products],
    };

    handleIncrement = (counter) => {
        console.log("incrementing");
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counters[index]};
        counters[index].value++;
        this.setState({counters});
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counters[index]};
        counters[index].value--;
        this.setState({counters});
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({counters});
    };

    render() {
        return (
            <div className="main__wrap">
                <main className="container">
                    <div className="card__box">
                        <Products
                            products={this.products}
                            onIncrement={this.handleIncrement}
                        />
                        <NavBar
                            totalCounters={
                                this.state.counters.filter((c) => c.value > 0).length
                            }
                        />
                        <Counters
                            counters={this.state.counters}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
