export const dsaSetMap = [
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
];
