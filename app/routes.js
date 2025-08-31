import { index, route } from "@react-router/dev/routes";

export default [
  //index("routes/home.jsx"),
  index("routes/_index.jsx"),
  route("about", "routes/about.jsx"),
  route("product/:id", "routes/product.jsx"),
  route("gallery", "routes/image-gallery.jsx"),
  route("image/:id", "routes/image-details.jsx"),
  route("sections", "routes/sections.jsx"),
];
