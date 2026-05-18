export const coreStringArray = [
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
];
