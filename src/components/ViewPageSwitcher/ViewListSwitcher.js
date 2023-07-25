import { useContext } from "react";
import "./ViewListSwitcher.scss";
import { ViewListContext } from "../../Contexts/Context";

const ViewList = () => {
  const { viewList, setViewList } = useContext(ViewListContext);
  function changeViewList(newValue) {
    setViewList(newValue);
    localStorage.setItem("listView", JSON.stringify(newValue));
  }

  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={(event) => {
            if (event.target.closest("[type='checkbox']").checked) {
              changeViewList("row");
            } else {
              changeViewList("grid");
            }
          }}
          checked={viewList === "row"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ViewList;
