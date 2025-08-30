import products from '../product/products.json';
import ProductDetails from '../product/details';

function getProductById(id) {
  return products.find(product => product.id === id);
}

export async function loader({ params }) {
  //let product = await getProduct(params.pid);
  const product = getProductById(params.id);
  return { product };
}

export default function Product({ loaderData }) {
  return <ProductDetails product={loaderData.product} />
}
