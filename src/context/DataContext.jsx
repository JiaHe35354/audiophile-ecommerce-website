import { createContext, useEffect, useReducer } from "react";

export const DataContext = createContext({
  products: [],
  cartItems: [],
  loading: false,
  error: null,
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  clearCart: () => {},
});

const initialState = {
  products: [],
  cartItems: getInitialCart(),
  loading: false,
  error: null,
};

function getInitialCart() {
  try {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function shoppingReducer(state, action) {
  if (action.type === "FETCH_START") {
    return { ...state, loading: true, error: null };
  }

  if (action.type === "FETCH_SUCCESS") {
    return { ...state, loading: false, error: null, products: action.payload };
  }

  if (action.type === "FETCH_ERROR") {
    return { ...state, loading: false, error: action.payload };
  }

  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.cartItems];
    console.log(state.cartItems);

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.payload.quantity,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      updatedItems.push({
        id: action.payload.id,
        image: product.cartImage,
        name: product.name,
        price: product.price,
        quantity: action.payload.quantity,
      });
    }

    return {
      ...state,
      cartItems: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.cartItems];
    const index = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    if (index === -1) return state;

    const updatedItem = { ...updatedItems[index] };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(index, 1);
    } else {
      updatedItems[index] = updatedItem;
    }
    return { ...state, cartItems: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cartItems: [] };
  }

  return state;
}

export default function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: "FETCH_START" });

      try {
        const response = await fetch("/data/data.json");

        if (!response.ok) {
          throw new Error("Failed to load products data, please try again!");
        }

        const resData = await response.json();

        // localStorage.setItem("products", JSON.stringify(resData));

        dispatch({ type: "FETCH_SUCCESS", payload: resData });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    }

    fetchData();
  }, []);

  function handleAddItemToCart(id, quantity) {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id,
        quantity,
      },
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  function handleClearCart() {
    dispatch({ type: "CLEAR_CART" });
    localStorage.removeItem("cartItems");
  }

  const ctxValue = {
    products: state.products,
    cartItems: state.cartItems,
    loading: state.loading,
    error: state.error,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    clearCart: handleClearCart,
  };

  return (
    <DataContext.Provider value={ctxValue}>{children}</DataContext.Provider>
  );
}
