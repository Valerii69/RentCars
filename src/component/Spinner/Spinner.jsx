import { ThreeDots } from 'react-loader-spinner';
// import { FixedContainer, SpinnerImage } from './Spinner.styled';

const Loader = ({ width, height, color }) => (
  <ThreeDots
    height={height}
    width={width}
    radius="9"
    color={color}
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

export default Loader;
