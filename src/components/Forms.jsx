import React from "react";

const Forms = () => {
  return (
    <div>
      <input type="text" placeholder="name" />
      <select>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br />
      <select>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
      </select>
      <br />
      <input type="checkbox" />
      <label>Marital Status</label>
    </div>
  );
};

export default Forms;
