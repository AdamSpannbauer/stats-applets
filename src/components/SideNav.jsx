import React from 'react';
import { elastic as Menu } from 'react-burger-menu';

function SideNav() {
  return (
    <Menu>
      <a id="home" className="menu-item" href="#/home">
        <i className="fa-solid fa-house-chimney" />
        <span>Home</span>
      </a>
      <a id="normal" className="menu-item" href="#/normal">
        <i className="fa-solid fa-z" />
        <span>Normal</span>
      </a>
      <a id="studentt" className="menu-item" href="#/studentt">
        <i className="fa-solid fa-t" />
        <span>Student&apos;s T</span>
      </a>
      <a id="chisquare" className="menu-item" href="#/chisquare">
        <i className="fa-solid fa-table-cells" />
        <span>Chi-Square</span>
      </a>
    </Menu>
  );
}

export default SideNav;
