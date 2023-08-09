import React, { useState } from 'react';
import './SimplePage.css'; 

function SimplePage() {
  const categories = ['초간단질문', '플러스질문', '수행미션'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const faqData = [
    {
      question: '서비스명은 무엇인가요?',
      answer: '공공서비스1은 사용자들에게 다양한 정보를 제공하는 서비스입니다.',
    },
    {
      question: '서비스를 이용하는 방법은 어떻게 되나요?',
      answer: '서비스를 이용하려면 홈페이지에 접속하여 회원 가입 후 로그인하세요.',
    },
  ];

  return (
    <div className="simple-page">
      <header className="header">
        <img src="logo.png" alt="로고" className="logo" />
        <div className="category-menu">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>
      <main className="content">
        {selectedCategory === '초간단질문' && (
          <div className="faq-section">
            <h2>서비스 명</h2>
            <p>공공서비스1</p>

            <h2>서비스 소개 및 간단한 설명</h2>
            <p>공공서비스1은 사용자들에게 다양한 정보를 제공하는 서비스입니다.</p>

            <h2>자주 묻는 질문</h2>
            {faqData.map((faq, index) => (
              <div className="accordion" key={index}>
                <div className="accordion-header">{faq.question}</div>
                <div className="accordion-content">{faq.answer}</div>
              </div>
            ))}
          </div>
        )}

        {/* 다른 카테고리에 대한 내용을 추가하세요 */}
      </main>
      <div className="page-buttons">
        <button className="back-button">뒤로가기</button>
        <button className="ask-button">질문하기</button>
      </div>
    </div>
  );
}

export default SimplePage;
