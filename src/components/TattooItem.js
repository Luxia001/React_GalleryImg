import "./TattooItem.css";

export default function TattooItem(props) {
  const { tattoo, onTattooClick } = props;
  return (
    <div className="tatto-item">
      <img
        src={tattoo.thumbnaiUrl}
        onClick={() => {
          onTattooClick(tattoo);
        }}
        alt=""
      />
      <h4>{tattoo.title}</h4>
    </div>
  );
}
