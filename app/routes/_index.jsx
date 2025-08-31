import ProductList from "../product/list";
import MyAppNav from "../nav/nav";
import Navbar from "../nav/navbar";

export default function Index() {
  return (
    <div style={{ padding: "2rem" }}>
      <MyAppNav></MyAppNav>
      <Navbar></Navbar>

      <div>
        <h1>Home Page</h1>
        <p>Welcome to your React Router App.</p>
      </div>
      
      <ProductList></ProductList>
      
      <div>
        <a href="/gallery">Go to Image Gallery ➡</a>
      </div>

      {/* Link to About page */}
      <a href="/about">Go to About Page ➡</a>
    </div>
  );
}