import ProductList from "../product/list";
import MyAppNav from "../nav/nav";
import Navbar from "../nav/navbar";

export default function Index() {
  return (
    <div style={{ padding: "2rem" }}>
      <MyAppNav></MyAppNav>
      <Navbar></Navbar>
      <h1>Home Page</h1>
      <p>Welcome to your React Router App.</p>

      <ProductList></ProductList>

      {/* Link to About page */}
      <a href="/about">Go to About Page ➡</a>
    </div>
  );
}