import { useState, useEffect } from 'react';
import MockWindow from './MockWindow';
import { playTTS, stopTTS } from '../utils/ttsUtils';

export default function ContentArea({ topic }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Hủy đọc khi chuyển sang bài khác hoặc tắt component
  useEffect(() => {
    stopTTS(setIsSpeaking);
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

        <div className="section">
          <h3>Java Code</h3>
          <MockWindow content={topic.code} />
        </div>

        <div className="section">
          <h3>Kết quả (Mô phỏng)</h3>
          <MockWindow content={topic.output} />
        </div>
      </div>
    </main>
  );
}
