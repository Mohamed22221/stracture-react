import { authApi } from "../services/authApi";

import searchSlice from "../services/searchSlice";

export const reducer = {
  [authApi.reducerPath]: authApi.reducer,
  search: searchSlice,

};
