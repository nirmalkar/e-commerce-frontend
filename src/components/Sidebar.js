import React from "react";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Shopping Category</h3>
      <button className="sidebar-close-button">X</button>
      <ul>
        <li>
          <a href="/shirts">Shirts</a>
        </li>
        <li>
          <a href="/shirts">Shirts</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
