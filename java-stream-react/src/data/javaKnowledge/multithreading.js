export const multithreading = [
  {
    id: 'thread',
    title: 'Thread & Runnable',
    type: 'Core',
    description: 'Tạo một luồng mới bằng cách implement interface Runnable hoặc kế thừa Thread.',
    interviewSignals: 'Hỏi về lý thuyết Concurrency, deadlock, race condition, thread pool.',
    practiceProblems: 'Print FooBar Alternately, Dining Philosophers (Concurrency problems).',
    builtInMethods: [
      'start() - Khởi chạy luồng (BẮT BUỘC dùng, không gọi run() trực tiếp)',
      'Thread.sleep(ms) - Tạm dừng luồng hiện tại',
      'Thread.currentThread().getName() - Lấy tên luồng'
    ],
    memoryTrick: '🧠 Thread như thuê thêm công nhân. start() là bảo công nhân "làm đi", còn nếu gọi run() thì giống như tự mình xắn tay vào làm (vẫn ở luồng chính).',
    code: `Runnable task = () -> {\n    System.out.println("Running in: " + Thread.currentThread().getName());\n};\nnew Thread(task).start();`,
    output: `Running in: Thread-0`
  }
];
