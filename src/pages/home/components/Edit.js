import React from "react";
import { useState } from "react";

const Edit = ({ add }) => {
  const [node, setNode] = useState("");
  function noteChange(e) {
    setNode(e.target.value);
  }
  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }
  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  console.log(node, date, time);

  function addItem() {
    add(function (prevData) {
      return [
        ...prevData,
        {
          node,
          date,
          time,
        },
      ];
    });
  }
  return (
    <div>
      <h1>备忘录</h1>
      <p>记事：</p>
      <input type="text" value={node} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>时间：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
