import types from '../constants/ListCardsConstants';

const initialState = {
  list: {},
  cards: [],
  isFetching: false,
  error: false,
};

const listCards = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LIST_CARDS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case types.FETCH_LIST_CARDS_FAILURE:
      return {
        ...state,
        list: {},
        cards: [],
        isFetching: false,
        error: action.error.response,
      };

    case types.FETCH_LIST_CARDS_SUCCESS: {
      const { cards, id, idBoard, name } = action.response.body;

      return {
        ...state,
        list: {
          idBoard,
          id,
          name,
        },
        cards,
        isFetching: false,
        error: false,
      };
    }

    default:
      return state;
  }
};

export default listCards;
