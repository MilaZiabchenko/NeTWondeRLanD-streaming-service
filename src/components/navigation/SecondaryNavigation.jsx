import { useNavigate } from 'react-router-dom';

const SecondaryNavigation = ({
  leftLink,
  leftTitle,
  rightLink,
  rightTitle
}) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className='btn btn-semi-transparent'
        onClick={() => navigate(`/${leftLink}`)}
      >
        <i className='fas fa-chevron-left'></i>
        {leftTitle}
      </button>
      <button
        className='btn btn-semi-transparent'
        onClick={() => navigate(`/${rightLink}`)}
      >
        {rightTitle}
        <i className='fas fa-chevron-right'></i>
      </button>
    </>
  );
};

export default SecondaryNavigation;
