import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as CgIcon from "react-icons/cg";
import * as MdIcon from "react-icons/md";
import * as GiIcon from "react-icons/gi";
import * as TbIcon from "react-icons/tb";
import "./Sidebar.css";


function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navBar">
        <Link to="#" className="menu_bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="sideUserProfile">A</div>
          {/* <Link to="#" className="menu-bars" onClick={hideSidebar}>
            <div className="bar1"></div>
            <div className="bar2"></div>
          </Link> */}
          <button className="sideButtons">Inbox <CgIcon.CgNotes /></button>
          <button className="sideButtons">Activity <MdIcon.MdOutlinePendingActions /></button>
          <button className="sideButtons">Schedule<MdIcon.MdOutlineSchedule /></button>
          <labels className="sideLabels"></labels>
          <button className="sideButtons">Dogs<MdIcon.MdPets/></button>
          <button className="sideButtons">Cats<GiIcon.GiCat /></button>
          <button className="sideButtons">Fish<TbIcon.TbFish /></button> 
          <button className="sideButtons">My Orders<TbIcon.TbBooks /></button>
          <button className="sideButtons">My Cart<TbIcon.TbShoppingCart /></button>
          <button className="sideButtons">Wishlist<TbIcon.TbBookmarks /></button>
          <labels className="sideLabels"></labels>
          <button className="sideButtons">Logout<TbIcon.TbLogout /></button>
      
      </nav>
    </>
  );
}

export default SideBar;
