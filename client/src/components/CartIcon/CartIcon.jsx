/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { CartContext } from '../../providers/cart/CartProvder';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <img className="shopping-icon" src={`/${ShoppingIcon}`} alt="Shopping Icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
