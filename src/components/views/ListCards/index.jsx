import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ListCardsActions from '../../../redux/actions/ListCardsActions';

import List from 'components/lists/List';

import trelloConfig from 'config/trello.json';

const propTypes = {
  fetchListCards: PropTypes.func.isRequired,
  listCards: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  listCards: state.listCards,
});

export default class ListCards extends Component {
  componentDidMount() {
    const { fetchListCards } = this.props;
    const options = { cards: 'all', card_fields: 'desc,name,dateLastActivity' };

    fetchListCards(trelloConfig.list.id, options);
  }

  render() {
    const { listCards } = this.props;

    return (
      <div className="page">
        <div className="page-content">
          <List data={listCards} />
        </div>
      </div>
    );
  }
}

ListCards.propTypes = propTypes;

export default connect(mapStateToProps, ListCardsActions)(ListCards);
