export const javaKnowledge = {
  "Core: String & Array": [
    {
      id: 'string',
      title: 'String',
      type: 'Immutable',
      description: 'Chuỗi bất biến. Mỗi lần nối chuỗi (concatenation) sẽ tạo ra một object mới, gây lãng phí bộ nhớ và chậm chạp trong các vòng lặp.',
      code: `String s = "Hello";\ns += " World"; // Tạo object mới trong bộ nhớ\nSystem.out.println(s.substring(0, 5)); // Cắt chuỗi`,
      output: `Hello`
    },
    {
      id: 'stringbuilder',
      title: 'StringBuilder',
      type: 'Mutable',
      description: 'Chuỗi có thể thay đổi (Mutable). Rất quan trọng trong thuật toán khi cần thao tác nối (append), chèn (insert), xóa chuỗi liên tục với chi phí O(1) amortized.',
      code: `StringBuilder sb = new StringBuilder("Java");\nsb.append(" 17"); // Thêm vào cuối (rất nhanh)\nsb.reverse();     // Đảo ngược chuỗi (in-place)\nSystem.out.println(sb.toString());`,
      output: `71 avaJ`
    },
    {
      id: 'arrays',
      title: 'Arrays (Mảng tĩnh)',
      type: 'Fixed Size',
      description: 'Mảng có kích thước cố định. Cung cấp lớp tiện ích Arrays để thao tác nhanh như sort(), binarySearch(), fill(), copyOf().',
      code: `int[] arr = {5, 2, 8, 1};\nArrays.sort(arr); // Sắp xếp mảng nguyên thủy (Dual-Pivot Quicksort O(N log N))\nSystem.out.println(Arrays.toString(arr));`,
      output: `[1, 2, 5, 8]`
    }
  ],
  "DSA: List & Stack": [
    {
      id: 'arraylist',
      title: 'ArrayList',
      type: 'Dynamic Array',
      description: 'Mảng động, tự tăng kích thước khi đầy. Truy cập phần tử bằng index cực nhanh (O(1)), nhưng chèn/xóa ở giữa mảng bị chậm (O(N)) do phải dời các phần tử.',
      code: `List<Integer> list = new ArrayList<>();\nlist.add(10);\nlist.add(20);\nSystem.out.println(list.get(1)); // Lấy phần tử index 1`,
      output: `20`
    },
    {
      id: 'linkedlist',
      title: 'LinkedList',
      type: 'Doubly Linked',
      description: 'Danh sách liên kết đôi. Chèn/xóa ở đầu hoặc cuối mảng mất O(1), nhưng truy cập bằng index mất O(N). Thường ít dùng hơn ArrayList.',
      code: `LinkedList<Integer> list = new LinkedList<>();\nlist.addFirst(10); // O(1)\nlist.addLast(20);  // O(1)\nSystem.out.println(list.getFirst());`,
      output: `10`
    },
    {
      id: 'stack',
      title: 'Stack (ArrayDeque)',
      type: 'LIFO',
      description: 'Ngăn xếp (Vào sau ra trước). Trong thuật toán (ví dụ: DFS, chuỗi ngoặc), trong Java hiện đại luôn được khuyên dùng ArrayDeque thay vì class Stack cũ (vì Stack bị đồng bộ hóa chậm).',
      code: `Deque<Integer> stack = new ArrayDeque<>();\nstack.push(1); // Thêm vào đỉnh\nstack.push(2);\nSystem.out.println(stack.pop()); // Lấy ra từ đỉnh`,
      output: `2`
    }
  ],
  "DSA: Queue & Heap": [
    {
      id: 'queue',
      title: 'Queue (ArrayDeque)',
      type: 'FIFO',
      description: 'Hàng đợi (Vào trước ra trước). Dùng nhiều trong thuật toán duyệt đồ thị BFS (Breadth-First Search). Dùng offer() để thêm, poll() để lấy ra an toàn.',
      code: `Queue<Integer> queue = new ArrayDeque<>();\nqueue.offer(1); // Thêm vào cuối\nqueue.offer(2);\nSystem.out.println(queue.poll()); // Lấy ra phần tử đầu`,
      output: `1`
    },
    {
      id: 'priority_queue',
      title: 'PriorityQueue (Heap)',
      type: 'Min/Max Heap',
      description: 'Hàng đợi ưu tiên. Luôn giữ phần tử nhỏ nhất (hoặc lớn nhất) ở đầu với O(log N) cho mỗi lần chèn/xóa. Rất mạnh cho bài toán Top-K phần tử hoặc thuật toán Dijkstra.',
      code: `// Max-Heap (ưu tiên số lớn)\nPriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);\nmaxHeap.offer(10);\nmaxHeap.offer(30);\nmaxHeap.offer(20);\nSystem.out.println(maxHeap.poll()); // Lấy số lớn nhất`,
      output: `30`
    }
  ],
  "DSA: Set & Map": [
    {
      id: 'hashmap',
      title: 'HashMap',
      type: 'Hash Table',
      description: 'Lưu trữ Key-Value không duy trì thứ tự. Thao tác chèn/tìm kiếm trung bình là O(1). Dùng rất nhiều làm Frequency Map (đếm tần suất) trong thuật toán.',
      code: `Map<String, Integer> map = new HashMap<>();\nmap.put("Apple", 1);\nmap.put("Apple", map.getOrDefault("Apple", 0) + 1);\nSystem.out.println(map.get("Apple"));`,
      output: `2`
    },
    {
      id: 'treemap',
      title: 'TreeMap',
      type: 'Red-Black Tree',
      description: 'Lưu trữ Key-Value và tự động sắp xếp theo Key (O(log N)). Dùng khi cần lấy các phần tử theo thứ tự tăng/giảm dần, hoặc tìm closest element.',
      code: `TreeMap<Integer, String> treeMap = new TreeMap<>();\ntreeMap.put(10, "Ten");\ntreeMap.put(5, "Five");\nSystem.out.println(treeMap.firstKey()); // Lấy key nhỏ nhất`,
      output: `5`
    },
    {
      id: 'hashset',
      title: 'HashSet',
      type: 'Hash Table',
      description: 'Tập hợp các phần tử không trùng lặp (O(1)). Đặc biệt hữu ích để loại bỏ phần tử trùng hoặc tạo HashSet làm mảng đánh dấu (visited array) khi duyệt đồ thị.',
      code: `Set<Integer> set = new HashSet<>();\nset.add(1);\nset.add(1);\nset.add(2);\nSystem.out.println(set.size()); // Trả về 2 vì trùng lặp bị bỏ qua`,
      output: `2`
    }
  ],
  "Stream API": [
    {
      id: 'filter',
      title: 'filter(Predicate)',
      type: 'Intermediate',
      description: 'Lọc các phần tử thỏa mãn điều kiện. Ở ví dụ này, lọc các số chẵn.',
      code: `List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);\nList<Integer> result = list.stream()\n    .filter(n -> n % 2 == 0)\n    .collect(Collectors.toList());`,
      output: `[2, 4, 6]`
    },
    {
      id: 'map',
      title: 'map(Function)',
      type: 'Intermediate',
      description: 'Biến đổi mỗi phần tử thành kiểu khác. Ví dụ này nhân đôi mỗi số.',
      code: `List<Integer> list = Arrays.asList(1, 2, 3);\nList<Integer> result = list.stream()\n    .map(n -> n * 2)\n    .collect(Collectors.toList());`,
      output: `[2, 4, 6]`
    },
    {
      id: 'reduce',
      title: 'reduce(BinaryOperator)',
      type: 'Terminal',
      description: 'Gộp tất cả phần tử lại thành 1 giá trị duy nhất. Thường dùng tính tổng, tích.',
      code: `List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);\nint sum = list.stream()\n    .reduce(0, Integer::sum);`,
      output: `15`
    }
  ],
  "Multithreading": [
    {
      id: 'thread',
      title: 'Thread & Runnable',
      type: 'Core',
      description: 'Tạo một luồng mới bằng cách implement interface Runnable hoặc kế thừa Thread.',
      code: `Runnable task = () -> {\n    System.out.println("Running in: " + Thread.currentThread().getName());\n};\nnew Thread(task).start();`,
      output: `Running in: Thread-0`
    }
  ]
};
