import "./Heading.scss";

export default function Heading(props) {
  const { sectionName, message } = props;
  return (
    <div className="text-center heading">
      <p>{sectionName}</p>
      <h3>{message}</h3>
    </div>
  );
}
