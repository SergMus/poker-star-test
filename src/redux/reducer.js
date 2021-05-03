import { ACTIONS } from "./action";

const defaultState = {
  deck: {
    has_cards: false,
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CARDS: {
      const { deck, cards } = action.payload;
      return {
        ...state,
        deck,
        cards,
      };
    }
    case ACTIONS.SORT_DECK: {
      return {
        ...state,
        deck: {
          spades: action.cards.filter((item) => item.suit === "SPADES"),
          clubs: action.cards.filter((item) => item.suit === "CLUBS"),
          diamonds: action.cards.filter((item) => item.suit === "DIAMONDS"),
          hearts: action.cards.filter((item) => item.suit === "HEARTS"),
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
