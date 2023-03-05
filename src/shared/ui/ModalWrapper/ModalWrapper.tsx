import { FC, ReactNode, useEffect, useState } from "react"
import { classNames as cn } from "shared/lib/classNames"
import Modal from "react-modal"
import { Button } from "../Button/Button"
import { ModalTitle } from "../Text"
import IconCloseNew from "../../assets/icons/icon--close.svg"
import { ModalWrapperSize } from "shared/ui/types"
import { BtnVariant } from "shared/ui/Button/types"

// todo: подтянуть стили

export interface ModalWrapperProps {
  children?: ReactNode;
  isOpen: boolean;

  // не рендерим до нажатия на isOpen
  isLazy?: boolean;
  onClose?: () => void;
  size?: ModalWrapperSize;
  title: string;
}

export const ModalWrapper: FC<ModalWrapperProps> = (props) => {
  const {
    isOpen,
    onClose,
    children,
    size = "base",
    title,
    isLazy,
  } = props

  // up ts
  const ModalWrapperMods: Record<string, boolean> = {
    [`modal-wrapper--size-${size}`]: Boolean(size),
    "modal-wrapper--no-close": typeof onClose !== "function",
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) setIsMounted(true)
  }, [isOpen])

  if (!isMounted && isLazy) return null

  return (
    <Modal
      className={cn("modal-wrapper", ModalWrapperMods, ["app__modal"])}
      shouldCloseOnOverlayClick={true}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onClose}
      bodyOpenClassName={"modal-body"}
      overlayClassName={"modal-overlay"}
      preventScroll={true}
    >
      <div
        className={cn("modal-wrapper__content", {
          [`modal-wrapper__content--size-${size}`]: size,
        })}
      >
        <div className="modal-wrapper__header">
          <div className="modal-wrapper__title">
            <ModalTitle weight="semibold">{title}</ModalTitle>
          </div>
          <div className="modal-wrapper__button-close">
            <Button variant={BtnVariant.ICON} onClick={onClose}>
              <IconCloseNew className="icon icon--close" />
            </Button>
          </div>
        </div>

        <div className="modal-wrapper__body">{children}</div>
      </div>
    </Modal>
  )
}
