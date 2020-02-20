import React, { useState, useEffect } from "react";
import "../App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Container,
  Col,
  CardFooter,
  CardHeader
} from "reactstrap";
import FeedNavi from "./FeedNavi";
import { BrowserRouter as Router } from "react-router-dom";
function Feed(props) {
  const [upList, setUpList] = useState([]);
  useEffect(() => {
    gatherFeed();
  }, []);
  const gatherFeed = () => {
    fetch("http://localhost:3005/profile/feed", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(res => {
        setUpList(res);
      });
  };
  function playButton(fileUrl) {
    let playTrack = new Audio(`./${fileUrl}`);
    playTrack.play();
  }
  function pauseButton(fileUrl) {
    let pauseTrack = new Audio(`./${fileUrl}`);
    pauseTrack.pause();
  }
  let feedTracks = () => {
    return upList.map((uploads, index) => {
      console.log(uploads);
      return (
        <Card className="Cards">
          <CardHeader className="card-title">{uploads.username}</CardHeader>

          <CardBody>
            <CardText className="track-title">{uploads.tracktitle}</CardText>
            <CardSubtitle className="text-muted">
              {uploads.releaseyear}
            </CardSubtitle>
            {/* <CardText className="track-title">{uploads.trackurl}</CardText> */}
            <Button
              onClick={() => {
                let fileUrl = uploads.trackurl.split("\\");

                playButton(fileUrl[2]);
                console.log(fileUrl[2]);
              }}
              className="play-btn"
              color="danger"
            >
              Play
            </Button>
            <Button
              className="pause-btn"
              color="info"
              onClick={() => {
                //IF STATEMENT FOR PAUSE
                let fileUrl = uploads.trackurl.split("\\");
                pauseButton(fileUrl);
              }}
            >
              Pause
            </Button>
          </CardBody>
        </Card>
      );
    });
  };

  return (
    <div className="Feed-home">
      <div className="feednav-btns">
        <Row className="row">
          <Col md="4"></Col>
          <Col md="6">
            <h1 className="Feed-header">Browse</h1>
            <p>View all uploads from artists!</p>
            {feedTracks()}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Feed;
