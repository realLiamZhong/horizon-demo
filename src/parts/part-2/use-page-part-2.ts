import { useEffect, useState } from "react";
import { fetchQuestionList } from "@/api/question.api";
import type { IQuestion } from "@/types/question";

export default function usePagePart2() {
  const [containerEle, setContainerEle] = useState<HTMLElement>();
  const [questionList, setQuestionList] = useState<IQuestion[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<IQuestion | null>(null);

  function onSelectQuestion(question: IQuestion) {
    setActiveQuestion(question);
    setShowModal(true);
  }

  function onCloseModal() {
    setShowModal(false);
    setActiveQuestion(null);
  }

  useEffect(() => {
    fetchQuestionList().then(res => {
      setQuestionList(res);
    });

    setTimeout(() => {
      setContainerEle(() => document.getElementById("page-content") || undefined);
    }, 0);
  }, []);

  return { containerEle, questionList, showModal, activeQuestion, onCloseModal, onSelectQuestion };
}
