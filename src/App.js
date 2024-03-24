import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import FoodsCategory from "./components/FoodsCategory";

import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodsList } from "./store/modules/takeaway";
import { useEffect } from "react";

const App = () => {
  // 1. 先透過 useDispatch 拿到 dispatch
  // 2. actionCreators 導入進來 → 意思就是 你要拿資料的動作
  // 3. 在 useEffect 中執行動作

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);

  // 上面代表資料已經被放到 foodsList 中，但我們還要從倉庫拿到這個狀態
  // 1. 使用 useSelector
  const { foodsList } = useSelector((state) => state.foods);
  console.log(foodsList);

  return (
    <div className="home">
      {/* 導覽列 */}
      <NavBar />

      {/* 內容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 商品列表 */}
              {foodsList.map((item) => {
                return (
                  <FoodsCategory
                    key={item.tag}
                    // 標題列表
                    name={item.name}
                    // 商品列表
                    foods={item.foods}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 購物車 */}
      <Cart />
    </div>
  );
};

export default App;
