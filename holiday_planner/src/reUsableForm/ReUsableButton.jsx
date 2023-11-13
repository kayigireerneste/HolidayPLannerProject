/* eslint-disable react/prop-types */

const ReusableButton = ({ onClick, text, className, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default ReusableButton;
