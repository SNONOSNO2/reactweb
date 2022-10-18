import React from "react";

const Edit = ()=>{
    return <div>
        <h1>备忘录</h1>
        <input type='text'/>
        <p>日期：</p>
        <input type='date'/>
        <p>时间：</p>
        <input type='time'/>
        <button className="add">新增</button>
    </div>
}

export default Edit