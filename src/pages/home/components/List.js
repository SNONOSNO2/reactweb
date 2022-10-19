import React from "react";
import Item from "./Item";
const arr = ["scs", 2, 3];
const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, node, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            node={node}
            date={date}
            time={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
