import React from "react";
import { Nav, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import HomeUsers from "./HomeUsers";

const Home = () => {
  return (
    <div role="main">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slider/image1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Innovation</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Nav.Link href="/gallery">
              <Button variant="primary">Brose Gallery</Button>{" "}
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slider/image2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Imagination</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Nav.Link href="/gallery">
              <Button variant="primary">Browse Gallery</Button>{" "}
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/slider/image3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Creation</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Nav.Link href="/gallery">
              <Button variant="primary">Browse Gallery</Button>{" "}
            </Nav.Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container marketing">
        <HomeUsers />

        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              First featurette heading.{" "}
              <span className="text-muted">It’ll blow your mind.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="/assets/images/part1.jpg"
              style={{ width: 500, height: 500 }}
              alt="Third slide"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Oh yeah, it’s that good.{" "}
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="/assets/images/part2.jpg"
              style={{ width: 500, height: 500 }}
              alt="Third slide"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              And lastly, this one.{" "}
              <span className="text-muted">Checkmate.</span>
            </h2>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="/assets/images/part3.jpg"
              style={{ width: 500, height: 500 }}
              alt="Third slide"
            />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>
      <footer className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2017-2020 Company, Inc. &middot; <a href="#">Privacy</a>{" "}
          &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
