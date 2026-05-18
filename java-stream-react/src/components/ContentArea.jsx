import { useState, useEffect } from 'react';
import MockWindow from './MockWindow';
import { playTTS, stopTTS } from '../utils/ttsUtils';

export default function ContentArea({ topic }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Trạng thái mở rộng cho Quizzes, Essays và FAQs
  const [openQuizzes, setOpenQuizzes] = useState({});
  const [openEssays, setOpenEssays] = useState({});
  const [openFaqs, setOpenFaqs] = useState({});

  // Hủy đọc và reset trạng thái mở rộng khi chuyển sang bài học khác
  useEffect(() => {
    stopTTS(setIsSpeaking);
    setOpenQuizzes({});
    setOpenEssays({});
    setOpenFaqs({});
    return () => stopTTS();
  }, [topic]);

  const handleSpeak = () => {
    if (isSpeaking) {
      stopTTS(setIsSpeaking);
    } else {
      playTTS(topic, setIsSpeaking);
    }
  };

  if (!topic) return null;
  
  return (
    <main className="content">
      <div className="card bg-white">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 style={{ marginBottom: '8px' }}>{topic.title}</h2>
            <span className={`badge ${topic.type === 'Terminal' ? 'terminal' : ''}`}>
              {topic.type}
            </span>
          </div>
          <button 
            className="btn" 
            onClick={handleSpeak}
            style={{ 
              backgroundColor: isSpeaking ? 'var(--danger)' : 'var(--primary)', 
              color: isSpeaking ? 'white' : '#1C293C',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {isSpeaking ? '⏹ Dừng đọc' : '🔊 Nghe bài học'}
          </button>
        </div>
        
        <div className="section">
          <h3>Mô tả</h3>
          <p>{topic.description}</p>
        </div>

        {topic.interviewSignals && (
          <div className="section highlight-box" style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--primary)', marginBottom: '24px' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>🎯 Dấu hiệu nhận biết (Khi nào dùng?)</h3>
            <p style={{ marginBottom: 0 }}>{topic.interviewSignals}</p>
          </div>
        )}

        {topic.practiceProblems && (
          <div className="section highlight-box" style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10b981', marginBottom: '24px' }}>
            <h3 style={{ marginTop: 0, color: '#10b981' }}>🛠 Các dạng bài thực hành</h3>
            <p style={{ marginBottom: 0, fontWeight: 'bold' }}>{topic.practiceProblems}</p>
          </div>
        )}

        {topic.memoryTrick && (
          <div className="section highlight-box" style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #F59E0B', marginBottom: '24px' }}>
            <h3 style={{ marginTop: 0, color: '#F59E0B' }}>Mẹo nhớ nhanh</h3>
            <p style={{ marginBottom: 0, fontStyle: 'italic' }}>{topic.memoryTrick}</p>
          </div>
        )}

        {topic.builtInMethods && (
          <div className="section">
            <h3>Các hàm hỗ trợ sẵn (Built-in Methods)</h3>
            <ul style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
              {topic.builtInMethods.map((method, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <code style={{ backgroundColor: 'var(--surface)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--text)' }}>
                    {method.split(' - ')[0]}
                  </code>
                  {' - ' + method.split(' - ')[1]}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* =================================================================== */}
        {/* RENDER CÁC BÀI TẬP VÀ CÂU ĐỐ TRẮC NGHIỆM (QUIZZES & ESSAYS) */}
        {/* =================================================================== */}
        {topic.quizzes ? (
          <>
            <div className="section">
              <h3 style={{ marginBottom: '16px' }}>⚡ 10 Câu Hỏi Đố Ôn Tập Nhanh</h3>
              <p style={{ color: '#64748b', marginBottom: '16px' }}>Click vào từng câu hỏi bên dưới để lật xem đáp án lý thuyết.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {topic.quizzes.map((quiz, index) => {
                  const isOpen = !!openQuizzes[index];
                  return (
                    <div 
                      key={index}
                      className="card"
                      style={{ 
                        border: '3px solid #1C293C', 
                        borderRadius: '8px', 
                        padding: '16px', 
                        backgroundColor: isOpen ? '#f0fdf4' : 'white',
                        boxShadow: '4px 4px 0px #1C293C',
                        transition: 'all 0.15s ease',
                        cursor: 'pointer'
                      }}
                      onClick={() => setOpenQuizzes(prev => ({ ...prev, [index]: !prev[index] }))}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                        <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1C293C', lineHeight: '1.4' }}>
                          🤔 Câu hỏi {index + 1}: {quiz.q}
                        </h4>
                        <button 
                          className="btn" 
                          style={{ 
                            padding: '4px 10px', 
                            fontSize: '0.85rem', 
                            whiteSpace: 'nowrap',
                            backgroundColor: isOpen ? '#86efac' : '#e2e8f0',
                            border: '2px solid #1C293C',
                            boxShadow: 'none'
                          }}
                        >
                          {isOpen ? '🙈 Ẩn đáp án' : '💡 Xem đáp án'}
                        </button>
                      </div>
                      {isOpen && (
                        <div style={{ 
                          marginTop: '12px', 
                          paddingTop: '12px', 
                          borderTop: '2px dashed #1C293C', 
                          lineHeight: '1.6',
                          whiteSpace: 'pre-line',
                          color: '#166534',
                          fontWeight: '500'
                        }}>
                          {quiz.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="section">
              <h3 style={{ marginBottom: '16px' }}>📐 5 Câu Hỏi Tự Luận Tư Duy Thiết Kế</h3>
              <p style={{ color: '#64748b', marginBottom: '16px' }}>Hãy thử tự suy ngẫm giải pháp, sau đó click xem gợi ý định hướng thiết kế.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {topic.essays.map((essay, index) => {
                  const isOpen = !!openEssays[index];
                  return (
                    <div 
                      key={index}
                      className="card"
                      style={{ 
                        border: '3px solid #1C293C', 
                        borderRadius: '8px', 
                        padding: '16px', 
                        backgroundColor: isOpen ? '#fffbeb' : 'white',
                        boxShadow: '4px 4px 0px #1C293C',
                        transition: 'all 0.15s ease',
                        cursor: 'pointer'
                      }}
                      onClick={() => setOpenEssays(prev => ({ ...prev, [index]: !prev[index] }))}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                        <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1C293C', lineHeight: '1.4' }}>
                          ✍️ Thử thách {index + 1}: {essay.q}
                        </h4>
                        <button 
                          className="btn" 
                          style={{ 
                            padding: '4px 10px', 
                            fontSize: '0.85rem', 
                            whiteSpace: 'nowrap',
                            backgroundColor: isOpen ? '#fde047' : '#e2e8f0',
                            border: '2px solid #1C293C',
                            boxShadow: 'none'
                          }}
                        >
                          {isOpen ? '🙈 Ẩn gợi ý' : '💡 Xem gợi ý'}
                        </button>
                      </div>
                      {isOpen && (
                        <div style={{ 
                          marginTop: '12px', 
                          paddingTop: '12px', 
                          borderTop: '2px dashed #1C293C', 
                          lineHeight: '1.6',
                          color: '#854d0e',
                          fontWeight: '500'
                        }}>
                          <strong>📌 Gợi ý phân tích:</strong> {essay.hint}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : null}

        {/* =================================================================== */}
        {/* RENDER CÂU HỎI PHỎNG VẤN THƯỜNG GẶP (ACCORDION FAQS) */}
        {/* =================================================================== */}
        {topic.faqs ? (
          <div className="section">
            <h3 style={{ marginBottom: '16px' }}>❓ Hỏi - Đáp Phỏng Vấn OOP (Click để mở rộng câu trả lời)</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {topic.faqs.map((faq, index) => {
                const isOpen = !!openFaqs[index];
                return (
                  <div 
                    key={index}
                    className="card"
                    style={{ 
                      border: '3px solid #1C293C', 
                      borderRadius: '8px', 
                      padding: '0px', 
                      boxShadow: '4px 4px 0px #1C293C',
                      overflow: 'hidden',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <button
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '16px',
                        background: isOpen ? 'var(--primary)' : 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1.05rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: '#1C293C',
                        outline: 'none',
                        transition: 'background-color 0.15s ease',
                        gap: '12px'
                      }}
                      onClick={() => setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }))}
                    >
                      <span style={{ lineHeight: '1.4' }}>{faq.q}</span>
                      <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div style={{ 
                        padding: '20px', 
                        backgroundColor: '#f8fafc',
                        borderTop: '3px solid #1C293C',
                        lineHeight: '1.7',
                        whiteSpace: 'pre-line',
                        color: '#334155',
                        fontSize: '0.98rem'
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* =================================================================== */}
        {/* RENDER CODE BLOCK VÀ OUTPUT CHO CÁC TAB LÝ THUYẾT TRUYỀN THỐNG */}
        {/* =================================================================== */}
        {!topic.quizzes && !topic.faqs && topic.code && (
          <div className="section">
            <h3>Java Code</h3>
            <MockWindow content={topic.code} />
          </div>
        )}

        {!topic.quizzes && !topic.faqs && topic.output && (
          <div className="section">
            <h3>Kết quả (Mô phỏng)</h3>
            <MockWindow content={topic.output} />
          </div>
        )}
      </div>
    </main>
  );
}
