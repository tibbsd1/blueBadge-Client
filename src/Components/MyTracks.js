import React, { useState, useEffect } from "react";
import { Button, Card, CardHeader, CardFooter,CardBody, CardText,CardSubtitle, } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";

const MyTracks = props => {
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    getMyTracks();
  }, []);

  const getMyTracks = () => {
    fetch("http://localhost:3005/profile/myuploads", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(res => {
        setSongs(res);
      });
  };


  
  const mySongs = () => {
    // let fileUrl = uploads.trackurl.split('/')
    return songs.map((uploads, index) => {
        return (
            <Card className="Cards">
      <CardHeader className="card-title">{uploads.username}</CardHeader>

      <CardBody>
        <CardText className="track-title">{uploads.tracktitle}</CardText>
        <CardSubtitle className="text-muted">
          {uploads.releaseyear}
        </CardSubtitle>
        
        <Button onClick = {() => {
          let fileUrl = uploads.trackurl.split("\\");
      
          playButton(fileUrl[2]); console.log(fileUrl[2])}} className="play-btn" color="danger">
          Play
        </Button>
        
      </CardBody>
    </Card>
  );
});
};
function playButton (fileUrl) {
  let  playTrack = new Audio(`./${fileUrl}`)
    playTrack.play()
}
return(
    <div>
        {mySongs()}
    </div>
)
};

export default MyTracks
