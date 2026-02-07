import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import { ScrollList } from "@/components/scroll-list";
import usePagePart2 from "./use-page-part-2";
import styles from "./PagePart2.module.css";
import ModalTitle from "./ui/ModalTitle";
import ModalContent from "./ui/ModalContent";

export default function PagePart2() {
  const {
    containerEle,
    questionList,
    showModal,
    activeQuestion,
    onCloseModal,
    onSelectQuestion
  } = usePagePart2();

  return (
    <div className="page-part-2">
      <Modal container={containerEle} show={showModal} onClose={onCloseModal}>
        <ModalTitle content={activeQuestion?.text} />
        <ModalContent question={activeQuestion} />
      </Modal>
      <ScrollList>
        <div className={styles["btn-group"]}>
          {questionList.map(question => (
            <Button
              key={question.id}
              onClick={() => onSelectQuestion(question)}
            >
              {question.text}
            </Button>
          ))}
        </div>
      </ScrollList>
    </div>
  );
}
