import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Krishna" },
  { id: "1", name: "Sankar" },
  { id: "2", name: "Mahadev" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
