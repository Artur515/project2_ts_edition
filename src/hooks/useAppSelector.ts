import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;