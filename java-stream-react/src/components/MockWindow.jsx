export default function MockWindow({ content }) {
  return (
    <div className="mock-window">
      <div className="mac-header">
        <span className="dot bg-danger"></span>
        <span className="dot bg-warning"></span>
        <span className="dot bg-success"></span>
      </div>
      <pre><code>{content}</code></pre>
    </div>
  );
}
