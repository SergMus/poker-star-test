// types of action
export const ACTIONS = {
  SET_DECK: "SET_DECK",
  SET_CARDS: "SET_CARDS",
  SORT_DECK: "SORT_DECK",
};

// actions
export function getDeck() {
  return async (dispatch) => {
    const deck = await fetch(
      "/api/deck/new/shuffle/?deck_count=1"
    ).then((response) => response.json());
    const cards = await fetch(
      `/api/deck/${deck.deck_id}/draw/?count=${deck.remaining}`
    ).then((response) => response.json());
    dispatch({
      type: ACTIONS.SET_CARDS,
      payload: {
        deck: cards,
      },
    });
  };
}

export function sumDeck() {
  return (dispatch) => {};
}
export function sortDeck(cards) {
  return (dispatch) => {
    dispatch({
      type: ACTIONS.SORT_DECK,
      cards,
    });
  };
}
