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
