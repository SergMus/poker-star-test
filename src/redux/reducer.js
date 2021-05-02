import { ACTIONS } from "./action";

const defaultState = {
  deck: {
    has_cards: false
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CARDS: {
      const { deck, cards } = action.payload;
      return {
        ...state,
        deck,
        cards
      };
    }

    default:
      return state;
  }
};

export default reducer;
