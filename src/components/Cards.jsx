import "./Cards.css";

const Card = (props) => (
  <div
    className={"card-container"}
    style={{ width: "18rem", height: "fit-content" }}
  >
    <div className={"card-body"}>{props.children}</div>
  </div>
);

const CardImg = ({ src }) => (
  <div className={"img-wrap"}>
    <img className={"card-img"} src={src} alt={"card-img"} />
  </div>
);

const CardTitle = ({ title }) => <h5 className="card-title">{title}</h5>;

const CardText = ({ text }) => (
  <div className={"card-text"}>
    <p>{text}</p>
  </div>
);

const CardLink = ({ link, text }) => (
  <a className={"btn"} href={link}>
    {text}
  </a>
);

export default function Cards() {
  return (
    <div className={"cards"}>
      <Card>
        <CardImg
          src={
            "https://imgholder.ru/300x150/8493a8/adb9ca&text=Image+cap&font=kelson"
          }
        />
        <CardTitle title={"Card title"} />
        <CardText
          text={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <CardLink link={"/#"} text={"Go somewhere"} />
      </Card>

      <Card>
        <CardTitle title={"Card title"} />
        <CardText
          text={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
        />
        <CardLink link={"/#"} text={"Go somewhere"} />
      </Card>
    </div>
  );
}
