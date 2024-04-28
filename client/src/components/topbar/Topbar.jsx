import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { logoutCall } from "../../apiCalls";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // add this state
  const [apiUsers, setApiUsers] = useState([])
  const [searchItem, setSearchItem] = useState('')
  // set the initial state of filteredUsers to an empty array
  const [filteredUsers, setFilteredUsers] = useState([])
  // initialize the loading state as true
  const [loading, setLoading] = useState(true)
  // initialize the error state as null
  const [error, setError] = useState(null)

  const { isFetching, dispatch } = useContext(AuthContext);
  
  const getUsers = async () => {
    try {
      const userlist = await axios.get(`/users/all`);
      // console.log("User list: ", userlist.data);
      setApiUsers(userlist.data);
      setFilteredUsers(userlist.data);
      setLoading(false);

    } catch(err) {
      console.log(err)
        // update the error state
      setError(err)
    }
  }

  const history = useHistory(); // Hook to access the browser history

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Redirect to search URL with the search value
      history.push(`/profile/${encodeURIComponent(searchItem)}`);
    }
  };

// fetch the users 
  useEffect(() => {
    getUsers();
  }, []);


  const handleLogoutClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    logoutCall(
      dispatch
    );
  };

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    // filter the items using the apiUsers state
    const filteredItems = apiUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
      // console.log("User name for search: ", user.username)
    );

    setFilteredUsers(filteredItems);


  }


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Valanty</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            list="searchbar"
            id="searchbarid"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}

            placeholder="Search for friend, post or video"
            className="searchInput"
          />
          <datalist id="searchbar">
            {/* if the data is loading, show a proper message */}
          {loading && <option value="Loading...." />}
          {/* if there's an error, show a proper message */}
          {error && <option value="There was an error loading the users" />}
          {/* if it finished loading, render the items */}
          {!loading && !error && filteredUsers.length === 0
            ? <option value="No users found" />
            : 
            <>
              {filteredUsers.map(user => <option key={user._id} value={user.username} />)}
              {/* // <option value="Users found" /> */}
            </>
      
          }
          </datalist>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">16</span>
          </div>
        </div>
        <div className="topbarIconItem">
            <ExitToAppIcon 
              onClick={handleLogoutClick}
            />
          </div>
        
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}

