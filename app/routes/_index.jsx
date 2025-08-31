import ProductList from "../product/list";
import MyAppNav from "../nav/nav";
import Navbar from "../nav/navbar";

export default function Index() {
  return (
    <div style={{ padding: "2rem" }}>
      <MyAppNav></MyAppNav>
      <Navbar></Navbar>

      <div className="bg-mint-500">
        <h1>Home Page</h1>
        <p>Welcome to your React Router App.</p>

        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <h1 className="font-poppins">This headline will use Poppins.</h1>
      </div>
      
      <ProductList></ProductList>
      
      <div>
        <ul>
          <li><a href="/gallery">Go to Image Gallery ➡</a></li>
          <li><a href="/sections">Go to Page Sections ➡</a></li>
        </ul>
      </div>

      {/* Link to About page */}
      <a href="/about">Go to About Page ➡</a>
    </div>
  );
}