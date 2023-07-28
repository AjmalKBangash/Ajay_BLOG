import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Husnain from "../Images/Husnain.JPG";

function CarouselBlog() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 imgInCarousel"
          src={
            "https://st4.depositphotos.com/22162388/23954/i/600/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg"
          }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 imgInCarousel"
          src={
            "https://st2.depositphotos.com/35925452/47516/i/450/depositphotos_475165626-stock-photo-a-programmer-is-typing-a.jpg"
          }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgInCarousel"
          src={
            "https://st3.depositphotos.com/2673929/33928/i/450/depositphotos_339287092-stock-photo-cyber-security-and-global-data.jpg"
          }
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBlog;
