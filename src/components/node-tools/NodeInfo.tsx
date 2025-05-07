import React from "react";

import { Box, Button, Paper, Typography } from "@mui/material";
import { UseStoreDispatcher } from "@store/index";
import { setSelectedNode, updateNodeLabel } from "@store/node-list/slice";
import CustomButton from "@components/flow-element/CustomButton";
import { useState } from "react";
import CustomInput from "@components/flow-element/CustomInput";
import "./index.scss";

const NodeInfo = ({ id, label }: { id: string; label: string }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState(label || "Node");

  const dispatch = UseStoreDispatcher();

  const handleNodeInfoClose = () => {
    dispatch(setSelectedNode(""));
  };
  const handleSubmit = () => {
    if (inputValue !== label) {
      dispatch(updateNodeLabel({ id, value: inputValue }));
    }
    setIsInputVisible(false);
  };
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };
  return (
    <Paper className="node-info-wrapper">
      <Box ml={7} mt={2} display={"flex"}>
        <Typography variant="h5"> Node`s information</Typography>
        <Button
          variant="outlined"
          size="small"
          style={{ border: "none", marginLeft: "20px" }}
          onClick={handleNodeInfoClose}
        >
          ❌
        </Button>
      </Box>
      <Box ml={2} mt={5}>
        <Typography variant="h5" mt={1}>
          Node`s id:
          <Box
            boxShadow={1}
            width={"92%"}
            height={"2rem"}
            mt={2}
            mb={2}
            padding={2}
          >
            {id}
          </Box>
        </Typography>
        {isInputVisible ? (
          <CustomInput
            onChange={handleChange}
            initialValue={label || "Node"}
            onSubmit={handleSubmit}
          />
        ) : (
          <Typography variant="h5" mt={6}>
            Node`s label:
            <Box
              boxShadow={1}
              width={"100%"}
              height={"2rem"}
              mt={2}
              mb={2}
              padding={2}
              position={"relative"}
              fontSize={"20px"}
            >
              {label}{" "}
              <Box fontSize={"40px"}>
                <CustomButton
                  isInputVisible={isInputVisible}
                  setIsInputVisible={setIsInputVisible}
                  fontSize="25px"
                />
              </Box>
            </Box>
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default NodeInfo;
