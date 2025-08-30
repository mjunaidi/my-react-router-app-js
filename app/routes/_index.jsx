import ProductList from "../product/list";

export default function Index() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home Page</h1>
      <p>Welcome to your React Router App.</p>

      <ProductList></ProductList>

      {/* Link to About page */}
      <a href="/about">Go to About Page ➡</a>
    </div>
  );
}