import type { IQuestion } from "@/types/question";
import styles from "../PagePart2.module.css";
import ModalVideo from "./ModalVideo";
import ModalSwiperWithStep from "../ModalSwiperWithStep";

export default function ModalContent({
  question
}: {
  question: IQuestion | null;
}) {
  if (!question) return null;
  if (question.format === "video") {
    return <ModalVideo src={question.url} desc={question.desc} />;
  }
  if (question.format === "seg") {
    return <ModalSwiperWithStep params={question.params} />;
  }
  return <div className={styles["modal-content"]}></div>;
}
