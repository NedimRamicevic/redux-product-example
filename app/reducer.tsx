// reducer for the favorite products

import { Reducer } from "redux";
import { createStore } from "redux";

// Type-safe initialState
interface Product {
  id: number;
  name: string;
}
interface ProductState {
  data: Product[];
}
const initialState: ProductState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE": {
      return { data: [...state.data, action.payload] };
    }
    case "REMOVE_FAVORITE": {
      return {
        data: state.data.filter((item: Product) => item.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
