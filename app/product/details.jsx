import ProductList from '../product/list';

export default function ProductDetails({product}) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Product Details</h2>

      <div>
        <pre>
          <code>
            { JSON.stringify(product,null,2) || 'No product found' }
          </code>
        </pre>
      </div>

      {product && (
        <img src={product.image} />
      )}

      <ProductList></ProductList>

      {/* Back link to home */}
      <a href="/">⬅ Go back Home</a>
    </div>
  );
}