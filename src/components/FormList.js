import React, { useContext } from 'react';
import './FormList.css';
import UserContext from '../Context/UserContext';

import Form from './Form';

const array = [
  {
    name: 'Charret',
    picture: './img/charrette.jpeg',
  },
  {
    name: 'Coffre',
    picture: './img/coffre.jpeg',
  },
  {
    name: 'Corn',
    picture: './img/mais.jpeg',
  },
  {
    name: 'Armor',
    picture: './img/armure.jpg',
  },
];

function FormList() {
  const [product, setProduct] = React.useState({
    name: '',
    picture: '',
  });
  const [add, setAdd] = React.useState(false);
  // const [allProducts, setAllProducts] = React.useState(array);

  const change = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const user = useContext(UserContext);

  const submitForm = (e) => {
    e.preventDefault();
    array.push(product);
    setAdd(!add);
  };

  console.log(user);
  return (
    <div>
      {' '}
      <h1> What do you want to exchange ? {user.onUser && user.logUser.id} </h1>
      <div className="form">
        <div className="formList">
          {array.map((product) => (
            <Form info={product} />
          ))}
        </div>
        <fieldset className="fieldset">
          <legend className="addProduit">Add product </legend>
          <form onSubmit={submitForm} className="body-form">
            <label className="labname" for="name">
              Name{' '}
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={change}
              placeholder="Choose your product"
            />

            <label className="labpicture" for="picture">
              Picture 
            </label>

            <input
              type="text"
              id="picture"
              name="picture"
              value={product.picture}
              onChange={change}
              placeholder="Put your picture"
            />

            <button type="submit" value="Valide" className="btn-form-submit">
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default FormList;
