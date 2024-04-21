import "./loader.css";
interface LoaderProps {
  color: string;
}

function Loader({ color }: LoaderProps) {
  console.log(color);
  return (
    <div className="loader-Container">
      <div className="loader-container">
        <div className="loader">
          <div className="inner one" style={{ borderBottomColor: color }}></div>
          <div className="inner two" style={{ borderRightColor: color }}></div>
          <div className="inner three" style={{ borderTopColor: color }}></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
