import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onDelete, onDecrement, counters} =
      this.props;
    return (
      <div>
        {counters.filter((counter) => counter.value).map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
