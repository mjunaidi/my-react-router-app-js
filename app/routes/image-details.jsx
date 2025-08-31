import { Link } from "react-router";
import images from '../gallery/images.json';

export default function ImageDetailsRoute({
  params,
}) {
  return (
    <div className="image-detail">
      <Link to="/gallery" viewTransition>
        Back
      </Link>
      <h1>Image Number {params.id}</h1>
      <img src={images[Number(params.id)]} />
    </div>
  );
}
