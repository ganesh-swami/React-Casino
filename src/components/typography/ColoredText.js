import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColoredText = styled.span`
  color: #FDF4C1;
  font-weight: ${(props) => (props.emphazised ? 'bold' : 'normal')};
  text-shadow: #ff2a00 -1px 0 12px, #ff2a00 0 -1px 12px, #ff2a00 1px 0 12px, #ff2a00 0 1px 12px, #ff2a00 -1px -1px 12px, #ff2a00 1px 1px 12px;
`;

ColoredText.propTypes = {
  emphazised: PropTypes.bool,
  secondary: PropTypes.bool,
};

ColoredText.defaultProps = {
  emphazised: false,
  secondary: false,
};

export default ColoredText;
