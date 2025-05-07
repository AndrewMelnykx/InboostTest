import { Handle, Position, NodeProps } from "@xyflow/react";
import { useState } from "react";
import { setSelectedNode, updateNodeLabel } from "@store/node-list/slice";
import { CustomNodeData } from "@helpers/types";
import { UseStoreDispatcher } from "@store/index";

import "./index.scss";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function TextUpdaterNode(props: NodeProps<CustomNodeData>) {
  const { data, id } = props;
  const dispatch = UseStoreDispatcher();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState(data.label || "Node");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = () => {
    if (inputValue !== data.label) {
      dispatch(updateNodeLabel({ id, value: inputValue }));
    }
    setIsInputVisible(false);
  };

  const showDetailInfo = (id: string) => {
    dispatch(setSelectedNode(id));
  };

  return (
    <div className="custom-node-wrapper" onClick={() => showDetailInfo(id)}>
      <Handle type="target" position={Position.Top} />
      <div className="node-style">
        {isInputVisible ? (
          <CustomInput
            initialValue={data.label || "Node"}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        ) : (
          <span className="node-label">{data.label || "Node"}</span>
        )}

        <CustomButton
          isInputVisible={isInputVisible}
          setIsInputVisible={setIsInputVisible}
          fontSize="15px"
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={{ left: 10 }}
      />
    </div>
  );
}

const nodeTypes = {
  textUpdater: TextUpdaterNode,
};

export { nodeTypes };
export default TextUpdaterNode;
