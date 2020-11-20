import React from 'react';
import './Form.css';

function Form({ info }) {
  const [troc, setTroc] = React.useState(false);

  const changeTroc = (e) => {
    setTroc(!troc);
  };

  return (
    <div>
      <div className={troc ? 'card-on' : 'card-off'}>
        <p>{info.name} </p>
        <img src={info.picture} alt={info.name} className="img-form" />
      </div>
      <div>
        <button onClick={changeTroc}>Select Troc</button>
      </div>
    </div>
  );
}

export default Form;
