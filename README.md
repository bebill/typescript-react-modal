# Modal Component for React (made with Typescript)

## Installation

To install, you can use [npm](https://npmjs.org/) :

    $ npm install bld-typescript-react-modal

## Description

The Modal component is a simple and customizable modal for React applications. It allows you to display content modally on your web page, with the ability to customize the title, content, size, etc.

## Properties

| Name                      | Type            | Description                                                                              |
| ------------------------- | --------------- | ---------------------------------------------------------------------------------------- |
| title                     | string          | The title of the modal                                                                   |
| content                   | React.ReactNode | The content to be displayed inside the modal                                             |
| className                 | string          | Additional CSS class(es) to apply to the modal container                                 |
| style                     | object          | Inline styles to apply to the modal container                                            |
| closeButton               | bool            | Indicates whether to display the close button                                            |
| customCloseButton         | node            | Custom close button content                                                              |
| width                     | string          | The width of the modal                                                                   |
| height                    | string          | The height of the modal                                                                  |
| ariaLabel                 | string          | ARIA label for accessibility                                                             |
| ariaLabelledBy            | string          | ID of the element that labels the modal                                                  |
| ariaDescribedBy           | string          | ID of the element that describes the modal                                               |
| ariaHideApp               | bool            | Indicates whether to hide the app content from screen readers when the modal is open     |
| role                      | string          | ARIA role for accessibility                                                              |
| initialFocusRef           | object          | Reference to the element that should receive focus when the modal opens                  |
| focusAfterClose           | bool            | Indicates whether focus should return to the modal trigger after the modal closes        |
| isOpen                    | bool            | Indicates whether the modal is open or closed                                            |
| onClose                   | func            | Function to handle the close event                                                       |
| onOpen                    | func            | Function to be called when the modal opens                                               |
| onClosed                  | func            | Function to be called when the modal closes                                              |
| onEscapeKeyDown           | func            | Function to handle the Escape key press event                                            |
| onOverlayClick            | func            | Function to handle clicks on the overlay (outside the modal)                             |
| shouldCloseOnEsc          | bool            | Indicates whether the modal should close when the Escape key is pressed                  |
| shouldCloseOnOverlayClick | bool            | Indicates whether the modal should close when the overlay (outside the modal) is clicked |

## Example Usage

```jsx
import React, { useState, useRef } from "react";
import { Modal } from "bld-react-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="My Modal Title"
        content={<p>This is the modal content</p>}
        className="custom-modal-class"
        style={{ backgroundColor: "lightblue" }}
        closeButton
        customCloseButton={<span>&times;</span>}
        width="600px"
        height="300px"
        initialFocusRef={modalFocusRef}
        ariaLabel="Modal label"
        ariaLabelledBy="modal-title"
        ariaDescribedBy="modal-description"
        ariaHideApp={false}
        role="dialog"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        focusAfterClose
      />
    </div>
  );
}

export default App;
```
