import "./Heading.scss";

export default function Heading(props) {
  const { sectionName, message } = props;
  return (
    <div className="text-center heading">
      <p>{sectionName}</p>
      <h1>{message}</h1>
    </div>
  );
}
