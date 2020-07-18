import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id)
    const product = data.products.find(item => item._id === props.match.params.id);
    return (
        <>
            <div className="back-to-home">
                <Link to="/">Back</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="details-info">
                    <h4>{product.name}</h4>
                    <p>Price: <b>₦{product.price}</b></p>
                    <p>Some description of the item</p>
                    {/* <li>
                          <h5>{product.brand}</h5>
                      </li>
                      <li>
                          <b>₦{product.price}</b>
                      </li>
                      <li>
                         <p>{product.description}</p>
                      </li> */}
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Total: ₦{product.price}
                        </li>
                        <li>
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </li>
                        <li>
                            <button className="button">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProductScreen;