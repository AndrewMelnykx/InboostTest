import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FlowState } from "./types";
import nodeFlowSlice from "./node-list/slice";
import { useSelector } from "react-redux";

export interface RootState {
  nodesData: FlowState;
}

const RootReducer = combineReducers({
  nodesData: nodeFlowSlice,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;
export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
