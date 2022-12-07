const { createStore } = Redux;

console.log("Yo joe");

//Default State!! #1
const defaultState = {
  balance: 0
}

//Actions! #2
const actionIncrement = (amount) => {
  return {
    type: 'increment',
    payload: amount
  }
}

const actionDecrement = (amount) => {
  return {
    type: "decrement",
    payload: amount
  }
}

// Reducer! #3
const account = (state = defaultState, action) => {
  switch (action.type) {
    case "increment" : 
      return {
        balance: state.balance + action.payload
      }
    case "decrement" :
      return{
        balance: state.balance - action.payload
      }

    default :
      return state
  }
}

//Create Store
const store = createStore(
  account,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
  console.log("subscribing to state changes...");
  const state = store.getState();
  console.log("the current state is: ", state);
  const displayBalance = document.getElementById("balance");
  displayBalance.innerHTML = state.balance;
})


const addButton = document.getElementById("add");
const subButton = document.getElementById("subtract");
const amount = document.getElementById("amount");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  store.dispatch(actionIncrement(Number(amount.value)));
});

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  store.dispatch(actionDecrement(Number(amount.value)));
});
