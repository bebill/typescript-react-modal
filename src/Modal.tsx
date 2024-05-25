import React, { useEffect, useRef } from "react";

interface ModalProps {
  title?: string;
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  closeButton?: boolean;
  customCloseButton?: React.ReactNode;
  width?: string;
  height?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  role?: string;
  initialFocusRef?: React.RefObject<HTMLElement>;
  focusAfterClose?: boolean;
  isOpen: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onOverlayClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  content,
  className = "",
  style = {},
  closeButton = true,
  customCloseButton,
  width,
  height,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  role,
  initialFocusRef,
  focusAfterClose = true,
  isOpen,
  onClose,
  onOpen,
  onClosed,
  onEscapeKeyDown,
  onOverlayClick,
  shouldCloseOnEsc,
  shouldCloseOnOverlayClick,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      onOpen && onOpen();
      if (initialFocusRef && initialFocusRef.current) {
        initialFocusRef.current.focus();
      }
    } else {
      onClosed && onClosed();
      if (focusAfterClose && modalRef.current) {
        modalRef.current.focus();
      }
    }
  }, [isOpen, onOpen, onClosed, initialFocusRef, focusAfterClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const isModalClicked =
      modalRef.current && modalRef.current.contains(event.target as Node);
    if (!isModalClicked) {
      onOverlayClick && onOverlayClick(event);
      if (shouldCloseOnOverlayClick) {
        onClose && onClose();
      }
    }
  };

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (shouldCloseOnEsc && event.key === "Escape") {
      event.stopPropagation();
      event.preventDefault();
      onEscapeKeyDown && onEscapeKeyDown(event);
      onClose && onClose();
    }
  };

  useEffect(() => {
    if (shouldCloseOnEsc) {
      document.addEventListener("keydown", handleEscapeKeyDown);
      return () => document.removeEventListener("keydown", handleEscapeKeyDown);
    }
  }, [shouldCloseOnEsc]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className={`modal ${className}`}
        style={{ ...style, width, height }}
        role={role}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        ref={modalRef}
      >
        {closeButton && (
          <button className="modal-close-button" onClick={onClose}>
            {customCloseButton || "X"}
          </button>
        )}
        {title && (
          <h2 className="modal-title" id="modal-title">
            {title}
          </h2>
        )}
        <div className="modal-content" id="modal-description">
          {content}
        </div>
      </div>
    </div>
  );
};
