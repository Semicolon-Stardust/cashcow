import React, { useEffect } from 'react'
const Quiz = () => {
  const [questons, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const decodeEntities = (html) => {
    const textArea = document.createElement('textarea');
    textArea;
    return textArea.value;
  };

  useEffect(() => {
    async function fetchquestions() {
      try {
        const response = await axios.get("");
        const formattedQuestions = response.data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort(() => Math.random() - 0.5)
        }));
      } catch (error) {
        console.error("Error fetching questions");
      }
    }
  });
  return (
    <div>
      Quiz
    </div>
  );
}
export default Quiz;