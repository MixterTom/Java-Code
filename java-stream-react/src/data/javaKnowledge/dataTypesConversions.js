export const dataTypesConversions = [
  {
    id: 'primitives_references',
    title: '1. Kiểu dữ liệu (Primitive vs Reference)',
    type: 'Bộ nhớ & Phân loại',
    description: 'Java phân chia hệ thống kiểu dữ liệu thành 2 nhóm chính: Kiểu nguyên thủy (Primitive) lưu trữ giá trị thật trực tiếp trên vùng nhớ Stack, và Kiểu tham chiếu (Reference) lưu trữ địa chỉ trỏ đến đối tượng nằm trên vùng nhớ Heap.',
    interviewSignals: 'Phân biệt cách cấp phát bộ nhớ (Stack vs Heap), cơ chế so sánh giá trị (== vs .equals()) và cách xử lý giá trị null.',
    practiceProblems: 'Thiết kế chương trình quản lý thông tin học sinh sử dụng cả String, Array và các kiểu int, double, boolean.',
    builtInMethods: [
      'byte - Kiểu số nguyên cực nhỏ (1 byte, từ -128 đến 127)',
      'int - Kiểu số nguyên tiêu chuẩn phổ biến (4 bytes)',
      'char - Kiểu ký tự đơn (2 bytes, dùng nháy đơn \'A\')',
      'boolean - Kiểu logic (chỉ nhận true hoặc false)',
      'String - Kiểu tham chiếu lưu chuỗi ký tự (nháy kép "Hello")',
      'null - Giá trị đặc biệt chỉ kiểu tham chiếu mới có thể nhận'
    ],
    memoryTrick: '🧠 Kiểu nguyên thủy giống như tiền mặt đút trong túi (xài trực tiếp rất nhanh). Kiểu tham chiếu giống như tấm séc hoặc chìa khóa két sắt (trỏ tới tài sản thực sự nằm ở một nơi khác trong bộ nhớ Heap rộng lớn).',
    code: `public class Main {
    public static void main(String[] args) {
        // 1. Kiểu nguyên thủy (Lưu trực tiếp giá trị)
        int population = 1000000;
        boolean isLoggedIn = true;
        
        // 2. Kiểu tham chiếu (Lưu địa chỉ trỏ tới đối tượng trên Heap)
        String greeting = "Hello, World!"; 
        int[] scores = {85, 90, 78};
        
        System.out.println("Dân số: " + population);
        System.out.println("Lời chào: " + greeting);
    }
}`,
    output: `Dân số: 1000000\nLời chào: Hello, World!`
  },
  {
    id: 'operators',
    title: '2. Toán tử trong Java (Operators)',
    type: 'Tính toán & Điều kiện',
    description: 'Các ký hiệu đặc biệt dùng để thao tác trên dữ liệu. Java hỗ trợ toán tử số học, logic, quan hệ, phép gán, toán tử một ngôi và toán tử ba ngôi.',
    interviewSignals: 'Hiểu cơ chế hoạt động của toán tử ba ngôi (Ternary), các toán tử logic &&, || và cơ chế đoản mạch (Short-circuit).',
    practiceProblems: 'Xây dựng máy tính cầm tay đơn giản; tìm số lớn nhất trong 3 số bằng toán tử ba ngôi.',
    builtInMethods: [
      '+ - * / % - Các toán tử số học cơ bản',
      '== != > < >= <= - Các toán tử quan hệ (trả về boolean)',
      '&& || ! - Các toán tử logic kết hợp điều kiện',
      '= += -= *= /= - Các toán tử gán và tự tính toán',
      '++ -- - Toán tử một ngôi tăng/giảm 1 đơn vị',
      'condition ? expr1 : expr2 - Toán tử ba ngôi viết tắt cho if-else'
    ],
    memoryTrick: '🧠 Toán tử ba ngôi giống như một ngã rẽ thông minh: Nếu điều kiện trước dấu ? là ĐÚNG, lấy giá trị sau dấu ?; nếu SAI, lấy giá trị sau dấu :. Tất cả xử lý gói gọn trên một dòng!',
    code: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        
        // Toán tử logic & quan hệ
        boolean check = (a + b > 12) && (a != b); // true
        
        // Toán tử ba ngôi viết tắt cho if-else
        int max = (a > b) ? a : b; 
        
        System.out.println("Kết quả so sánh: " + check);
        System.out.println("Số lớn nhất: " + max);
    }
}`,
    output: `Kết quả so sánh: true\nSố lớn nhất: 10`
  },
  {
    id: 'arrays_core',
    title: '3. Mảng & Duyệt Mảng (Arrays & Loops)',
    type: 'Cấu trúc dữ liệu',
    description: 'Mảng là tập hợp nhiều phần tử có cùng kiểu dữ liệu được xếp liền kề nhau trong bộ nhớ Heap. Kích thước mảng là cố định và không thể thay đổi sau khi khởi tạo.',
    interviewSignals: 'Tại sao mảng trong Java có kích thước cố định? Cách duyệt mảng 1D, 2D và cơ chế hoạt động của mảng Jagged (Mảng lởm chởm).',
    practiceProblems: 'Viết thuật toán tìm Max/Min trong mảng; tính tổng ma trận 2D; giải bài toán đảo ngược mảng.',
    builtInMethods: [
      'dataType[] arrayName - Khai báo mảng',
      'new dataType[size] - Cấp phát bộ nhớ cho mảng',
      'array.length - Thuộc tính lấy ra độ dài cố định của mảng',
      'index 0 - Chỉ mục bắt đầu của phần tử đầu tiên trong mảng'
    ],
    memoryTrick: '🧠 Mảng giống như một ĐOÀN TÀU có số toa cố định. Mỗi toa có số thứ tự (index) bắt đầu từ 0. Muốn tăng số toa, bạn bắt buộc phải đóng một đoàn tàu mới toanh và chuyển khách sang!',
    code: `public class Main {
    public static void main(String[] args) {
        // 1. Khai báo & khởi tạo mảng 1 chiều
        int[] scores = {85, 90, 78};
        
        // Duyệt mảng bằng vòng lặp for-each hiện đại
        System.out.print("Điểm số: ");
        for (int score : scores) {
            System.out.print(score + " ");
        }
        System.out.println();
        
        // 2. Mảng 2 chiều (Ma trận)
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };
        System.out.println("Phần tử hàng 2 cột 3: " + matrix[1][2]); // 6
    }
}`,
    output: `Điểm số: 85 90 78 \nPhần tử hàng 2 cột 3: 6`
  },
  {
    id: 'arrays_utility',
    title: '4. Lớp Tiện Ích Arrays (Arrays Utility & Algos)',
    type: 'Tiện ích & Thuật toán',
    description: 'Java cung cấp lớp tiện ích java.util.Arrays chứa rất nhiều phương thức tĩnh cực mạnh để thao tác nhanh như sắp xếp, tìm kiếm nhị phân, sao chép và so sánh các phần tử trong mảng tĩnh.',
    interviewSignals: 'Sử dụng Arrays.sort() (O(N log N)) khi cần sắp xếp nhanh. Tìm kiếm nhị phân chỉ hoạt động khi mảng đã được sắp xếp trước.',
    practiceProblems: 'Tìm vị trí của số K trong mảng bằng Binary Search; khởi tạo toàn bộ mảng với giá trị mặc định -1.',
    builtInMethods: [
      'Arrays.sort(arr) - Sắp xếp mảng tăng dần (chi phí O(N log N))',
      'Arrays.fill(arr, val) - Điền giá trị val cho tất cả phần tử trong mảng',
      'Arrays.binarySearch(arr, key) - Tìm kiếm nhị phân phần tử key (mảng phải được sort trước)',
      'Arrays.copyOf(arr, newLen) - Tạo bản sao của mảng với kích thước mới',
      'Arrays.toString(arr) - Chuyển mảng thành dạng chuỗi đẹp mắt để in ra console'
    ],
    memoryTrick: '🧠 java.util.Arrays giống như một chiếc Hộp công cụ đa năng (Toolbox) đi kèm đoàn tàu. Bạn không cần tự viết tay thuật toán sắp xếp hay tìm kiếm, chỉ cần mở hộp ra xài rất tiện và nhanh.',
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1};
        
        // 1. Sắp xếp mảng
        Arrays.sort(arr); // -> {1, 2, 5, 8}
        
        // 2. Tìm kiếm nhị phân
        int index = Arrays.binarySearch(arr, 5); // Vị trí số 5 trong mảng
        
        System.out.println("Mảng sau sort: " + Arrays.toString(arr));
        System.out.println("Vị trí số 5: " + index);
    }
}`,
    output: `Mảng sau sort: [1, 2, 5, 8]\nVị trí số 5: 2`
  },
  {
    id: 'string',
    title: '5. Chuỗi Bất Biến (String)',
    type: 'Immutable Class',
    description: 'String trong Java là chuỗi ký tự bất biến (Immutable). Một khi đã tạo ra, nội dung của nó không thể thay đổi. Mọi thao tác nối hay sửa chuỗi thực chất đều tạo ra một đối tượng String hoàn toàn mới trong bộ nhớ String Pool.',
    interviewSignals: 'Tại sao String lại bất biến? Phân biệt String Pool trên Heap. Tại sao KHÔNG nên dùng toán tử == để so sánh chuỗi (phải dùng .equals()).',
    practiceProblems: 'Kiểm tra chuỗi đối xứng (Valid Palindrome), kiểm tra chuỗi đảo chữ (Valid Anagram).',
    builtInMethods: [
      'length() - Trả về số lượng ký tự trong chuỗi',
      'charAt(i) - Lấy ký tự đơn tại vị trí chỉ mục i',
      'substring(start, end) - Cắt lấy chuỗi con từ chỉ mục start đến end-1',
      'toCharArray() - Chuyển đổi chuỗi thành mảng char[] để dễ lặp',
      'equals(other) - So sánh nội dung hai chuỗi (so sánh giá trị thật)'
    ],
    memoryTrick: '🧠 String giống như một TỜ GIẤY ĐÃ IN CHỮ. Đã in rồi thì không thể tẩy xóa hay sửa đổi trên tờ giấy đó. Muốn có nội dung mới, bạn bắt buộc phải in ra một tờ giấy hoàn toàn khác (Tạo Object mới).',
    code: `public class Main {
    public static void main(String[] args) {
        String s = "Hello";
        s += " World"; // Tạo object String mới trong vùng nhớ!
        
        System.out.println("Kết quả cắt chuỗi: " + s.substring(0, 5));
        System.out.println("So sánh nội dung: " + s.equals("Hello World"));
    }
}`,
    output: `Kết quả cắt chuỗi: Hello\nSo sánh nội dung: true`
  },
  {
    id: 'stringbuilder',
    title: '6. Chuỗi Thay Đổi (StringBuilder)',
    type: 'Mutable Class',
    description: 'StringBuilder đại diện cho chuỗi ký tự có thể thay đổi (Mutable). Hỗ trợ chèn, sửa, đảo ngược và nối chuỗi cực kỳ mạnh mẽ trên cùng một vùng nhớ mà không sinh ra đối tượng mới, giúp tiết kiệm bộ nhớ tối đa.',
    interviewSignals: 'Sử dụng StringBuilder bất cứ khi nào cần nối chuỗi liên tục trong vòng lặp lớn (O(N) thay vì O(N^2) của String). Khác biệt giữa StringBuilder (non-thread-safe) và StringBuffer (thread-safe).',
    practiceProblems: 'String Compression (Nén chuỗi), Đảo ngược từ trong chuỗi (Reverse Words).',
    builtInMethods: [
      'append(str) - Nối chuỗi vào cuối cùng (chi phí O(1) trung bình)',
      'insert(offset, str) - Chèn chuỗi vào vị trí chỉ định',
      'deleteCharAt(i) - Xóa ký tự tại vị trí chỉ mục i',
      'reverse() - Đảo ngược toàn bộ chuỗi cực nhanh (in-place)',
      'toString() - Chuyển đổi StringBuilder về lại kiểu String thông thường'
    ],
    memoryTrick: '🧠 StringBuilder giống như một chiếc BẢNG VIẾT PHẤN. Bạn có thể tự do viết thêm chữ, bôi xóa, chèn ký tự hay đảo chữ thoải mái trực tiếp trên mặt bảng đó mà không cần đổi bảng mới.',
    code: `public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Java");
        sb.append(" 17"); // Thêm vào cuối (không sinh object mới)
        sb.reverse();     // Đảo ngược chuỗi trực tiếp
        
        System.out.println("Kết quả: " + sb.toString());
    }
}`,
    output: `Kết quả: 71 avaJ`
  },
  {
    id: 'base_conversions',
    title: '7. Chuyển đổi Cơ số (Base Conversions)',
    type: 'Tiện ích hệ đếm',
    description: 'Cách biểu diễn và chuyển đổi linh hoạt giữa các hệ cơ số phổ biến trong lập trình: Thập phân (10), Nhị phân (2), Bát phân (8), Thập lục phân (16).',
    interviewSignals: 'Cách biểu diễn số nguyên dạng Nhị phân (0b) và Thập lục phân (0x) trong Java. Thuật toán thao tác bitwise.',
    practiceProblems: 'Number of 1 Bits (Đếm số bit 1), Reverse Bits (Đảo ngược bit).',
    builtInMethods: [
      'Integer.toBinaryString(n) - Đổi số sang chuỗi nhị phân',
      'Integer.toHexString(n) - Đổi số sang chuỗi Thập lục phân (Hex)',
      'Integer.parseInt(str, base) - Phân tích chuỗi hệ đếm bất kỳ thành số int nguyên thủy'
    ],
    memoryTrick: '🧠 Dấu hiệu nhận biết hệ đếm trong Java: 0b là Nhị phân (Binary), 0 là Bát phân (Octal), 0x là Thập lục phân (Hexadecimal).',
    code: `public class Main {
    public static void main(String[] args) {
        int binary = 0b1111; // Hệ nhị phân = 15 thập phân
        int hex = 0xF;       // Hệ thập lục phân = 15 thập phân
        
        String binStr = Integer.toBinaryString(binary);
        
        System.out.println("So sánh nhị phân và hex: " + (binary == hex));
        System.out.println("Chuỗi nhị phân: " + binStr);
    }
}`,
    output: `So sánh nhị phân và hex: true\nChuỗi nhị phân: 1111`
  },
  {
    id: 'datatype_review_quizzes',
    title: '8. Câu hỏi Ôn tập & Trắc nghiệm (Java Basics Quizzes)',
    type: 'Luyện tập & Tự kiểm tra',
    description: 'Tuyển tập 10 câu hỏi đố nhanh kiểm tra kiến thức về WORA, bình luận, gói, kiểu dữ liệu, toán tử, mảng và 5 câu tự luận tư duy.',
    interviewSignals: 'Củng cố nền tảng Core Java trước khi đi sâu vào lập trình hướng đối tượng hoặc các thuật toán nâng cao.',
    practiceProblems: 'Hãy click lật mở từng thẻ câu hỏi bên dưới để xem đáp án chuẩn xác nhất!',
    builtInMethods: [
      'Câu 1 - 3 - Kiểm tra triết lý WORA, phân biệt 3 loại Comments và vai trò của Packages.',
      'Câu 4 - 5 - Kiểm tra bản chất bộ nhớ của Kiểu nguyên thủy vs Kiểu tham chiếu.',
      'Câu 6 - 8 - Kiểm tra các toán tử so sánh quan hệ, logic && và ||, toán tử ba ngôi.',
      'Câu 9 - 10 - Tìm hiểu lý do mảng cố định kích thước và ưu thế của vòng lặp for-each.'
    ],
    memoryTrick: '🧠 Hãy tự nhẩm câu trả lời trong đầu trước khi click để tạo phản xạ ghi nhớ sâu sắc cho não bộ nhé!',
    quizzes: [
      {
        q: "\"Write Once, Run Anywhere\" (WORA) trong Java là gì?",
        a: "WORA nghĩa là mã nguồn Java sau khi biên dịch thành bytecode trung gian có thể chạy trên bất kỳ hệ điều hành nào (Windows, macOS, Linux) mà không cần biên dịch lại, miễn là hệ điều hành đó có cài đặt Máy ảo Java (JVM) tương thích."
      },
      {
        q: "Nêu ba loại bình luận khác nhau trong Java và mục đích chính của chúng.",
        a: "Ba loại bình luận bao gồm:\n1) Bình luận một dòng (//): giải thích nhanh.\n2) Bình luận nhiều dòng (/* ... */): giải thích đoạn code dài.\n3) Bình luận tài liệu (/** ... */): tạo tài liệu API Javadoc tự động."
      },
      {
        q: "Tại sao việc sử dụng các gói (packages) lại quan trọng trong các dự án Java lớn?",
        a: "Packages giúp nhóm các lớp và giao diện có liên quan lại với nhau một cách khoa học, module hóa dự án lớn và đặc biệt là tránh xung đột đặt tên (nhiều lớp trùng tên nhau nhưng nằm ở các gói khác nhau thì vẫn hợp lệ)."
      },
      {
        q: "Giải thích sự khác biệt cơ bản giữa kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu trong Java.",
        a: "- Kiểu nguyên thủy (Primitive): Lưu trực tiếp giá trị thực tế trong Stack, kích thước cố định, không thể nhận giá trị null.\n- Kiểu tham chiếu (Reference): Lưu địa chỉ bộ nhớ trỏ đến đối tượng thực tế trên Heap, kích thước linh hoạt, có thể nhận giá trị null."
      },
      {
        q: "Cho ví dụ về một kiểu dữ liệu nguyên thủy và một kiểu dữ liệu tham chiếu, cùng với một trường hợp sử dụng phù hợp.",
        a: "- Kiểu nguyên thủy: 'int', dùng để lưu các số nguyên đơn giản như tuổi (int age = 20;).\n- Kiểu tham chiếu: 'String', dùng để lưu trữ và thao tác với văn bản (String name = \"Antigravity\";)."
      },
      {
        q: "Toán tử quan hệ được sử dụng để làm gì và chúng trả về loại giá trị nào?",
        a: "Toán tử quan hệ (==, !=, >, <, >=, <=) dùng để so sánh hai giá trị hoặc biểu thức. Chúng luôn trả về một giá trị chân trị kiểu boolean (chỉ có thể là true hoặc false)."
      },
      {
        q: "Mô tả sự khác biệt giữa toán tử && (AND logic) và || (OR logic).",
        a: "- && (AND logic): Chỉ trả về true nếu TẤT CẢ các điều kiện đều đúng (true).\n- || (OR logic): Trả về true chỉ cần ÍT NHẤT MỘT điều kiện đúng (true)."
      },
      {
        q: "Trong Java, toán tử ba ngôi (ternary operator) là gì và cú pháp của nó như thế nào?",
        a: "Là toán tử điều kiện rút gọn cho câu lệnh if-else truyền thống. Cú pháp: `điều_kiện ? biểu_thức_đúng : biểu_thức_sai;`."
      },
      {
        q: "Giải thích tại sao mảng trong Java được coi là cấu trúc dữ liệu \"kích thước cố định\".",
        a: "Vì ngay tại thời điểm khởi tạo, bạn phải chỉ rõ số phần tử của mảng. JVM sẽ cấp phát một vùng nhớ liền kề khớp với kích thước đó trên Heap. Kích thước này bị khóa cứng và không thể phình to hay co lại trong suốt thời gian chạy."
      },
      {
        q: "Ưu điểm của việc sử dụng vòng lặp for-each nâng cao so với vòng lặp for truyền thống khi lặp qua một mảng là gì?",
        a: "For-each cung cấp cú pháp ngắn gọn, sạch đẹp, dễ đọc hơn. Nó tự động quản lý chỉ mục index chạy từ đầu đến cuối mảng, hạn chế tối đa lỗi vượt quá chỉ mục mảng (ArrayIndexOutOfBoundsException)."
      }
    ],
    essays: [
      {
        q: "Thảo luận sâu về triết lý \"Write Once, Run Anywhere\" (WORA) của Java. Giải thích cách JVM và bytecode đóng góp vào tính độc lập nền tảng này.",
        hint: "Bytecode là định dạng trung gian độc lập hệ điều hành. JVM đóng vai trò như một thông dịch viên tại chỗ dịch Bytecode thành mã máy gốc của hệ điều hành đó."
      },
      {
        q: "So sánh và đối chiếu các kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu trong Java về khía cạnh lưu trữ bộ nhớ (Stack vs Heap) và tốc độ xử lý.",
        hint: "Nguyên thủy nằm trực tiếp trên Stack nên truy cập cực kỳ nhanh, tốn ít bộ nhớ. Tham chiếu lưu địa chỉ trên Stack trỏ sang Heap nên tốn thêm chi phí tìm kiếm vùng nhớ và dọn rác (Garbage Collector)."
      },
      {
        q: "Phân tích tầm quan trọng của các toán tử logic và cơ chế đoản mạch (Short-circuit evaluation) của && và || trong việc tối ưu hóa hiệu suất.",
        hint: "Với &&, nếu vế đầu là false, Java lập tức dừng lại trả về false mà không thèm tính vế sau. Với ||, nếu vế đầu là true, Java dừng lại trả về true ngay lập tức."
      },
      {
        q: "Thiết kế một giải pháp sử dụng mảng đa chiều để quản lý điểm số của học sinh trong một trường học (Học sinh và các Môn học).",
        hint: "Sử dụng mảng 2 chiều int[studentCount][subjectCount] nơi mỗi dòng đại diện cho một học sinh, mỗi cột đại diện cho điểm số một môn học cụ thể."
      },
      {
        q: "Tại sao việc tuân thủ các quy ước đặt tên (Naming Conventions) và cấu trúc gói (Packages) lại là tiêu chí sống còn trong các dự án phát triển phần mềm doanh nghiệp?",
        hint: "Giúp mã nguồn nhất quán, dễ đọc đối với các lập trình viên mới gia nhập dự án, tránh xung đột tên lớp và dễ dàng bảo trì hệ thống quy mô lớn."
      }
    ]
  },
  {
    id: 'datatype_faqs',
    title: '9. Câu hỏi Phỏng vấn thường gặp (Java Basics FAQs)',
    type: 'Kinh nghiệm Phỏng vấn',
    description: 'Tổng hợp 8 câu hỏi phỏng vấn kinh điển về Giới thiệu Java, cấu trúc mã, Comments, Packages, Kiểu dữ liệu, Toán tử, Mảng và Best Practices.',
    interviewSignals: 'Tổng hợp các câu trả lời chi tiết và lập luận thuyết phục nhất dành cho nhà tuyển dụng để khẳng định nền tảng vững vàng của bạn.',
    practiceProblems: 'Click vào từng tiêu đề bên dưới để xem lời giải đáp chi tiết từ chuyên gia!',
    builtInMethods: [
      'FAQ 1 & 2 - Bản chất lịch sử Java, nguyên lý JVM/WORA và vai trò của Comments.',
      'FAQ 3 & 4 - Ứng dụng thực tiễn của Packages và phân biệt rạch ròi Primitive vs Reference.',
      'FAQ 5 & 6 - Bản chất 6 nhóm toán tử và cơ chế quản lý mảng 1 chiều, đa chiều trên Heap.',
      'FAQ 7 & 8 - Cách duyệt mảng tối ưu hiệu năng và 5 Best Practices trong xây dựng cấu trúc dự án.'
    ],
    memoryTrick: '🧠 Khi phỏng vấn, hãy luôn kết hợp giải thích lý thuyết bộ nhớ Stack/Heap kèm theo ví dụ thực tế đời sống để đạt điểm tối đa từ nhà tuyển dụng!',
    faqs: [
      {
        q: "FAQ 1: Java là gì và những đặc điểm chính giúp nó trở thành một trong những ngôn ngữ phổ biến nhất?",
        a: "Java là một ngôn ngữ lập trình cấp cao, hướng đối tượng, dựa trên lớp và cực kỳ bảo mật do James Gosling phát triển năm 1995.\n\nCác đặc điểm chính nổi bật bao gồm:\n✔ Viết một lần, chạy mọi nơi (WORA): Mã Java biên dịch ra bytecode chạy trên mọi hệ điều hành nhờ JVM.\n✔ Hướng đối tượng hoàn chỉnh: Hỗ trợ mạnh mẽ Đóng gói, Kế thừa, Đa hình.\n✔ Tự động thu gom rác (Garbage Collection): Tự động giải phóng bộ nhớ Heap, giảm thiểu rò rỉ RAM.\n✔ Bảo mật cao: Không cho phép thao tác con trỏ trực tiếp, tích hợp cơ chế bảo vệ Class Loader."
      },
      {
        q: "FAQ 2: Các loại bình luận (comments) khác nhau trong Java là gì và tại sao chúng quan trọng?",
        a: "Java cung cấp 3 loại bình luận chính:\n1. Bình luận một dòng (//): Giải thích ngắn gọn ở cuối dòng code.\n2. Bình luận nhiều dòng (/* ... */): Dùng để ghi chú cả một đoạn thuật toán dài.\n3. Bình luận tài liệu (/** ... */): Dùng ở đầu class hoặc method, có thể dùng công cụ Javadoc quét tự động để xuất ra trang tài liệu HTML chuyên nghiệp.\n\nTầm quan trọng: Giúp cải thiện độ rõ ràng của mã nguồn, hỗ trợ bảo trì dự án lâu dài và tăng hiệu quả hợp tác làm việc nhóm."
      },
      {
        q: "FAQ 3: \"Packages\" trong Java là gì và tại sao chúng lại cực kỳ hữu ích trong quản lý dự án?",
        a: "Packages (gói) là cơ chế phân loại và gom nhóm các lớp, giao diện liên quan vào các thư mục logic riêng biệt.\n\nLợi ích chính:\n✔ Quản lý không gian tên: Cho phép các lớp trùng tên tồn tại ở các gói khác nhau mà không lỗi (ví dụ: java.util.Date và java.sql.Date).\n✔ Bảo mật mã nguồn: Kết hợp với Access Modifier để hạn chế truy cập từ các gói bên ngoài.\n✔ Tổ chức cấu trúc: Cấu trúc thư mục của dự án bắt buộc phải ánh xạ khớp hoàn toàn với package khai báo."
      },
      {
        q: "FAQ 4: Phân biệt chi tiết giữa kiểu dữ liệu nguyên thủy (primitive) và kiểu dữ liệu tham chiếu (reference) trong Java.",
        a: "Đây là câu hỏi phỏng vấn cực kỳ phổ biến:\n\n1. Kiểu nguyên thủy (Primitive):\n- Có 8 kiểu: byte, short, int, long, float, double, char, boolean.\n- Lưu giá trị thật trực tiếp trên vùng nhớ Stack.\n- Kích thước cố định (ví dụ: int luôn là 4 bytes).\n- Không thể nhận giá trị null.\n\n2. Kiểu tham chiếu (Reference):\n- Gồm: String, Arrays, Classes, Interfaces, Enums.\n- Lưu địa chỉ bộ nhớ trên Stack trỏ đến đối tượng thật trên Heap.\n- Kích thước linh hoạt tùy thuộc cấu trúc đối tượng.\n- Có thể nhận giá trị null (gây ra lỗi NullPointerException nếu không xử lý kỹ)."
      },
      {
        q: "FAQ 5: Các loại toán tử cơ bản trong Java và chức năng cụ thể của chúng?",
        a: "Java cung cấp hệ thống toán tử đa dạng:\n✔ Toán tử số học (+, -, *, /, %): Dùng để tính toán số học.\n✔ Toán tử quan hệ (==, !=, >, <, >=, <=): So sánh giá trị, trả về boolean.\n✔ Toán tử logic (&&, ||, !): Kết hợp các điều kiện boolean.\n✔ Toán tử gán (=, +=, -=, *=, /=): Thiết lập giá trị mới cho biến.\n✔ Toán tử một ngôi (++, --, !, ~): Tăng/giảm biến hoặc đảo bit.\n✔ Toán tử ba ngôi (condition ? expr1 : expr2): Viết tắt rẽ nhánh điều kiện."
      },
      {
        q: "FAQ 6: Mảng (Array) trong Java hoạt động như thế nào trên khía cạnh bộ nhớ và cách khai báo, khởi tạo?",
        a: "Mảng trong Java là một đối tượng đặc biệt lưu trữ tập hợp các phần tử cùng kiểu liên tiếp nhau.\n\nHoạt động bộ nhớ:\n- Tên biến mảng nằm trên Stack.\n- Vùng nhớ lưu các phần tử thật nằm liền kề nhau trên Heap.\n- Kích thước mảng cố định ngay khi dùng từ khóa 'new' và không thể co giãn.\n\nKhai báo & Khởi tạo:\n`int[] numbers = new int[5]; // Tạo mảng trống 5 phần tử`\n`int[] scores = {90, 85, 80}; // Khởi tạo nhanh với giá trị sẵn`"
      },
      {
        q: "FAQ 7: Làm thế nào để duyệt qua các phần tử của mảng một chiều và mảng 2 chiều một cách tối ưu?",
        a: "✔ Mảng 1 chiều:\n- Dùng for-each khi chỉ muốn đọc giá trị mà không quan tâm chỉ số index: `for(int num : numbers) { ... }`\n- Dùng for truyền thống khi cần thao tác với index hoặc sửa đổi giá trị.\n\n✔ Mảng 2 chiều (Ma trận):\n- Phải dùng 2 vòng lặp lồng nhau (nested loop). Vòng ngoài duyệt qua từng hàng (matrix.length), vòng trong duyệt qua từng cột trong hàng đó (matrix[i].length)."
      },
      {
        q: "FAQ 8: Trình bày các phương pháp lập trình tốt nhất (best practices) khi viết mã nguồn Java.",
        a: "5 nguyên tắc vàng trong phát triển Java:\n1. Đặt tên có nghĩa: Áp dụng camelCase cho phương thức/biến, PascalCase cho tên Lớp, và viết hoa toàn bộ cho hằng số (SNAKE_CASE).\n2. Quản lý tài nguyên triệt để: Sử dụng cấu trúc try-with-resources để tự động giải phóng kết nối database, file stream, tránh rò rỉ bộ nhớ.\n3. Viết bình luận đúng chỗ: Chỉ viết giải thích thuật toán khó, tránh giải thích hiển nhiên.\n4. Đóng gói bảo mật: Luôn đặt thuộc tính là private và kiểm soát qua Getter/Setter.\n5. Tuân thủ quy ước thụt lề chuẩn để mã nguồn nhất quán, dễ đọc."
      }
    ]
  }
];
