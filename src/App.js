import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Component/Products";
import UserLogin from "./Component/UserLogin";
import Login from "./Component/Login";
import Cart from "./Component/Cart";
import ItemViewPage from "./Component/Todo/ItemViewPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/createaccount" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/itemview" element={<ItemViewPage />} /> */}
          <Route path="/item/:id" element={<ItemViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
