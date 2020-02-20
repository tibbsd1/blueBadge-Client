import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from "reactstrap";
import Signup from "./Signup";

const ModalExample = props => {
  /*Make useState to hold 'true' or 'false' for isOpen property of modals.*/
  const [modal, setModal] = useState(false);

  const toggle = () =>
    setModal(
      !modal
    ); /*Changes modal value from false(hidden) to true(visible)*/

  return (
    <div>
      <Button color="success" onClick={toggle} size="lg">
        Become A Member
      </Button>

      <Modal
        fade={true}
        isOpen /*takes true or false as value*/={modal}
        /*modal is initially set to false becausue of useState*/

        size="lg"
        toggle={toggle}
      >
        <ModalHeader className="d-block text-center">
          Sign Up
        </ModalHeader>
        <ModalBody>
          <Signup updateToken={props.updateToken} toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalExample;
