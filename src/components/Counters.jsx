import React from "react";
import Counter from "./Counter";
import {connect} from "react-redux";

const Counters = ({counters}) =>
    <div>
        {counters.filter((counter) => counter.value).map((counter) => (
            <Counter
                key={counter.id}
                counter={counter}
            />
        ))}
    </div>

export default connect((state) => ({
    counters: state.counters
}))(Counters);
