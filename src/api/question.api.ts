import QUESTIONS from "@/constant/questions"
import type { IQuestion } from "@/types/question"

/**
 * MOCK fetch question list from server
 * @returns question list
 */
export function fetchQuestionList() {
  return new Promise<IQuestion[]>((resolve) => {
    return resolve(QUESTIONS)
  })
}