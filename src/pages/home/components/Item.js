import React from "react";

const Item = ({ id, node, date, time, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id != id);
    });
  }
  return (
    <div className="item">
      <div>
        <p>{node}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        删除
      </button>
    </div>
  );
};

export default Item;
