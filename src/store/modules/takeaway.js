import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
  name: "food",
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    setFoodList(state, action) {
      state.foodsList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    //添加購物車
    addCart(state, action) {
      //有添加過就直接+1 沒有添加過就加一項
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        state.cartList.push(action.payload);
      }
    },
    // minusCart(state, action) {
    //   //有添加過就直接+1 沒有添加過就加一項
    //   const item = state.cartList.find((item) => item.id === action.payload.id);
    //   if (item) {
    //     item.count--;
    //   }
    // },
  },
});

//要從actions 動作解構出來 然後輸出 不然別人dispatch 無法填單
const { setFoodList, changeActiveIndex, addCart } = foodsStore.actions;
//異步獲取資料，
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodList(res.data));
  };
};

export { fetchFoodsList, changeActiveIndex, addCart };

const reducer = foodsStore.reducer;

export default reducer;
