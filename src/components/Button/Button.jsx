import PropTypes from 'prop-types';

import { ButtonStyled, BtnBox } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <BtnBox>
      <ButtonStyled onClick={onLoadMore}>
        <span>Load more</span>
      </ButtonStyled>
    </BtnBox>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
