import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";

import {
  addProduct,
  listProducts,
  deleteProduct,
} from "../appRedux/action/productActions";
import { initProductState } from "./util";

const AddProduct = (props) => {
  const [input, setInput] = useState({ ...initProductState });
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState("");

  const productAdd = useSelector((state) => state.productAdd);
  const {
    loading: loadingAdd,
    success: successAdd,
    error: errorAdd,
  } = productAdd;
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successAdd) {
      setModalVisible((m) => !m);
    }
    dispatch(listProducts());
  }, [successAdd, successDelete, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        _id: id,
        ...input,
      })
    );
    setInput({ ...initProductState });
    setId("");
  };
  const onEdit = (product) => {
    setId(product._id);
    setInput({
      name: product.name,
      price: product.price,
      brand: product.brand,
      image: product.image,
      category: product.category,
      description: product.description,
      countInStock: product.countInStock,
    });
    setModalVisible(!modalVisible);
  };
  const onDelete = (product) => {
    dispatch(deleteProduct(product._id));
  };
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="hero is-fullheight">
      {loadingAdd && <div>Loading..</div>}
      {errorAdd && <div>{errorAdd}</div>}
      {loading && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {loadingDelete && <div>Loading...</div>}
      {errorDelete && <div>{errorDelete}</div>}
      <div className="hero-body">
        <div className="container">
          <h2 className="is-size-4 is-center">Products</h2>
          <button
            onClick={() => setModalVisible(!modalVisible)}
            className="button"
            style={{ float: "right" }}
          >
            Add Product
          </button>
          <div className="table-container is-center">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products !== undefined &&
                  products.map((product, i) => {
                    return (
                      <tr key={i}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>
                          <button
                            onClick={() => onEdit(product)}
                            className="button"
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => onDelete(product)}
                            className="button"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className={modalVisible ? "modal is-active" : "modal"}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Add Product</p>
              </header>
              <section className="modal-card-body">
                <div className="columns is-centered">
                  <div className="column is-12">
                    <form onSubmit={submitHandler}>
                      <div className="field">
                        <label className="label" htmlFor="name">
                          Product Name
                        </label>
                        <div className="control">
                          <input
                            required
                            value={input.name}
                            className="input"
                            name="name"
                            type="text"
                            placeholder="Product Name"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="price">
                          Price
                        </label>
                        <div className="control">
                          <input
                            required
                            value={input.price}
                            className="input"
                            name="price"
                            type="number"
                            placeholder="Price"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="brand">
                          Brand
                        </label>
                        <div className="control">
                          <input
                            required
                            value={input.brand}
                            className="input"
                            name="brand"
                            type="text"
                            placeholder="Brand"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="image">
                          Image
                        </label>
                        <div className="control">
                          <input
                            required
                            value={input.image}
                            className="input"
                            name="image"
                            type="text"
                            placeholder="Image"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="category">
                          Category
                        </label>
                        <div className="control">
                          <input
                            required
                            value={input.category}
                            className="input"
                            name="category"
                            type="text"
                            placeholder="Category"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="description">
                          Description
                        </label>
                        <div className="control">
                          <input
                            required
                            value={input.description}
                            className="input"
                            name="description"
                            type="text"
                            placeholder="Description"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor="countInStock">
                          Count In Stock
                        </label>
                        <div className="control">
                          <input
                            required
                            value={input.countInStock}
                            className="input"
                            name="countInStock"
                            type="number"
                            placeholder="Count In Stock"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                      </div>
                      <button className="button  is-primary is-light is-fullwidth">
                        {id ? "Update Product" : "Add Product"}
                      </button>
                    </form>
                  </div>
                </div>
              </section>
              <footer className="modal-card-foot">
                <button
                  onClick={() => {
                    setModalVisible(!modalVisible);
                    setInput({ ...initProductState });
                    setId("");
                  }}
                  className="button is-pulled-right"
                >
                  Ok
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AddProduct.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }),
};
export default AddProduct;
