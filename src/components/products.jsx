import React, {Component} from "react";

class Products extends Component {
    render() {
        const {products, onIncrement} = this.props;
        return (
            <div>
                <div className="row">
                    {
                        products.map((product) => {
                                return (
                                    <div className='col-md-4' key={product.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-img-actions"><img
                                                    src={`images/${product.image}`}
                                                    className="card-img img-fluid" width="96" height="350" alt=""/></div>
                                            </div>
                                            <div className="card-body bg-light text-center">
                                                <div className="mb-2">
                                                    <h6 className="mb-2">{product.product_name}</h6>
                                                </div>
                                                <button type="button" className="btn btn-info m-2"
                                                        onClick={() => onIncrement(product)}><i
                                                    className="fa fa-cart-plus mr-2"
                                                    aria-hidden="true"/> Add
                                                    to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        )}
                </div>
            </div>
        );
    }
}

export default Products;
