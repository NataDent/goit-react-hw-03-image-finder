import PropTypes from 'prop-types';

import {  ButtonStyled, btnBox } from './Button.styled';
// import Loader from 'components/Loader';

export const Button = ({ onClick }) => {
  return (
    <btnBox>
      <ButtonStyled onClick={onClick}>Load more</ButtonStyled>
    </btnBox>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};