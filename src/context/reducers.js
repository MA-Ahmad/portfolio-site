export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

const addUser = (user, state) => {
  const updatedUsers = [...state.users];
  const updatedUserIndex = updatedUsers.findIndex(
    updatedUser => updatedUser.id === user.id
  );

  if (updatedUserIndex < 0) {
    // updatedUsers.push({ ...user, quantity: 1 });
  } else {
    const updatedUser = {
      ...updatedUsers[updatedUserIndex]
    };
    // updatedUser.quantity++;
    updatedUsers[updatedUserIndex] = user;
  }
  console.log(updatedUsers);
  console.log(state);

  return { ...state, users: updatedUsers };
};

export const userReducer = (state, action) => {
  // console.log("state");
  // console.log(state);
  switch (action.type) {
    case ADD_USER:
      return addUser(action.user, state);
    // case REMOVE_USER:
    // return removeUser(action.userId, state);
    default:
      return state;
  }
};
