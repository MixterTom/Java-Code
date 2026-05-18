export const dsaListStack = [
  {
    id: 'arraylist',
    title: 'ArrayList',
    type: 'Dynamic Array',
    description: 'Mảng động, tự tăng kích thước khi đầy. Truy cập phần tử bằng index cực nhanh (O(1)), nhưng chèn/xóa ở giữa mảng bị chậm (O(N)).',
    interviewSignals: 'Bài toán yêu cầu truy xuất dữ liệu ngẫu nhiên liên tục. Không biết trước kích thước mảng.',
    practiceProblems: 'Thường dùng làm cấu trúc lưu trữ cơ bản trong đa số các bài.',
    builtInMethods: [
      'add(e) - Thêm vào cuối (O(1))',
      'get(i) - Lấy phần tử tại vị trí i (O(1))',
      'set(i, e) - Thay thế phần tử (O(1))',
      'remove(i) / remove(Object) - Xóa phần tử (O(N) do phải dời chỗ)',
      'size() - Số lượng phần tử'
    ],
    memoryTrick: '🧠 ArrayList là cái balo thun. Bỏ nhiều đồ quá nó tự giãn ra, nhưng muốn lấy món đồ nằm tuốt dưới đáy thì phải lấy mấy món phía trên ra trước (Dời chỗ).',
    code: `List<Integer> list = new ArrayList<>();\nlist.add(10);\nlist.add(20);\nSystem.out.println(list.get(1)); // Lấy phần tử index 1`,
    output: `20`
  },
  {
    id: 'linkedlist',
    title: 'LinkedList',
    type: 'Doubly Linked',
    description: 'Danh sách liên kết đôi. Chèn/xóa ở đầu hoặc cuối mảng mất O(1), nhưng truy cập bằng index mất O(N). Thường ít dùng hơn ArrayList.',
    interviewSignals: 'Bài toán có thao tác thêm/xóa ở đầu hoặc giữa liên tục. Yêu cầu thiết kế LRU Cache.',
    practiceProblems: 'Reverse Linked List, Merge Two Sorted Lists, LRU Cache.',
    builtInMethods: [
      'addFirst(e) / addLast(e) - Thêm ở đầu / cuối O(1)',
      'removeFirst() / removeLast() - Xóa ở đầu / cuối O(1)',
      'getFirst() / getLast() - Lấy phần tử đầu / cuối'
    ],
    memoryTrick: '🧠 LinkedList như đoàn tàu hỏa. Muốn thêm/bớt toa ở đầu hoặc đuôi thì rất nhanh, nhưng muốn chèn một toa vào ngay giữa thì phải đi dọc từ đầu tàu xuống tìm đúng vị trí.',
    code: `LinkedList<Integer> list = new LinkedList<>();\nlist.addFirst(10); // O(1)\nlist.addLast(20);  // O(1)\nSystem.out.println(list.getFirst());`,
    output: `10`
  },
  {
    id: 'stack',
    title: 'Stack (ArrayDeque)',
    type: 'LIFO',
    description: 'Ngăn xếp (Vào sau ra trước). Trong thuật toán (ví dụ: DFS, chuỗi ngoặc), trong Java hiện đại luôn được khuyên dùng ArrayDeque thay vì class Stack cũ.',
    interviewSignals: 'Bài toán có tính chất "chờ xử lý ngược". Dấu ngoặc hợp lệ, nhiệt độ hàng ngày (Monotonic Stack), duyệt cây DFS.',
    practiceProblems: 'Valid Parentheses, Daily Temperatures, Evaluate Reverse Polish Notation.',
    builtInMethods: [
      'push(e) - Đẩy phần tử lên đỉnh Stack',
      'pop() - Lấy và xóa phần tử trên đỉnh Stack',
      'peek() - Xem phần tử trên đỉnh (không xóa)',
      'isEmpty() - Kiểm tra Stack rỗng'
    ],
    memoryTrick: '🧠 Stack là một hộp đựng bánh Pringles (khoai tây chiên ống). Miếng cất vào sau cùng sẽ là miếng bạn lấy ra ăn đầu tiên (Vào sau ra trước).',
    code: `Deque<Integer> stack = new ArrayDeque<>();\nstack.push(1); // Thêm vào đỉnh\nstack.push(2);\nSystem.out.println(stack.pop()); // Lấy ra từ đỉnh`,
    output: `2`
  }
];
