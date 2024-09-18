import { Puff } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Puff
      visible={true}
      height="80"
      width="80"
      radius="9"
      color="#781458"
      ariaLabel="puff-loading"
    />
  );
};


