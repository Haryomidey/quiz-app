import React, { useEffect, useState } from 'react';
import { MdOutlineArrowBack } from "react-icons/md";
import { BiBook } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const QuizDetail = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const router = useNavigate();

    useEffect(() => {
        const storedTopic = localStorage.getItem('selectedTopic');
        if (storedTopic) {
            setSelectedTopic(JSON.parse(storedTopic));
        }
    }, []);

    const handleNavigation = () => {
        router('/')
    }

    return (
        <div className='text-white h-full w-full'>
            <div className='p-5 mb-14'>
                <div className='pt-5 flex items-center gap-2'>
                    <span className='text-xl cursor-pointer' onClick={handleNavigation}><MdOutlineArrowBack /></span>
                    <p>Quiz Details</p>
                </div>
            </div>

            {selectedTopic ? (
                <>
                    <h2 className='px-5 mb-3 text-xl font-semibold'>{selectedTopic.topic} Quiz</h2>
                    <div className='w-full h-full bg-white text-primary rounded-tl-[50px] rounded-tr-[50px] p-5'>
                        <p className='w-[70px] h-[4px] bg-gradient mx-auto rounded-3xl'></p>
                        <p className='mt-3 font-semibold text-lg'>Brief explanation about this quiz</p>
                        <div className='mt-3 flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <p className='grid place-items-center h-[45px] w-[45px] bg-black rounded-full text-white text-xl'><BiBook /></p>
                                <div className='text-sm'>
                                    <p className='font-semibold text-black'>{selectedTopic.questions?.length} Questions</p>
                                    <p>10 point for a correct answer</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className='grid place-items-center h-[45px] w-[45px] bg-black rounded-full text-white text-xl'><CiClock2 /></p>
                                <div className='text-sm'>
                                    <p className='font-semibold text-black'>{selectedTopic.duration}</p>
                                    <p>Total duration for this quiz</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <h3 className='text-black font-semibold'>Please read the text below carefully.</h3>
                            <ul className='pl-3 text-black mt-4 flex flex-col gap-3'>
                                <li className='list-disc'>10 point awarded for a correct answer and no marks for an incorrect answer</li>
                                <li className='list-disc'>Tap on options to select the correct answer</li>
                                <li className='list-disc'>Tap on the bookmark icon to save interesting questions</li>
                            </ul>
                        </div>

                        <div className='mt-4'>
                            <button onClick={() => router(`/quiz-question/${selectedTopic.topic}`)} className='button w-full h-[45px]'>Got it</button>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default QuizDetail;
