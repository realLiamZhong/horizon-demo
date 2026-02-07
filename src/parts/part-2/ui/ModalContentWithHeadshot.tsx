import { ScrollArea } from "@base-ui/react";
import styles from "../PagePart2.module.css";

interface IProps {
  headshotSrc?: string;
  desc?: string;
  content: string;
}

export default function ModalContentWithHeadshot({
  headshotSrc,
  desc,
  content
}: IProps) {
  return (
    <div className={styles["modal-headshot-content-wrapper"]}>
      <div className={styles["modal-headshot-content"]}>
        {headshotSrc && (
          <img className={styles["modal-headshot"]} src={headshotSrc} />
        )}
        {desc && (
          <div className={styles["modal-headshot-desc"]}>
            <span>{desc}</span>
          </div>
        )}
      </div>
      <ScrollArea.Root className={styles["modal-content-wrapper"]}>
        <ScrollArea.Viewport className={styles["modal-content-viewport"]}>
          <ScrollArea.Content className={styles["modal-content"]}>
            <p>{content}</p>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className={styles["modal-content-scrollbar"]}>
          <ScrollArea.Thumb className={styles["modal-content-thumb"]} />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
