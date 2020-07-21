import React, { useState, useReducer } from "react";
import UserContext from "./user-context";
import { userReducer, ADD_USER, REMOVE_USER } from "./reducers";

const GlobalState = props => {
  const users = [
    {
      id: 1,
      name: "Ali",
      description: `Donec sed odio dui. Etiam porta sem malesuada magna mollis
        euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna.`,
      image: ""
    },
    {
      id: 2,
      name: "Umar",
      description: `Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
        eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
        amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
        mauris condimentum nibh.`,
      image: ""
    },
    {
      id: 3,
      name: "Taimoor",
      description: `Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Vestibulum id ligula porta felis euismod
        semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus.`,
      image: ""
    }
  ];
  const [userState, dispatch] = useReducer(userReducer, { users: users });

  const addUser = user => {
    setTimeout(() => {
      dispatch({ type: ADD_USER, user: user });
    }, 700);
  };

  return (
    <UserContext.Provider
      value={{
        users: users,
        addUser: addUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default GlobalState;
