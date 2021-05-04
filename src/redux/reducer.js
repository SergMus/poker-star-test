import { ACTIONS } from "./action";
import { sortCards } from "./../utils/sortHelper";

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
          ...state.deck,
          ...{
            clubs: sortCards("CLUBS", action.cards),
            spades: sortCards("SPADES", action.cards),
            diamonds: sortCards("DIAMONDS", action.cards),
            hearts: sortCards("HEARTS", action.cards),
            // action.cards
            //   .filter((item) => item.suit === "HEARTS")
            //   .map((item) => {
            //     switch (item.value) {
            //       case "2":
            //         item.value = 2;
            //         break;
            //       case "3":
            //         item.value = 3;
            //         break;
            //       case "4":
            //         item.value = 4;
            //         break;
            //       case "5":
            //         item.value = 5;
            //         break;
            //       case "6":
            //         item.value = 6;
            //         break;
            //       case "7":
            //         item.value = 7;
            //         break;
            //       case "8":
            //         item.value = 8;
            //         break;
            //       case "9":
            //         item.value = 9;
            //         break;
            //       case "10":
            //         item.value = 10;
            //         break;
            //       case "JACK":
            //         item.value = 11;
            //         break;
            //       case "QUEEN":
            //         item.value = 12;
            //         break;
            //       case "KING":
            //         item.value = 13;
            //         break;
            //       case "ACE":
            //         item.value = 14;
            //         break;
            //       default:
            //         break;
            //     }
            //     return item;
            //   })
            //   .sort((a, b) => {
            //     if (a.value > b.value) {
            //       return 1;
            //     }
            //     if (a.value < b.value) {
            //       return -1;
            //     }
            //     return 0;
            //   }),
          },
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
