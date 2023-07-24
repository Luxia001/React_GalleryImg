import "./TattooPost.css";

export default function TattooPost(props) {
  const {tattoo, onBgClick} = props

  return (
    <div className="tattoo-post">
      <div className="tattoo-post-bg" onClick={onBgClick} />
      <div className="tattoo-post-content">
        <img src={tattoo.thumbnaiUrl} alt="" />
        <h4>{tattoo.title}</h4>
      </div>
    </div>
  );
}
