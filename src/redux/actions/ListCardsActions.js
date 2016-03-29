import types from '../constants/ListCardsConstants';
import { fetch } from 'services/listCards';

/*
 * action creators
 */

function fetchListCards(id, options = {}) {
  return {
    // Types of actions to emit before and after
    types: [
      types.FETCH_LIST_CARDS_REQUEST,
      types.FETCH_LIST_CARDS_SUCCESS,
      types.FETCH_LIST_CARDS_FAILURE,
    ],
    // Check the cache (optional):
    shouldCallAPI: (state) => !state.listCards.cards.length,
    // Perform the fetching:
    callAPI: () => fetch(id, options),
    // Arguments to inject in begin/end actions
    payload: { id },
  };
}

export default { fetchListCards };
