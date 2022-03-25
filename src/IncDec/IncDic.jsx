import React from "react";
import "./Style.css";
import { useSelector, useDispatch } from "react-redux";
import { incre, decre } from "../Action/Action";
const Inc = () => {
  const mystate = useSelector((state) => state.changeNumber);
  const dispath = useDispatch();
  return (
    <>
      <div className="main-div">
        <h1>Increement/Decreement Counter</h1>
        <p>Using React and Redux</p>
        <div className="s-div">
          <a title="Decrement" onClick={() => dispath(decre(5))}>
            -
          </a>
          <input type="text" value={mystate} />
          <a title="Increment" onClick={() => dispath(incre(5))}>
            +
          </a>
        </div>
      </div>
    </>
  );
};

export default Inc;
