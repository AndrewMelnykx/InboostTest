import Header from "@header/index";

import "./index.scss";
import ToolBar from "@components/node-tools";

import NodeFlowCanvas from "@components/flow-element";
import "@xyflow/react/dist/style.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@helpers/constants";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="main-page-wrapper">
        <Header />
        <div className="toolbar-flow-field-wrapper">
          <ToolBar />
          <NodeFlowCanvas />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
