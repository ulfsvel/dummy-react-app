import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../redux";

const Products = ({dispatch, counters}) => (
    <div>
        <div className="row">
            {counters.map((product) =>
                <div className='col-md-4' key={product.id}>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-actions"><img
                                src={`images/${product.image}`}
                                className="card-img img-fluid" width="96" height="350" alt=""/></div>
                        </div>
                        <div className="card-body bg-light text-center">
                            <div className="mb-2">
                                <h6 className="mb-2">{product.productName}</h6>
                            </div>
                            <button type="button" className="btn btn-info m-2"
                                    onClick={() => dispatch(actionCreators.incrementCounter(product.id))}>
                                <i
                                    className="fa fa-cart-plus mr-2"
                                    aria-hidden="true"/> Add
                                to cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
);

export default connect((state) => ({
    counters: state.counters
}))(Products);
