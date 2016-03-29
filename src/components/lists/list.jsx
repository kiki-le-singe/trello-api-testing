import React, { PropTypes } from 'react';

import ListItem from './ListItem';

function List(props) {
  const { list, cards } = props.data;
  const getCards = () => (
    cards.map((card, index) => (<ListItem card={card} key={index} />))
  );

  return (
    <div className="list-block">
      <h2>{list.name} - #id: {list.id}</h2>
      <p>#idBoard: {list.idBoard}</p>
      <ul>
        {getCards()}
      </ul>
    </div>
  );
}

List.propTypes = {
  data: PropTypes.object.isRequired,
};

export default List;
