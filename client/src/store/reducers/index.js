import {
  FETCH_USER,
  FETCH_PRODUCTS,
  EDIT_PRODUCTS,
  INSERT_PRODUCTS,
  DELETE_PRODUCTS,
} from "../actions/types";
const initialState = {
  List: [],
  User: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      state.User = action.payloads;
      return state;

    case FETCH_PRODUCTS:
      const data = { ...state, List: action.payloads };
      return data;
    case EDIT_PRODUCTS:
      const newObj = {
        p_id: action.payloads.p_id,
        name: action.payloads.name,
        price: action.payloads.price,
        description: action.payloads.description,
        image: action.payloads.image,
      };

      const index = state.List.findIndex(
        (obj) => obj.p_id == action.payloads.p_id
      );
      const updatedPro = state.List;
      updatedPro[index] = newObj;

      return { ...state, List: updatedPro };
    case INSERT_PRODUCTS:
      return { ...state, List: state.List.concat(action.payloads) };
    case DELETE_PRODUCTS:
      const newList = state.List.filter((obj) => {
        return obj.p_id !== action.payloads;
      });

      return { ...state, List: newList };

    default:
      return state;
  }
}
