import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./pages/LandingHome";
import NewItem from "./pages/NewItem";
import Layout from "./components/Layout/Layout";
import ItemEdit from "./pages/ItemEdit";
// import Login from "./pages/Login";
import Item from "./components/Item/Item";
import userToken from "./utils/userToken";
import LoginTest from "./pages/LoginTest";
import SignupTest from "./pages/SignupTest";


function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({
    user: userToken.getUser()
  });

  useEffect(() => {
    fetch("http://localhost:8000/item/")
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, []);

  const handleSignupOrLogin = () => {
      setUser({user: userToken.getUser()})
  }

  const addToItem = (item) => {
    setItems([...items, item]);
  };
  const updateItemState = (id) => {
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <Layout user={user} setUser={setUser}>
      <Routes>
       <Route
          path="/"
          element={
            <LandingHome items={items} updateItemState={updateItemState} user={user} />
          }
        />
        <Route path="/new-item" element={<NewItem addItem={addToItem} />} />
        <Route
          path="/item/edit/:id/"
          element={<ItemEdit setItems={setItems} />}
        />
        <Route path="/item/:id" element={<Item items={items} />} />
        <Route path="/login" element={<LoginTest handleSignupOrLogin={handleSignupOrLogin} setUser={setUser} />} />
        <Route path="/signup" element={<SignupTest handleSignupOrLogin={handleSignupOrLogin}/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
