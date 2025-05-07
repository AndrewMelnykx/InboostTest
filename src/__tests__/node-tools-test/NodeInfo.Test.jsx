import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NodeInfo from "../../components/node-tools/NodeInfo";
import { setSelectedNode, updateNodeLabel } from "@store/node-list/slice";

const mockStore = configureStore([]);

describe("NodeInfo Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      nodeList: {
        selectedNodeId: "1",
      },
    });
    store.dispatch = jest.fn();
  });

  test("renders NodeInfo component with correct initial data", () => {
    render(
      <Provider store={store}>
        <NodeInfo id="1" label="Test Node" />
      </Provider>
    );

    expect(screen.getByText("Node's information")).toBeInTheDocument();
    expect(screen.getByText("Node's id:")).toBeInTheDocument();
    expect(screen.getByText("Test Node")).toBeInTheDocument();
  });

  test("updates node label when submitted", () => {
    render(
      <Provider store={store}>
        <NodeInfo id="1" label="Test Node" />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: "✏" }));
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Updated Node" } });
    fireEvent.submit(input); // Handles input submission correctly

    expect(store.dispatch).toHaveBeenCalledWith(
      updateNodeLabel({ id: "1", value: "Updated Node" })
    );
  });
});
