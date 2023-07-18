import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import OrdersScreen from "./screens/OrdersScreen";
import AdminScreen from "./screens/AdminScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        
          <Route path="/" exact component={Homescreen } />
          <Route path="/cart" exact component={CartScreen } />
          <Route path="/register" exact component={RegisterScreen } />
          <Route path="/login" exact component={LoginScreen } />
          <Route path="/orders" exact component={OrdersScreen } />
          <Route path="/admin" component={AdminScreen } />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
