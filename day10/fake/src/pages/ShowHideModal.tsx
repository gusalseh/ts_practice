import { useCallback } from "react";
import { Title, Subtitle } from "../components";
import { Button, Modal, ModalContent, ModalAction } from "../theme/daisyui";
import { useToggle } from "../hooks";
import * as D from "../data";

export default function ShowHideModal() {
  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={() => {}}>
          open modal
        </Button>
      </div>
      <Modal open={undefined}>
        <ModalContent
          closeIconClassName="btn-primary btn-outline"
          onCloseIconClicked={() => {}}
        >
          <Subtitle>Modal</Subtitle>
          <p>{D.randomParagraphs()}</p>
          <ModalAction>
            <Button className="btn-primary" onClick={() => {}}>
              Accept
            </Button>
            <Button onClick={() => {}}>Close</Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  );
}
