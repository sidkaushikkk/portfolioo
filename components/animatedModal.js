import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";

export function AnimatedModalDemo() {
  return (
    <Modal>
      <ModalTrigger className="rounded-lg bg-black px-4 py-2 text-white">
        Open Modal
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h2>Modal Title</h2>
        </ModalContent>
        <ModalFooter>
          <button className="rounded bg-purple-600 px-4 py-2 text-white">Close</button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
