import { useState, useEffect } from 'react';
import MockWindow from './MockWindow';
import { playTTS, stopTTS } from '../utils/ttsUtils';

const FormattedText = ({ text }) => {
  if (!text) return null;
  
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|O\([a-zA-Z0-9\-+ ]+\))/g;
  const parts = text.split(regex);
  
  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} style={{ color: 'var(--text)', fontWeight: 'bold' }}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          const inner = part.slice(1, -1);
          if (inner.startsWith('O(')) {
            return (
              <span key={index} style={{ 
                color: '#ef4444', 
                fontWeight: 'bold', 
                backgroundColor: '#fee2e2', 
                padding: '2px 6px', 
                borderRadius: '4px', 
                fontSize: '0.85em', 
                fontFamily: 'monospace',
                margin: '0 2px',
                border: '1px solid #fca5a5'
              }}>
                {inner}
              </span>
            );
          }
          return (
            <code key={index} style={{ 
              backgroundColor: '#f1f5f9', 
              padding: '2px 6px', 
              borderRadius: '4px', 
              border: '1px solid #cbd5e1', 
              fontSize: '0.9em', 
              color: '#0f172a', 
              fontFamily: 'monospace',
              margin: '0 2px'
            }}>
              {inner}
            </code>
          );
        }
        if (part.startsWith('O(') && part.endsWith(')')) {
          return (
            <span key={index} style={{ 
              color: '#ef4444', 
              fontWeight: 'bold', 
              backgroundColor: '#fee2e2', 
              padding: '2px 6px', 
              borderRadius: '4px', 
              fontSize: '0.85em', 
              fontFamily: 'monospace',
              margin: '0 2px',
              border: '1px solid #fca5a5'
            }}>
              {part}
            </span>
          );
        }
        return part;
      })}
    </span>
  );
};

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
        
        {topic.bulletSections ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
            {topic.bulletSections.map((section, sIdx) => (
              <div key={sIdx} style={{
                backgroundColor: '#ffffff',
                border: '3px solid var(--text)',
                boxShadow: '4px 4px 0px var(--text)',
                borderRadius: '8px',
                padding: '20px'
              }}>
                <h4 style={{ 
                  margin: '0 0 12px 0', 
                  fontSize: '1.1rem', 
                  fontWeight: 'bold', 
                  color: 'var(--text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ 
                    width: '8px', 
                    height: '16px', 
                    backgroundColor: 'var(--primary)', 
                    border: '1.5px solid var(--text)',
                    borderRadius: '2px',
                    display: 'inline-block' 
                  }}></span>
                  {section.title}
                </h4>
                <ul style={{ 
                  margin: 0, 
                  paddingLeft: '20px', 
                  listStyleType: 'disc', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '10px' 
                }}>
                  {section.items.map((item, iIdx) => {
                    const isNested = item.trim().startsWith('-');
                    const cleanItem = isNested ? item.replace(/^\s*-\s*/, '') : item;
                    return (
                      <li key={iIdx} style={{ 
                        fontSize: '0.95rem', 
                        lineHeight: '1.6', 
                        color: '#1e293b',
                        paddingLeft: isNested ? '20px' : '0',
                        listStyleType: isNested ? 'circle' : 'disc'
                      }}>
                        <FormattedText text={cleanItem} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <>
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
                <div style={{ overflowX: 'auto', marginTop: '12px' }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse', 
                    border: '3px solid var(--text)',
                    boxShadow: '4px 4px 0px var(--text)',
                    backgroundColor: 'white',
                    marginBottom: '24px'
                  }}>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--primary)', borderBottom: '3px solid var(--text)' }}>
                        <th style={{ padding: '12px', textAlign: 'left', borderRight: '3px solid var(--text)', color: '#1C293C', fontWeight: 'bold', width: '35%' }}>
                          Hàm / Từ khóa / Khái niệm
                        </th>
                        <th style={{ padding: '12px', textAlign: 'left', color: '#1C293C', fontWeight: 'bold' }}>
                          Mô tả / Ý nghĩa thực tế
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {topic.builtInMethods.map((method, index) => {
                        const hasSeparator = method.includes(' - ');
                        if (hasSeparator) {
                          const parts = method.split(' - ');
                          return (
                            <tr key={index} style={{ borderBottom: index < topic.builtInMethods.length - 1 ? '2px solid var(--text)' : 'none' }}>
                              <td style={{ padding: '12px', borderRight: '3px solid var(--text)', verticalAlign: 'middle' }}>
                                <code style={{ backgroundColor: 'var(--surface)', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--text)', fontWeight: 'bold', wordBreak: 'break-word', display: 'inline-block' }}>
                                  {parts[0]}
                                </code>
                              </td>
                              <td style={{ padding: '12px', verticalAlign: 'middle', lineHeight: '1.5', color: '#334155' }}>
                                {parts.slice(1).join(' - ')}
                              </td>
                            </tr>
                          );
                        } else {
                          return (
                            <tr key={index} style={{ borderBottom: index < topic.builtInMethods.length - 1 ? '2px solid var(--text)' : 'none' }}>
                              <td colSpan="2" style={{ padding: '12px', verticalAlign: 'middle', lineHeight: '1.5', color: '#334155', fontWeight: '500' }}>
                                {method}
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {topic.summaryTable && (
          <div className="section" style={{ marginTop: '24px' }}>
            <h3>Tóm tắt nhanh (JCF Summary)</h3>
            <div style={{ overflowX: 'auto', marginTop: '12px' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse', 
                border: '3px solid var(--text)',
                boxShadow: '4px 4px 0px var(--text)',
                backgroundColor: 'white',
                marginBottom: '24px'
              }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary)', borderBottom: '3px solid var(--text)' }}>
                    {topic.summaryTable.headers.map((header, idx) => (
                      <th key={idx} style={{ 
                        padding: '12px', 
                        textAlign: 'left', 
                        borderRight: idx < topic.summaryTable.headers.length - 1 ? '3px solid var(--text)' : 'none',
                        color: '#1C293C', 
                        fontWeight: 'bold' 
                      }}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topic.summaryTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} style={{ borderBottom: rIdx < topic.summaryTable.rows.length - 1 ? '2px solid var(--text)' : 'none' }}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} style={{ 
                          padding: '12px', 
                          borderRight: cIdx < row.length - 1 ? '3px solid var(--text)' : 'none', 
                          verticalAlign: 'middle',
                          lineHeight: '1.5', 
                          color: '#334155',
                          fontWeight: cIdx === 0 ? 'bold' : 'normal'
                        }}>
                          <FormattedText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {topic.comparisonPair && (
          <div className="section" style={{ marginTop: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>⚔️ ĐỐI ĐẦU TRỰC DIỆN (HEAD-TO-HEAD COMPARISON)</h3>
            <div style={{
              border: '3px solid var(--text)',
              boxShadow: '6px 6px 0px var(--text)',
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              position: 'relative'
            }}>
              <h4 style={{ 
                margin: '0 0 16px 0', 
                fontSize: '1.1rem', 
                fontWeight: 'bold', 
                color: 'var(--text)',
                borderBottom: '2px dashed var(--text)',
                paddingBottom: '8px'
              }}>
                {topic.comparisonPair.title}
              </h4>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '16px' 
              }}>
                {topic.comparisonPair.items.map((item, iIndex) => (
                  <div key={iIndex} style={{
                    border: '2px solid var(--text)',
                    borderRadius: '6px',
                    padding: '16px',
                    backgroundColor: item.color || 'var(--surface)',
                    boxShadow: '3px 3px 0px var(--text)'
                  }}>
                    <div style={{ 
                      fontWeight: 'bold', 
                      fontSize: '1rem', 
                      marginBottom: '8px', 
                      display: 'inline-block',
                      borderBottom: '2px solid var(--text)'
                    }}>
                      {item.name}
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: '#1E293B', whiteSpace: 'pre-line' }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              
              <div style={{ 
                marginTop: '20px', 
                backgroundColor: 'var(--primary)', 
                padding: '12px 16px', 
                borderRadius: '6px', 
                border: '2px solid var(--text)',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                color: '#1C293C',
                boxShadow: '3px 3px 0px var(--text)',
                lineHeight: '1.5'
              }}>
                {topic.comparisonPair.verdict}
              </div>
            </div>
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

            {topic.essays && (
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
            )}
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
