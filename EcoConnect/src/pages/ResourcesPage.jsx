// src/pages/ResourcesPage.jsx
import React, { useState } from 'react';
import { BookOpen, Download, Video, FileText, Image } from 'lucide-react';
import { resources, quizQuestions } from '../data/resourcesData';

const ResourcesPage = () => {
  const [filterType, setFilterType] = useState('all');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const types = ['all', 'PDF', 'Video', 'Article', 'Image'];
  
  const filteredResources = filterType === 'all' 
    ? resources 
    : resources.filter(r => r.type === filterType);

  const getIcon = (type) => {
    switch(type) {
      case 'PDF': return <FileText className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'Image': return <Image className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const handleQuizAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Educational Resources</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Learn about SDGs through articles, videos, and interactive content
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Browse Resources</h2>
          <div className="flex flex-wrap gap-3">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filterType === type
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {type === 'all' ? 'All Resources' : type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="text-indigo-600">{getIcon(resource.type)}</div>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                  {resource.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{resource.size}</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                {resource.downloads} downloads
              </div>
            </div>
          ))}
        </div>

        {/* Quiz Section */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Test Your SDG Knowledge</h2>
          
          {!quizStarted ? (
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Take our quiz to test your understanding of the Sustainable Development Goals
              </p>
              <button
                onClick={() => setQuizStarted(true)}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition text-lg"
              >
                Start Quiz
              </button>
            </div>
          ) : showResult ? (
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-4 text-indigo-600">
                Quiz Complete!
              </h3>
              <p className="text-2xl mb-6 text-gray-700">
                Your Score: {score} / {quizQuestions.length}
              </p>
              <div className="mb-6">
                {score === quizQuestions.length && (
                  <p className="text-green-600 text-xl font-semibold">Perfect! You're an SDG expert! 🎉</p>
                )}
                {score >= quizQuestions.length * 0.7 && score < quizQuestions.length && (
                  <p className="text-blue-600 text-xl font-semibold">Great job! You know your SDGs well! 👏</p>
                )}
                {score < quizQuestions.length * 0.7 && (
                  <p className="text-orange-600 text-xl font-semibold">Keep learning! Check out our resources. 📚</p>
                )}
              </div>
              <button
                onClick={resetQuiz}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Retake Quiz
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-sm font-semibold text-indigo-600">
                    Score: {score}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                  {quizQuestions[currentQuestion].question}
                </h3>
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-lg border-2 transition ${
                        selectedAnswer === null
                          ? 'border-gray-300 hover:border-indigo-600 hover:bg-indigo-50'
                          : selectedAnswer === index
                            ? index === quizQuestions[currentQuestion].correct
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : index === quizQuestions[currentQuestion].correct
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {selectedAnswer !== null && (
                <div className={`p-4 rounded-lg ${
                  selectedAnswer === quizQuestions[currentQuestion].correct
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  <p className="font-semibold mb-2">
                    {selectedAnswer === quizQuestions[currentQuestion].correct ? '✓ Correct!' : '✗ Incorrect'}
                  </p>
                  <p>{quizQuestions[currentQuestion].explanation}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default ResourcesPage;