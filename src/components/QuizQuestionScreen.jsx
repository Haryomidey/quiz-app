import React, { useEffect, useState, useRef } from 'react';
import { MdOutlineArrowBack, MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { MdCheckCircle, MdCancel } from 'react-icons/md'; 
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const QuizQuestion = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(2);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  useEffect(() => {
    const storedTopic = localStorage.getItem('selectedTopic');
    if (storedTopic) {
      const topicData = JSON.parse(storedTopic);
      setSelectedTopic(topicData);
      const durationInMinutes = parseFloat(topicData.duration.split(' ')[0], 10);
      setTimeLeft(durationInMinutes * 60);
    }
  }, []);

  useEffect(() => {
    if (isCompleted || timeLeft <= 0) {
      clearInterval(timerRef.current);
      if (!isCompleted) {
        handleCompleteQuiz();
      }
      return;
    }
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [timeLeft, isCompleted]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleCompleteQuiz = () => {
    setIsCompleted(true);
    clearInterval(timerRef.current);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswers[currentQuestionIndex]) {
      alert("Please select an answer before moving to the next question.");
      return;
    }

    if (currentQuestionIndex < selectedTopic.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleCompleteQuiz();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectAnswer = (option) => {
    const answerIndex = selectedTopic.options[currentQuestionIndex].indexOf(option);
    const answerLetter = String.fromCharCode(65 + answerIndex);
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answerLetter;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNavigation = () => {
    navigate('/');
  };

  const calculateScore = () => {
    const correctAnswersCount = selectedAnswers.filter(
      (answer, index) => answer === selectedTopic.correctAnswer[index]
    ).length;
    return (correctAnswersCount / selectedTopic.questions.length) * 100;
  };

  if (!selectedTopic) {
    return <p>Loading...</p>;
  }

  return (
    <div className='text-white h-full w-full'>
      <div className='p-5 mb-6'>
        <div className='pt-5 flex items-center flex-wrap gap-2 text-sm'>
          <span className='text-xl cursor-pointer' onClick={handleNavigation}>
            <MdOutlineArrowBack />
          </span>
          <p>{selectedTopic?.topic} Quiz</p>
          <div className='flex items-center flex-wrap gap-2 bg-white rounded-3xl text-secondary px-4 py-1'>
            <CiClock2 className='-mt-[2px]' />
            <p>{formatTime(timeLeft)}</p>
          </div>
        </div>
      </div>

      <div className='w-full h-full bg-white text-primary rounded-tl-[50px] rounded-tr-[50px] p-5'>
        <p className='w-[70px] h-[4px] bg-gradient mx-auto rounded-3xl'></p>

        {!isCompleted ? (
          <>
            <div className='w-full min-w-full pb-4'>
              <ul className='w-full flex items-center flex-wrap gap-3 mt-3'>
                {selectedTopic?.questions.map((_, index) => (
                  <li
                  key={index}
                  className={`min-w-[40px] h-[40px] rounded-full grid place-items-center cursor-pointer ${
                    index === currentQuestionIndex
                      ? 'bg-secondary text-white'
                      : selectedAnswers[index] ? 'bg-secondary text-white' : 'bg-[#D4D4D4]'
                  }`}
                  onClick={() => setCurrentQuestionIndex(index)}
                >
                  {index + 1}
                </li>
                
                ))}
              </ul>
            </div>

            <h3 className='mt-4 font-semibold text-black text-lg'>
              {selectedTopic?.questions[currentQuestionIndex]}
            </h3>
            <ul className='mt-6 flex flex-col gap-3'>
              {selectedTopic?.options[currentQuestionIndex].map((option, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-4 text-black cursor-pointer`}
                  onClick={() => handleSelectAnswer(option)}
                >
                  <p
                    className={`min-w-[40px] h-[40px] rounded-full grid place-items-center text-white ${
                      selectedAnswers[currentQuestionIndex] === String.fromCharCode(65 + index) ? 'bg-secondary' : 'bg-[#D4D4D4]'
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </p>
                  <p>{option}</p>
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-4 justify-between max-w-[500px] mt-10 mx-auto'>
              <p
                className='min-w-[40px] h-[40px] bg-[#D4D4D4] rounded-full grid place-items-center text-white cursor-pointer hover:bg-secondary'
                onClick={handlePrevQuestion}
              >
                <MdArrowBackIos />
              </p>
              <button
                className='button h-[40px] min-w-[fit-content] w-[130px]'
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex === selectedTopic?.questions.length - 1
                  ? 'Finish'
                  : 'Next'}
              </button>
              <p
                className='min-w-[40px] h-[40px] bg-[#D4D4D4] rounded-full grid place-items-center text-white cursor-pointer hover:bg-secondary'
                onClick={handleNextQuestion}
              >
                <MdArrowForwardIos />
              </p>
            </div>
          </>
        ) : (
          <div className='text-center'>
            <h2 className='text-black font-semibold pt-6'>Quiz Completed!</h2>

            <ul className='mt-6'>
              {selectedTopic?.questions.map((question, index) => {
                const selectedAnswer = selectedAnswers[index];
                const correctAnswer = selectedTopic.correctAnswer[index];
                const isCorrect = selectedAnswer === correctAnswer;

                return (
                  <li key={index} className='text-xs sm:text-sm'>
                    <p className='font-bold text-black'>
                      {index + 1}. {question}
                    </p>
                    <div className='flex items-center justify-center flex-wrap'>
                      <p className='whitespace-nowrap'>Selected Answer:</p>
                      {selectedAnswer ? (
                        <p className='ml-2 flex items-center'>
                          {selectedTopic.options[index][selectedAnswer?.charCodeAt(0) - 65]}
                          {isCorrect ? (
                            <p><MdCheckCircle className='text-green-500 ml-2' /></p>
                          ) : (
                            <p><MdCancel className='text-red-500 ml-2' /></p>
                          )}
                        </p>
                      ) : (
                        "Not answered"
                      )}
                    </div>
                    <div className='flex items-center justify-center flex-wrap'>
                      <p className='whitespace-nowrap'>Correct Answer:</p>
                      {selectedTopic.options[index][correctAnswer.charCodeAt(0) - 65]}
                    </div>
                  </li>
                );
              })}
            </ul>

            <h3 className='mt-4 text-black'>Score: {calculateScore()}%</h3>

            <button
              className='mt-6 bg-secondary text-white px-4 py-2 rounded'
              onClick={handleNavigation}
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
