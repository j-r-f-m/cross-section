import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
/**
 * sidebar component
 * user can naivgate through projects
 * @returns
 */
function Side() {
  const handlePlusBtn = () => {
    console.log("sidebar click");
  };
  return (
    <aside id="sidebar--container">
      <div id="sidebar--heading">
        <h2 id="sidebar--h2">Projects</h2>
        <button id="sidebar--button--plus" onClick={handlePlusBtn}>
          <AddIcon id="sidebar--plus--btn" />
        </button>
      </div>

      {/* render all projects belonging to a user to the sidebar 
      get data from database first */}
      <ul id="sidebar--list">
        <li>Dummy Project</li>
      </ul>
    </aside>
  );
}

export default Side;
