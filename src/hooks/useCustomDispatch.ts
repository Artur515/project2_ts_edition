import { bindActionCreators } from "redux";
import { Actions } from "../redux/reducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

export const useCustomDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(Actions, dispatch);
};