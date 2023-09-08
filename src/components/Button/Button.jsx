import PropTypes from 'prop-types';

import { ButtonStyled, BtnBox } from './Button.styled';
// import Loader from 'components/Loader';

export const Button = ({ onClick }) => {
  return (
    <BtnBox>
      <ButtonStyled onClick={onClick}>Load more</ButtonStyled>
    </BtnBox>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
