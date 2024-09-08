import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { BiBook } from "react-icons/bi";
import { CiSearch, CiClock2 } from "react-icons/ci";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { quiz } from '../utils/data';

const HomeScreen = () => {
    const [selectedSubject, setSelectedSubject] = useState('Mathematics');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const router = useNavigate();

    const handleSelectedSubject = (subject) => {
        setSelectedSubject(subject);
    };

    const handleSelectedTopic = (topic) => {
        setSelectedTopic(topic);
        if (!topic) return;
        localStorage.setItem('selectedTopic', JSON.stringify(topic));
    };
    
    const handleStartQuiz = () => {
        if (!selectedTopic) return;
        router(`/quiz-details/${selectedTopic.topic}`);
    };

    const filteredTopics = quiz
        .find(d => d.subject === selectedSubject)?.topics
        .filter(topic => topic.topic && topic.topic.toLowerCase().includes(searchTerm.toLowerCase())) || [];

    return (
        <div className='w-full h-full text-white'>
            <div className='p-5'>
                <p className='pt-10 text-[#efeeee]'>Hello, Ayomide</p>
                <h1 className='text-2xl mt-3'>Let's test your knowledge</h1>
                <div className='w-full flex items-center gap-2 h-[45px] bg-white rounded-3xl mt-2 px-2 overflow-hidden'>
                    <CiSearch className='text-secondary text-2xl' />
                    <input 
                        type="text" 
                        className='w-full h-full text-primary' 
                        placeholder='Search' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <HiAdjustmentsHorizontal className='text-secondary text-2xl' />
                </div>
            </div>

            <div className='w-full h-full bg-white text-primary rounded-tl-[50px] rounded-tr-[50px] p-5'>
                <p className='w-[70px] h-[4px] bg-gradient mx-auto rounded-3xl'></p>
                <div className='w-full mt-3'>
                    <ul className='w-full flex items-center gap-3 flex-wrap'>
                        {quiz.map((d) => (
                            <li
                                key={d.subject}
                                className={`select-none cursor-pointer border-b ${
                                    selectedSubject === d.subject ? 'text-secondary border-secondary' : ''
                                }`}
                                onClick={() => handleSelectedSubject(d.subject)}
                            >
                                {d.subject}
                            </li>
                        ))}
                    </ul>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 pt-6 gap-5'>
                        {filteredTopics.length > 0 ? (
                            filteredTopics.map((topic, index) => (
                                <div key={index} onClick={() => handleSelectedTopic(topic)} className={`cursor-pointer c-shadow h-[120px] rounded-md flex items-center gap-6 p-5 border ${selectedTopic === topic ? 'border-secondary' : ''}`}>
                                    <div className='h-[80px] w-[80px] c-shadow bg-primary rounded-sm'></div>
                                    <div>
                                        <h2 className='text-secondary text-xl font-semibold mb-2'>{topic.topic}</h2>
                                        <div className='text-sm'>
                                            <p className='flex items-center gap-2'><BiBook /> <span>{topic.questions.length} Questions</span></p>
                                            <p className='flex items-center gap-2'><CiClock2 /> <span>{topic.duration}</span></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-center w-full col-span-full'>No topics found for "{searchTerm}".</p>
                        )}
                    </div>
                    <div className='mt-4'>
                        <button className='button w-full h-[45px]' onClick={handleStartQuiz}>Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
