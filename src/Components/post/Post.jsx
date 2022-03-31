import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/2.jpg"
              alt="profile"
            />
            <span className="postUsername">Anish</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Eren is amazing</span>
          <img className="postImg" src="assets/post/1.png" alt="AOT" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.jpg" alt="" />
            <span className="postLikeCounter">31 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">Sarak comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
