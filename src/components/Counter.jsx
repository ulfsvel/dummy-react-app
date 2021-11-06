import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../redux";

const getBadgeClasses = (counter) => {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
};

const formatCount = (counter) => {
    return counter.value === 0 ? "Zero" : counter.value;
};

const Counter = ({counter, dispatch}) =>
    <div>
        <div className="row">
            <div className="card">
                <div className="card-body">
                    <div className="card-img-actions"><img
                        src={`images/${counter.image}`}
                        className="card-img" width="96" height="120" alt=""/></div>
                </div>
            </div>
            <div className="">
            <span style={{fontSize: 24}} className={getBadgeClasses(counter)}>
              {formatCount(counter)}
            </span>
            </div>
            <div className="">
                <button
                    className="btn btn-secondary"
                    onClick={() => dispatch(actionCreators.incrementCounter(counter.id))}
                >
                    <i className="fa fa-plus-circle" aria-hidden="true"/>
                </button>
                <button
                    className="btn btn-info m-2"
                    onClick={() => dispatch(actionCreators.decrementCounter(counter.id))}
                    disabled={counter.value === 0 ? "disabled" : ""}
                >
                    <i className="fa fa-minus-circle" aria-hidden="true"/>
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(actionCreators.clearCounter(counter.id))}
                >
                    <i className="fa fa-trash-o" aria-hidden="true"/>
                </button>
            </div>
        </div>
    </div>

export default connect()(Counter);
