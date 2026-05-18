export const javaKnowledge = {
  "Core: String & Array": [
    {
      id: 'string',
      title: 'String',
      type: 'Immutable',
      description: 'Chuỗi bất biến. Mỗi lần nối chuỗi (concatenation) sẽ tạo ra một object mới, gây lãng phí bộ nhớ và chậm chạp trong các vòng lặp.',
      interviewSignals: 'Dùng khi dữ liệu chuỗi không cần thay đổi. Các bài toán đối xứng (Palindrome), đếm ký tự (Anagram).',
      practiceProblems: 'Valid Palindrome, Valid Anagram, Longest Substring.',
      builtInMethods: [
        'length() - Lấy độ dài chuỗi',
        'charAt(i) - Lấy ký tự tại vị trí i',
        'substring(start, end) - Cắt chuỗi từ start đến end-1',
        'toCharArray() - Chuyển thành mảng char[] để dễ lặp',
        'equals() - So sánh 2 chuỗi (KHÔNG dùng ==)'
      ],
      memoryTrick: '🧠 String như một tờ giấy đã in. Đã in rồi thì không thể sửa chữ trên đó, muốn sửa phải in ra một tờ giấy khác (Tạo object mới).',
      code: `String s = "Hello";\ns += " World"; // Tạo object mới trong bộ nhớ\nSystem.out.println(s.substring(0, 5)); // Cắt chuỗi`,
      output: `Hello`
    },
    {
      id: 'stringbuilder',
      title: 'StringBuilder',
      type: 'Mutable',
      description: 'Chuỗi có thể thay đổi (Mutable). Rất quan trọng trong thuật toán khi cần thao tác nối (append), chèn (insert), xóa chuỗi liên tục với chi phí O(1) amortized.',
      interviewSignals: 'BẤT CỨ KHI NÀO có vòng lặp nối chuỗi. Các bài toán xây dựng kết quả từ từ, nén chuỗi (String Compression).',
      practiceProblems: 'String Compression, Decode String.',
      builtInMethods: [
        'append(str) - Nối chuỗi vào cuối O(1)',
        'insert(offset, str) - Chèn vào vị trí bất kỳ',
        'deleteCharAt(i) - Xóa ký tự tại vị trí i',
        'reverse() - Đảo ngược toàn bộ chuỗi (rất hay dùng)',
        'toString() - Chuyển về lại String'
      ],
      memoryTrick: '🧠 StringBuilder như một bảng viết phấn. Có thể bôi xóa, viết thêm chữ mới thoải mái trên cùng một cái bảng.',
      code: `StringBuilder sb = new StringBuilder("Java");\nsb.append(" 17"); // Thêm vào cuối (rất nhanh)\nsb.reverse();     // Đảo ngược chuỗi (in-place)\nSystem.out.println(sb.toString());`,
      output: `71 avaJ`
    },
    {
      id: 'arrays',
      title: 'Arrays (Mảng tĩnh)',
      type: 'Fixed Size',
      description: 'Mảng có kích thước cố định. Cung cấp lớp tiện ích Arrays để thao tác nhanh.',
      interviewSignals: 'Dữ liệu có kích thước biết trước. Rất hay đi kèm thuật toán "Two Pointers" (hai con trỏ) hoặc "Sliding Window" (cửa sổ trượt).',
      practiceProblems: 'Two Sum II, Container With Most Water, Maximum Subarray.',
      builtInMethods: [
        'arr.length - Lấy độ dài mảng (Chú ý: đây là thuộc tính, KHÔNG có ngoặc đơn)',
        'Arrays.sort(arr) - Sắp xếp mảng (O(N log N))',
        'Arrays.fill(arr, val) - Điền giá trị val cho tất cả phần tử',
        'Arrays.binarySearch(arr, key) - Tìm kiếm nhị phân (mảng phải được sort trước)',
        'Arrays.copyOf(arr, newLength) - Copy mảng'
      ],
      memoryTrick: '🧠 Mảng là một khay đựng trứng inox. Khay có 10 lỗ thì chỉ để được 10 quả, không thể bẻ rách hay nối thêm lỗ được.',
      code: `int[] arr = {5, 2, 8, 1};\nArrays.sort(arr); // Sắp xếp mảng nguyên thủy\nSystem.out.println(Arrays.toString(arr));`,
      output: `[1, 2, 5, 8]`
    }
  ],
  "DSA: List & Stack": [
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
  ],
  "DSA: Queue & Heap": [
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
  ],
  "DSA: Set & Map": [
    {
      id: 'hashmap',
      title: 'HashMap',
      type: 'Hash Table',
      description: 'Lưu trữ Key-Value không duy trì thứ tự. Thao tác chèn/tìm kiếm trung bình là O(1).',
      interviewSignals: 'Bài toán tra cứu cực nhanh O(1). Đếm tần suất xuất hiện, lưu vết phần tử đã duyệt. Các bài toán Two Sum biến thể.',
      practiceProblems: 'Two Sum, Group Anagrams, Longest Substring Without Repeating Characters.',
      builtInMethods: [
        'put(K, V) - Thêm cặp Key-Value',
        'get(K) - Lấy Value theo Key',
        'getOrDefault(K, default) - Lấy Value, nếu không có trả về default',
        'containsKey(K) - Kiểm tra Key tồn tại O(1)',
        'keySet() / values() / entrySet() - Lấy tập hợp Key / Value / Cả hai'
      ],
      memoryTrick: '🧠 HashMap như tủ đồ siêu thị. Bạn gửi đồ, máy nhả ra mã vạch (Key). Lần sau quét mã vạch là lấy được đúng món đồ của bạn (Value) ngay lập tức O(1).',
      code: `Map<String, Integer> map = new HashMap<>();\nmap.put("Apple", 1);\nmap.put("Apple", map.getOrDefault("Apple", 0) + 1);\nSystem.out.println(map.get("Apple"));`,
      output: `2`
    },
    {
      id: 'treemap',
      title: 'TreeMap',
      type: 'Red-Black Tree',
      description: 'Lưu trữ Key-Value và tự động sắp xếp theo Key (O(log N)).',
      interviewSignals: 'Cần một Map nhưng dữ liệu phải luôn được DUY TRÌ SẮP XẾP. Lấy phần tử cận trên/cận dưới (floorKey/ceilingKey).',
      practiceProblems: 'My Calendar I, Time Based Key-Value Store.',
      builtInMethods: [
        'put(K, V) / get(K) / containsKey(K) - Thêm/Tìm kiếm (O(log N))',
        'firstKey() / lastKey() - Lấy Key nhỏ nhất/lớn nhất',
        'floorKey(K) - Tìm Key lớn nhất mà <= K',
        'ceilingKey(K) - Tìm Key nhỏ nhất mà >= K'
      ],
      memoryTrick: '🧠 TreeMap như danh bạ điện thoại. Mỗi lần thêm số mới, nó tự động chèn đúng vào thứ tự A-Z. Rất dễ tìm người đứng trước/sau mình.',
      code: `TreeMap<Integer, String> treeMap = new TreeMap<>();\ntreeMap.put(10, "Ten");\ntreeMap.put(5, "Five");\nSystem.out.println(treeMap.firstKey()); // Lấy key nhỏ nhất`,
      output: `5`
    },
    {
      id: 'hashset',
      title: 'HashSet',
      type: 'Hash Table',
      description: 'Tập hợp các phần tử không trùng lặp (O(1)). Dùng để loại bỏ trùng lặp hoặc làm mảng đánh dấu (visited array).',
      interviewSignals: 'Bài toán yêu cầu "Duy nhất" (Unique), hoặc kiểm tra sự tồn tại O(1). Phát hiện chu trình.',
      practiceProblems: 'Contains Duplicate, Longest Consecutive Sequence, Valid Sudoku.',
      builtInMethods: [
        'add(e) - Thêm phần tử (trả về false nếu đã tồn tại)',
        'contains(e) - Kiểm tra phần tử tồn tại O(1)',
        'remove(e) - Xóa phần tử',
        'size() - Số lượng phần tử'
      ],
      memoryTrick: '🧠 HashSet là câu lạc bộ VIP, chỉ nhận thẻ thành viên độc nhất. Ai có thẻ rồi mà xin vào nữa thì bảo vệ (add) sẽ trả về false và không cho vào thêm.',
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
      interviewSignals: 'Dùng khi cần trích xuất dữ liệu thỏa một điều kiện.',
      practiceProblems: 'Các task thao tác với Collection trong công việc thực tế.',
      builtInMethods: [
        'stream().filter(Predicate) - Lọc phần tử',
        'collect(Collectors.toList()) - Lấy mảng kết quả',
        'count() - Đếm số lượng phần tử thỏa mãn'
      ],
      memoryTrick: '🧠 Filter là cái rây bột. Chỉ hạt bột mịn (thỏa điều kiện true) mới lọt qua được.',
      code: `List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);\nList<Integer> result = list.stream()\n    .filter(n -> n % 2 == 0)\n    .collect(Collectors.toList());`,
      output: `[2, 4, 6]`
    },
    {
      id: 'map',
      title: 'map(Function)',
      type: 'Intermediate',
      description: 'Biến đổi mỗi phần tử thành kiểu khác.',
      interviewSignals: 'Chuyển đổi DTO sang Entity và ngược lại.',
      practiceProblems: 'Mapping data layers trong Backend.',
      builtInMethods: [
        'stream().map(Function) - Biến đổi phần tử',
        'mapToInt(ToIntFunction) - Biến đổi thẳng thành IntStream để tính toán nguyên thủy',
        'flatMap() - Trải phẳng nhiều mảng con thành mảng lớn'
      ],
      memoryTrick: '🧠 Map là cỗ máy biến hình. Đưa củ khoai tây (A) vào, nó gọt vỏ cắt lát thành snack (B). Số lượng đầu vào bằng đầu ra, nhưng hình dạng đã bị đổi.',
      code: `List<Integer> list = Arrays.asList(1, 2, 3);\nList<Integer> result = list.stream()\n    .map(n -> n * 2)\n    .collect(Collectors.toList());`,
      output: `[2, 4, 6]`
    },
    {
      id: 'reduce',
      title: 'reduce(BinaryOperator)',
      type: 'Terminal',
      description: 'Gộp tất cả phần tử lại thành 1 giá trị duy nhất. Thường dùng tính tổng, tích.',
      interviewSignals: 'Tính toán tổng hợp (Aggreration), gom nhóm số liệu ngắn gọn.',
      practiceProblems: 'Thống kê dữ liệu, báo cáo (Reporting).',
      builtInMethods: [
        'reduce(identity, accumulator) - identity là giá trị khởi tạo ban đầu',
        'reduce(Integer::sum) - Cách viết ngắn gọn cộng dồn'
      ],
      memoryTrick: '🧠 Reduce là việc cuộn quả cầu tuyết. Ban đầu có cục tuyết nhỏ (identity), lăn qua từng phần tử nó dính vào to dần thành 1 quả cầu to tướng.',
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
  ],
  "Data Types & Conversions": [
    {
      id: 'primitives',
      title: 'Primitive Data Types',
      type: 'Memory',
      description: 'Các kiểu dữ liệu nguyên thủy trong Java và kích thước bộ nhớ tương ứng. int là kiểu phổ biến nhất.',
      interviewSignals: 'Câu hỏi lý thuyết về tràn số (overflow), tối ưu bộ nhớ, kích thước biến.',
      practiceProblems: 'Reverse Integer, String to Integer (atoi).',
      builtInMethods: [
        '1 byte = 8 bits',
        'int = 4 bytes (32 bits): -2^31 đến 2^31-1',
        'long = 8 bytes (64 bits)',
        'boolean = thường là 1 bit'
      ],
      memoryTrick: '🧠 Int là cái hộp giày (vừa vặn đa số đồ), Long là cái vali to (đựng số siêu lớn), Byte là cái ví tiền nhỏ.',
      code: `int maxInt = Integer.MAX_VALUE; // 2147483647\nint minInt = Integer.MIN_VALUE; // -2147483648\nSystem.out.println("Max int + 1 = " + (maxInt + 1)); // Bị tràn số (Overflow)`,
      output: `Max int + 1 = -2147483648`
    },
    {
      id: 'base_conversions',
      title: 'Number Base Conversions',
      type: 'Utility',
      description: 'Cách biểu diễn và chuyển đổi giữa các hệ cơ số: Thập phân (10), Nhị phân (2), Bát phân (8), Thập lục phân (16).',
      interviewSignals: 'Bài toán xử lý bitwise (Bit Manipulation), chuyển đổi hệ đếm.',
      practiceProblems: 'Number of 1 Bits, Reverse Bits, Single Number.',
      builtInMethods: [
        'Integer.toBinaryString(n) - Đổi sang chuỗi nhị phân',
        'Integer.toHexString(n) - Đổi sang chuỗi Hex',
        'Integer.parseInt("11", 2) - Phân tích chuỗi nhị phân thành int nguyên thủy'
      ],
      memoryTrick: '🧠 Prefix để nhận diện hệ cơ số: 0b (Binary/Nhị phân), 0 (Octal/Bát phân), 0x (Hex/Thập lục phân).',
      code: `int binary = 0b1111; // 15\nint hex = 0xF;       // 15\nString binStr = Integer.toBinaryString(binary);\nSystem.out.println(binary == hex); // true\nSystem.out.println("Binary string: " + binStr);`,
      output: `true\nBinary string: 1111`
    }
  ],
  "OOP Core": [
    {
      id: 'oop_principles',
      title: '4 Pillars of OOP',
      type: 'Architecture',
      description: '4 tính chất cốt lõi của Lập trình hướng đối tượng trong Java: Đóng gói (Encapsulation), Kế thừa (Inheritance), Đa hình (Polymorphism), Trừu tượng (Abstraction).',
      interviewSignals: 'Câu hỏi phỏng vấn System Design, thiết kế class. Phân biệt Abstract Class và Interface. Overloading vs Overriding.',
      practiceProblems: 'Design Parking Lot, Design LRU Cache (Sử dụng OOP).',
      builtInMethods: [
        'Đóng gói: private field + public getter/setter',
        'Kế thừa: extends / implements',
        'Đa hình: Overriding (Run-time) / Overloading (Compile-time)',
        'Trừu tượng: abstract class / interface'
      ],
      memoryTrick: '🧠 Đóng gói là hộp thuốc (che giấu hóa chất), Kế thừa là con cái giống cha mẹ, Đa hình là 1 nút bấm nhiều tác dụng, Trừu tượng là lái xe không cần hiểu cấu tạo động cơ.',
      code: `abstract class Animal { abstract void speak(); }\nclass Dog extends Animal {\n    @Override\n    void speak() { System.out.println("Woof!"); }\n}\nAnimal a = new Dog(); // Đa hình\na.speak();`,
      output: `Woof!`
    }
  ]
};
