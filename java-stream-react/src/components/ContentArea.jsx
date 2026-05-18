import MockWindow from './MockWindow';

export default function ContentArea({ topic }) {
  if (!topic) return null;
  
  return (
    <main className="content">
      <div className="card bg-white">
        <div className="card-header">
          <h2>{topic.title}</h2>
          <span className={`badge ${topic.type === 'Terminal' ? 'terminal' : ''}`}>
            {topic.type}
          </span>
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
