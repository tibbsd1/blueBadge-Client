import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";

const UploadTrack = props => {
  /*Make useState to hold 'true' or 'false' for isOpen property of modals.*/
  const [username, setUsername] = useState("username");
  const [trackTitle, setTrackTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [file, setFile] = useState("");
//   useEffect(() => {
//     uploadSubmit();
//   }, []);

  let uploadSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3005/profile/myprofile", {
      method: "POST",
      body: JSON.stringify({
        profile: {
          tracktitle: trackTitle,
          releaseyear: releaseYear,
          trackurl: file
        }
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(newUpload => {
        console.log(newUpload);
      });

    //   const toggle = () =>
    //     setModal(
    //       !modal
    //     ); /*Changes modal value from false(hidden) to true(visible)*/
    }
    return (
      <div className="Feed-home">
        <h1>POST TRACK PAGE</h1>

        <Form>
        <FormGroup>
          <Label
            className="d-block text-center font-weight-bold"
            htmlFor="Track Name"><h5>Track Title</h5>
          </Label>
          <Input
            size="lg"
            onChange={e => {
              setTrackTitle(e.target.value);
            //   console.log(username);
        }}
            name="TrackName"
            value={trackTitle}
            />
            <Label
            className="d-block text-center font-weight-bold"
            htmlFor="Track Name"><h5>Release Year</h5>
          </Label>
          <Input
            size="lg"
            onChange={e => {
              setReleaseYear(e.target.value);
            //   console.log(username);
        }}
            name="year"
            value={releaseYear}
            />
            
          <Label for="exampleUrl" className="d-block text-center font-weight-bold"><h5>Upload Track File</h5></Label>
        <Input
          type="file"
          name="file"
          id="examplefile"
            size="lg"
            onChange={e => {
              setFile(e.target.value);
            //   console.log(username);
        }}
            name="file"
            value={file}
            />
        </FormGroup>
      </Form>
      <Button color="danger" onClick={uploadSubmit} size="lg">
        Upload!
            
      </Button>
      </div>
    );
};
export default UploadTrack;
