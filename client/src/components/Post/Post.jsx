import "./Post.css";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/products/${props._id}`}>
        <div className="post-title">{props.title}</div>
        <div className="post-author">{props.author}</div>
        <div className="post-details">{props.details}</div>
        <div className="post-relevantLinks">{props.relevantLinks}</div>
      </Link>
    </>
  );
};
export default Post;
