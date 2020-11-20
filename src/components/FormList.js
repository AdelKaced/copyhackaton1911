import React , {useContext} from 'react';
import './FormList.css';
import UserContext from "../Context/UserContext";

import Form from './Form';

const array = [
  {
    name: 'Charret',
    picture: 'gargantua.jpg',
  },
  {
    name: 'Donkey',
    picture:
      'https://medias.liberation.fr/photo/1138864-l-artiste-performeur-abraham-poincheval-sillonne-la-campagne-bretonne-a-pied-avec-armure-medievale-l.jpg?modified_at=1531218006&width=960',
  },
  {
    name: 'Armor',
    picture:
      'https://medias.liberation.fr/photo/1138864-l-artiste-performeur-abraham-poincheval-sillonne-la-campagne-bretonne-a-pied-avec-armure-medievale-l.jpg?modified_at=1531218006&width=960',
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
      <h1> What do you want to exchange {user.onUser && user.logUser.id } </h1>
      <div className="form">
        <div className="formList">
          {array.map((product) => (
            <Form info={product} />
          ))}
        </div >
        <fieldset>
          <legend>Add product </legend>
          <form onSubmit={submitForm} className="body-form">
            <label for="name">Name </label>

            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={change}
              placeholder="Choose your product"
            />

            <label for="picture">Picture </label>

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
