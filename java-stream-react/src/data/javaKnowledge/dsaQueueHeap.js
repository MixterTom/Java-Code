export const dsaQueueHeap = [
  {
    id: 'queue',
    title: 'Queue (ArrayDeque)',
    type: 'FIFO',
    description: 'Hàng đợi (Vào trước ra trước). Dùng nhiều trong thuật toán duyệt đồ thị BFS (Breadth-First Search).',
    interviewSignals: 'Bài toán tìm "Đường đi ngắn nhất" trên lưới/đồ thị không trọng số. Duyệt cây theo tầng (Level Order Traversal).',
    practiceProblems: 'Number of Islands, Binary Tree Level Order Traversal, Rotting Oranges.',
    builtInMethods: [
      'offer(e) - Thêm phần tử vào cuối hàng đợi',
      'poll() - Lấy và xóa phần tử ở đầu hàng đợi (trả null nếu rỗng)',
      'peek() - Xem phần tử ở đầu (không xóa)',
      'isEmpty() - Kiểm tra rỗng'
    ],
    memoryTrick: '🧠 Queue là hàng người đợi mua trà sữa. Ai xếp hàng trước thì được phục vụ trước (Vào trước ra trước).',
    code: `Queue<Integer> queue = new ArrayDeque<>();\nqueue.offer(1); // Thêm vào cuối\nqueue.offer(2);\nSystem.out.println(queue.poll()); // Lấy ra phần tử đầu`,
    output: `1`
  },
  {
    id: 'priority_queue',
    title: 'PriorityQueue (Heap)',
    type: 'Min/Max Heap',
    description: 'Hàng đợi ưu tiên. Luôn giữ phần tử nhỏ nhất (hoặc lớn nhất) ở đầu với O(log N) cho mỗi lần chèn/xóa.',
    interviewSignals: 'Từ khóa "Top K" (K phần tử lớn nhất/nhỏ nhất), "Largest/Smallest", trộn nhiều danh sách đã sắp xếp.',
    practiceProblems: 'Kth Largest Element in an Array, Merge k Sorted Lists, Top K Frequent Elements.',
    builtInMethods: [
      'offer(e) - Thêm phần tử (Tự động sắp xếp O(log N))',
      'poll() - Lấy phần tử ưu tiên nhất (Min/Max)',
      'peek() - Xem phần tử ưu tiên nhất',
      'remove(Object) - Xóa một phần tử cụ thể (Chậm O(N))'
    ],
    memoryTrick: '🧠 PriorityQueue là phòng cấp cứu bệnh viện. Không cần biết bạn đến sớm hay muộn, ai bệnh nặng nhất (Độ ưu tiên cao nhất) sẽ được chữa trước.',
    code: `// Max-Heap (ưu tiên số lớn)\nPriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);\nmaxHeap.offer(10);\nmaxHeap.offer(30);\nmaxHeap.offer(20);\nSystem.out.println(maxHeap.poll()); // Lấy số lớn nhất`,
    output: `30`
  }
];
