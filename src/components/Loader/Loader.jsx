import { Hourglass } from 'react-loader-spinner';
import { loaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <loaderBox>
      <Hourglass
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        colors={['#306cce', '#72a1ed']}
      />
    </loaderBox>
  );
};
