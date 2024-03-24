import classNames from "classnames";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveIndex } from "../../store/modules/takeaway";

const Menu = () => {
  //要改redux狀態需要透過dispatch
  const dispatch = useDispatch();
  //要拿store資料 需要透過useSelector 並且告訴他是要拿哪個倉庫的什麼狀態
  const { foodsList, activeIndex } = useSelector((state) => state.foods);

  const menus = foodsList.map((item) => ({ tag: item.tag, name: item.name }));
  return (
    <nav className="list-menu">
          {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames(
              "list-menu-item",
              activeIndex === index && "active"
            )}
            onClick={() => dispatch(changeActiveIndex(index))}
          >
            {item.name}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
