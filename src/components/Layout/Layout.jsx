import React from "react";
import NavbarTop from "../Navbar/NavbarTop";

const Layout = ({ user, children, setUser, handleLogout}) => {
  //console.log(children);
  return (
    <div>
      <NavbarTop user={user} setUser={setUser} handleLogout={handleLogout}/>
      {children}
    </div>
  );
};
export default Layout;
