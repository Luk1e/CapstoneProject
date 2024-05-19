export interface QuestionProps {
  question: string;
  answers: string[];
  indexOfCorrectAnswer: number;
}

interface QuizProps {
  header: string;
  href: string;
  questions: QuestionProps[];
}

const geometryAndAlgebra: QuizProps = {
  header: " გეომეტრია და ალგებრა",
  href: "#this",
  questions: [
    {
      question: "1. რა არის აგრებრა",
      answers: [
        "ა. სახლი მაგიდა სკამი ვაშლი",
        "ბ. არწივი მაგიდა სკამი ვაშლი",
        "გ. ქორი მაგიდა სკამი ვაშლი",
        "დ. კომპიუტერული ტექნიკა და მაგიდა სკამი ვაშლი",
      ],
      indexOfCorrectAnswer: 3,
    },
    {
      question: "2. რა არ არის აგრებრა",
      answers: [
        "ა. სახლი მაგიდა სკამი ვაშლი",
        "ბ. არწივი მაგიდა სკამი ვაშლი",
        "გ. ქორი მაგიდა სკამი ვაშლი",
        "დ. კომპიუტერული ტექნიკა და მაგიდა სკამი ვაშლი",
      ],
      indexOfCorrectAnswer: 3,
    },
    {
      question: "3. რა არ არის სახლი",
      answers: [
        "ა.  მაგიდა 123სკამი ვაშლი",
        "ბ. არწივი მაგ 12იდა სკამი ვაშლი",
        "გ. ქორი მაგიდა სკამი ვაშლი",
        "დ. კომპიუტერ 12 12ული ტექნიკა და მაგიდა სკამი ვაშლი",
      ],
      indexOfCorrectAnswer: 1,
    },
  ],
};

const fizikAndOthers: QuizProps = {
  header: " საბუნებისმეტყველო ფიზიკა და რამე",
  href: "#this2",
  questions: [
    {
      question: "1. რა არის ფიზიკა",
      answers: [
        "ა. ორი სამი ოთხი ხუთი",
        "ბ. არწივი მაგიდა სკამი ვაშლი",
        "გ. ქორი მაგიდა სკამი ვაშლი",
        "დ. კომპიუტერული ტექნიკა და მაგიდა სკამი ვაშლი",
      ],
      indexOfCorrectAnswer: 1,
    },
    {
      question: "2. რა არ არის აგრებრა",
      answers: [
        "ა. სახლი მაგიდა სკამი ვაშლი",
        "ბ. არწივი მაგიდა სკამი ვაშლი",
        "გ. ქორი მაგიდა სკამი ვაშლი",
        "დ. კომპიუტერული ტექნიკა და მაგიდა სკამი ვაშლი",
      ],
      indexOfCorrectAnswer: 3,
    },
    {
      question: "3. რა არ არის სახლი",
      answers: [
        "ა.  მაგიდა 123სკამი ვაშლი",
        "ბ. არწივი მაგ 12იდა სკამი ვაშლი",
        "გ. ქორი მაგიდა სკამი ვაშლი",
        "დ. კომპიუტერ 12 12ული ტექნიკა და მაგიდა სკამი ვაშლი",
      ],
      indexOfCorrectAnswer: 1,
    },
  ],
};

type QuizDataType = QuizProps[];
const quizData: QuizDataType = [geometryAndAlgebra, fizikAndOthers];

export default quizData;
