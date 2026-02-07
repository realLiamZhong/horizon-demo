import styles from "../PagePart2.module.css";

export default function ModalTitle({ content }: { content?: string }) {
  return (
    <div className={styles["modal-title"]}>
      <span>{content}</span>
    </div>
  );
}
