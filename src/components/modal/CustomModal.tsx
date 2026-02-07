import { Dialog } from "@base-ui/react";
import styles from "./CustomModal.module.css";
import { RiCloseCircleLine } from "@remixicon/react";
import type { ReactNode } from "react";

interface ICustomModalProps {
  children?: ReactNode;
  container?: HTMLElement;
  show: boolean;
  onClose: () => void;
}

export default function CustomModal({ children, container, show, onClose }: ICustomModalProps) {
  return (
    <Dialog.Root
      open={show}
      onOpenChange={open => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal className={styles.portal} container={container}>
        <Dialog.Backdrop className={styles.backdrop} />
        <Dialog.Popup className={styles.Popup}>
          <div className={styles["close-line"]}>
            <Dialog.Close className={styles["close-btn"]}>
              <RiCloseCircleLine />
            </Dialog.Close>
          </div>
          <div>{children}</div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
