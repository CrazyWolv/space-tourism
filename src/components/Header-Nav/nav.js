import { NavLink } from "react-router-dom";

// # styles & images
import "./style.scss";

const Navbar = ({closeMenu}) => {
  
  const handleChange = () => {
    closeMenu(false);
  }

    return(
        <div className="navigation--links-container">
                            <nav className="navigation--links">
                                        <NavLink
                                            to="/home"
                                            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                            children={({ isActive }) => {
                                                const activeBar = isActive ? "active-bar" : "unactive";
                                                return (
                                                  <>
                                                    <div className="nav-link-label"><span className="strongNumber">00</span> Home</div> <div className={activeBar} />
                                                  </>
                                                );
                                              }}
                                              onClick={(event) => {handleChange(event)}}
                                        />
                                        <NavLink
                                            to="/destinations"
                                            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                            children={({ isActive }) => {
                                                const activeBar = isActive ? "active-bar" : "unactive";
                                                return (
                                                  <>
                                                    <div className="nav-link-label"><span className="strongNumber">01</span> Destination</div> <div className={activeBar} />
                                                  </>
                                                );
                                              }}
                                              onClick={(event) => {handleChange(event)}}
                                        />
                                        <NavLink
                                            to="/crew"
                                            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                            children={({ isActive }) => {
                                                const activeBar = isActive ? "active-bar" : "unactive";
                                                return (
                                                    <>
                                                        <div className="nav-link-label"><span className="strongNumber">02</span> Crew</div> <div className={activeBar} />
                                                    </>
                                                );
                                              }}
                                              onClick={(event) => {handleChange(event)}}
                                        />
                                        <NavLink
                                            to="/technologies"
                                            className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                            children={({ isActive }) => {
                                                const activeBar = isActive ? "active-bar" : "unactive";
                                                return (
                                                  <>
                                                    <div className="nav-link-label"><span className="strongNumber">03</span> Technology</div> <div className={activeBar} />
                                                  </>
                                                );
                                              }}
                                              onClick={(event) => {handleChange(event)}}
                                        />
                            </nav>
                        </div>
    )
}

//  Navbar.propTypes = {
//    open: PropTypes.element,
//    isOpen: PropTypes.element,
// };

export default Navbar;