import { Button } from "@/components/button";
import { Modal } from "@/components/modal";
import usePagePart2 from "./use-page-part-2";
import styles from "./PagePart2.module.css";
import ModalTitle from "./ui/ModalTitle";
import ModalContent from "./ui/ModalContent";
import { ScrollArea } from "@base-ui/react";

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
      <ScrollArea.Root className={styles["question-list-wrapper"]}>
        <ScrollArea.Viewport className={styles["question-list-viewport"]}>
          <ScrollArea.Content className={styles["question-list"]}>
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
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className={styles["question-list-track"]}>
          <ScrollArea.Thumb className={styles["question-list-thumb"]} />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      {/* <ScrollList>
        <></>
      </ScrollList> */}
    </div>
  );
}
