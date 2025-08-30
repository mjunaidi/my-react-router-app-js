import { index, route } from "@react-router/dev/routes";

export default [
  //index("routes/home.jsx"),
  index("routes/_index.jsx"),
  route("about", "routes/about.jsx"),
  route("product/:id", "routes/product.jsx"),
];
