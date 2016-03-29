import React, { PropTypes } from 'react';

const propTypes = {
  card: PropTypes.object.isRequired,
};

const defaultProps = {
  prefixClassIcon: 'icon-',
};

function ListItem(props) {
  const { card } = props;
  const { name, desc, dateLastActivity } = card;

  return (
    <li className="list-item">
      <div className="item-content">
        <div className="item-inner">
          <div className="item-title">{name}</div>
          <div className="item-date">{dateLastActivity}</div>
          <div className="item-text">{desc}</div>
        </div>
      </div>
    </li>
  );
}

ListItem.defaultProps = defaultProps;
ListItem.propTypes = propTypes;

export default ListItem;
