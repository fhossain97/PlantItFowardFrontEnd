import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./pages/LandingHome.jsx";
import NewItem from "./pages/NewItem";
import Layout from "./components/Layout/Layout";
import ItemEdit from "./pages/ItemEdit";
import ItemView from "./pages/ItemView";
import userService from "./utils/userService";
import LoginTest from "./pages/Login";
import SignupTest from "./pages/Signup";
import bootstrap from "bootstrap";
import FindFlorist from "./pages/FindFlorist.jsx";
import Chat from "./pages/Chat"
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Signup from "./pages/Signup";

function App() {

  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});


  useEffect(() => {
    fetch(process.env.REACT_APP_PIF_API_URL)
      .then(res => res.json())
      .then(items => setItems(items));
  }, []);

  const handleSignupOrLogin = () => {
      setUser(userService.getUser())
  }

  const handleLogout = () => {
      userService.logout();
      setUser(null)
  }

  const addItem = (item) => {
    setItems([...items, item]);
  };
  

  const updateItemState = (id) => {
    setItems(items.filter((item) => item._id !== id));
  };

  

  return (
    
    <Layout user={user} setUser={setUser} handleLogout={handleLogout}>
      {/* <SearchBar placeholder="Search for Plants..." data={items}/> */}
      <Routes>
       <Route
          path="/"
          element={
            <LandingHome items={items} updateItemState={updateItemState} user={user} />
          }
        />
        <Route path="/new-item" element={<NewItem addItem={addItem} />} />
        <Route
          path="/item/edit/:id/"
          element={<ItemEdit setItems={setItems} />}
        />
        <Route path="/item/:id" element={<ItemView updateItemState={updateItemState} items={items} />} />
        <Route path="/login" element={<LoginTest handleSignupOrLogin={handleSignupOrLogin} setUser={setUser} />} />
        <Route path="/signup" element={<SignupTest handleSignupOrLogin={handleSignupOrLogin}/>}/>
      <Route path="/findflorist" element={<FindFlorist />}/>
      <Route path="/chat" element={<Chat />} />
      </Routes>
    </Layout>
  );
}

export default App;
