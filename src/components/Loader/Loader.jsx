import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ margin }) => margin};
`;

const Loader = ({ size = '100', margin = '0px' }) => {
  return (
    <LoaderWrapper margin={margin}>
      <TailSpin
        height={size}
        width={size}
        strokeWidth={4}
        color="rgb(218, 2, 13)"
        visible={true}
        ariaLabel="tail-spin-loader"
      />
    </LoaderWrapper>
  );
};

export default Loader;
