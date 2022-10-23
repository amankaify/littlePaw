import "./Home.css";
import { ReactComponent as BrandIcon } from "../assets/littlepaw.svg";
import { ReactComponent as ProductsIcon } from "../assets/products.svg";
import { ReactComponent as Login } from "../assets/login.svg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <nav className="navBar">
      <div>
        <BrandIcon className="brandICON" style={{ width: 150 }} />
      </div>
      <div className="menusNavigation">
        <ProductsIcon className="productsButton" title="Buy Products" onClick={() => navigate("/products")}/>
        <Login className="loginButton" title="Account" onClick={() => navigate("/account")} />
      </div>
    </nav>
  );
}
