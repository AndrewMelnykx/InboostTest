import React, { useState } from "react";
import { TextField } from "@mui/material";

interface CustomInputProps {
  initialValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  initialValue,
  onChange,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    onChange(evt);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="nodrag input-node">
      <TextField
        variant="standard"
        value={inputValue}
        onChange={handleChange}
        style={{ padding: "10px" }}
        autoFocus
      />
    </form>
  );
};

export default CustomInput;
