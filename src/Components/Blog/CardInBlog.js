import "./CardinBlog.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BlogDetails from "./BlogDetails";
import { useNavigate } from "react-router-dom";

function CardInBlog(props) {
  const navigate = useNavigate();
  return (
    <>
      {props.data.map((data, id) => {
        return (
          <Card
            style={{ width: "18rem" }}
            className="bootstrapCard"
            onClick={() => {
              navigate(`/${data.name}`, { state: data });
            }}
          >
            <Card.Img
              variant="top"
              src={
                "https://st4.depositphotos.com/22162388/23954/i/600/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg"
              }
            />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              {/* <Button variant="primary">{data.price}</Button> */}
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default CardInBlog;
