import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: "food",
  initialState: {
    foodsList: [],
  },
  reducers: {
    setFoodList(state, action) {
      state.foodsList = action.payload;
    },
  },
});

const { setFoodList } = foodsStore.actions;
//異步獲取資料，
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodList(res.data));
  };
};

export { fetchFoodsList };

const reducer = foodsStore.reducer;

export default reducer;
