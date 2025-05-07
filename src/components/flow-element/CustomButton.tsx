import React from "react";

interface CustomButtonProps {
  isInputVisible: boolean;
  setIsInputVisible: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  isInputVisible,
  setIsInputVisible,
  fontSize,
}) => {
  const handleToggle = () => {
    if (isInputVisible) {
      setIsInputVisible(false);
    } else {
      setIsInputVisible(true);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="nodrag custom-button"
      title="Edit"
      style={{ fontSize: fontSize }}
    >
      ✏
    </button>
  );
};

export default CustomButton;
