import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon />
          <input placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <PersonIcon />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <ChatIcon />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <NotificationsIcon />
          <span className="topbarIconBadge">1</span>
        </div>
        <img src="assets/person/1.jpg" alt="Picture" className="topbarImg" />
      </div>
    </div>
  );
}
