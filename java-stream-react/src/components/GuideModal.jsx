import { useState, useEffect } from 'react';

export default function GuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="backdrop" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, padding: '16px' }}>
      <div 
        className="card bg-surface" 
        style={{ 
          maxWidth: '500px', 
          width: '100%', 
          position: 'relative', 
          overflowY: 'auto', 
          maxHeight: '90vh',
          animation: 'slideUp 0.3s ease-out'
        }}
      >
        <button 
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: '16px', 
            right: '16px', 
            background: 'transparent', 
            border: 'none', 
            fontSize: '20px', 
            cursor: 'pointer', 
            color: 'var(--text)',
            padding: '4px'
          }}
          aria-label="Đóng"
        >
          ✕
        </button>
        <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--primary)', textShadow: '2px 2px 0px var(--text)' }}>
          👋 Hướng Dẫn Sử Dụng
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px' }}>
          <p style={{ margin: 0, fontWeight: '500' }}>Chào mừng bạn! Dưới đây là các tính năng giúp bạn học hiệu quả:</p>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '28px' }}>📂</span>
            <div>
              <strong style={{ fontSize: '16px' }}>Chọn Danh mục & Bài học</strong>
              <p style={{ margin: '4px 0 0 0', opacity: 0.9, lineHeight: '1.5' }}>
                Sử dụng các tab (Ví dụ: OOP, Stream API) ở trên cùng để chuyển danh mục.<br/>
                📱 <em>Trên Mobile:</em> Click nút "Danh sách bài học" ở đầu trang để mở menu sidebar.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '28px' }}>🔊</span>
            <div>
              <strong style={{ fontSize: '16px' }}>Nghe Giọng Đọc (Audio TTS)</strong>
              <p style={{ margin: '4px 0 0 0', opacity: 0.9, lineHeight: '1.5' }}>
                Mỗi bài học có nút "Nghe bài học". Chị "Hoài My" sẽ đọc toàn bộ nội dung lý thuyết giúp bạn vừa code vừa ôn tập dễ dàng.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '28px' }}>🤔</span>
            <div>
              <strong style={{ fontSize: '16px' }}>Quizzes & Thử Thách Thiết Kế</strong>
              <p style={{ margin: '4px 0 0 0', opacity: 0.9, lineHeight: '1.5' }}>
                Nhấp vào các thẻ Câu hỏi ôn tập (Quizzes) ở cuối mỗi bài học để lật xem đáp án và gợi ý.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '28px' }}>🔍</span>
            <div>
              <strong style={{ fontSize: '16px' }}>Tìm kiếm siêu tốc</strong>
              <p style={{ margin: '4px 0 0 0', opacity: 0.9, lineHeight: '1.5' }}>
                Sử dụng thanh tìm kiếm (🔍) ngay dưới Header để tra cứu nhanh các khái niệm, class hay mẹo nhớ mà không cần tìm thủ công.
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '28px' }}>🌙</span>
            <div>
              <strong style={{ fontSize: '16px' }}>Chế độ Tối / Sáng</strong>
              <p style={{ margin: '4px 0 0 0', opacity: 0.9, lineHeight: '1.5' }}>
                Nhấn vào biểu tượng ☀️/🌙 trên Header góc phải để bật/tắt chế độ bảo vệ mắt khi học code ban đêm.
              </p>
            </div>
          </div>
        </div>

        <button 
          className="btn" 
          onClick={onClose} 
          style={{ width: '100%', marginTop: '28px', backgroundColor: 'var(--primary)', color: '#1C293C', fontSize: '16px' }}
        >
          Đã hiểu, Bắt đầu học ngay! 🚀
        </button>
      </div>
    </div>
  );
}
