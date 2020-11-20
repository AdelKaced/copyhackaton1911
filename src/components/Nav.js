import { useState } from "react";
import "./Nav.css";
import UserContext from '../Context/UserContext'

import Content from "./Content";

function Nav() {
  const [user, setUSer] = useState(false);

  const [logUser, setLogUser] = useState({
    id: "",
    password: "",
  });

  const login = () => {
    setUSer(!user);
  };

  const change = (e) => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
  };

  const [onUser ,setOnUser] =useState(false)

const submit = (e) => {
e.preventDefault()
setOnUser(!onUser)
}


  // const submit = (e) => {
  //   e.preventDefault();
  //   const config = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: qs.stringify(this.state),
  //   };

  //   const url = "...";

  //   fetch(url, config)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.error) {
  //         alert(res.error);
  //       } else {
  //         alert(`Your ad for ${res} has been published!`);
  //       }
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //       alert("Your ad has not been published, please start over.");
  //     });
  // };
  
  return (
    <div>
      <div className="nav">
        <img src="logohaka.png" alt="logo" />
        <div className="connect">
          <button onClick={login}> {onUser ? "Disconnect" : "Connexion" }</button>
          {user && (
            <form  onSubmit={submit}  >
              <label> Your Id </label>
              <input
                type="text"
                placeholder="Enter your id"
                name="id"
                onChange={change}
                value={logUser.id}
              />

              <label> Your Password </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={change}
                value={logUser.password}
              />
              <input type="submit" value="send" />
            </form>
          )}
        </div>
      </div>
      <UserContext.Provider value={{logUser,onUser}} >
      <Content />
      </UserContext.Provider>
    </div>
  );
}

export default Nav;
