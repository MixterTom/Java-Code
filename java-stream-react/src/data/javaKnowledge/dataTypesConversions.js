export const dataTypesConversions = [
  {
    id: 'intro_wora',
    title: '1. Giới thiệu Java & Nguyên tắc WORA',
    type: 'Tổng quan & Triết lý',
    description: 'Java là ngôn ngữ lập trình bậc cao, hướng đối tượng, độc lập nền tảng nhờ máy ảo JVM và trình biên dịch bytecode.',
    interviewSignals: 'Hiểu bản chất của nguyên tắc "Write Once, Run Anywhere" (WORA), vai trò của JVM, JRE, JDK và các đặc trưng cốt lõi của ngôn ngữ Java.',
    practiceProblems: 'Viết và biên dịch một chương trình Java đơn giản; phân tích các tính năng bảo mật, quản lý bộ nhớ của Java.',
    builtInMethods: [
      'JVM - Java Virtual Machine (Máy ảo Java chạy bytecode)',
      'Bytecode - Mã trung gian (.class) được tạo ra từ mã nguồn (.java)',
      'WORA - Triết lý Viết một lần, Chạy mọi nơi của Java',
      'JDK - Bộ công cụ phát triển Java dành cho lập trình viên',
      'JRE - Môi trường thực thi Java dùng để chạy ứng dụng'
    ],
    memoryTrick: '🧠 Mã nguồn Java (.java) giống như bản thiết kế bằng tiếng Anh. Trình biên dịch dịch nó thành Bytecode (.class) giống như ngôn ngữ Esperanto chung. JVM ở mỗi hệ điều hành đóng vai trò là thông dịch viên dịch Esperanto sang tiếng bản địa (mã máy gốc).',
    code: `public class Main {
    public static void main(String[] args) {
        // Nguyên tắc WORA: Chạy trên mọi nền tảng có JVM
        System.out.println("Write Once, Run Anywhere!");
    }
}`,
    output: `Write Once, Run Anywhere!`
  },
  {
    id: 'basic_structure',
    title: '2. Cấu trúc Lập trình Cơ bản',
    type: 'Cấu trúc mã nguồn',
    description: 'Tìm hiểu Comments, Packages, Source Files, Classes, Methods, Import và các quy tắc thực hành tốt (Best Practices).',
    interviewSignals: 'Hiểu quy tắc đặt tên (naming conventions), cách phân chia package, cách import các lớp và quản lý tài nguyên hiệu quả.',
    practiceProblems: 'Tổ chức mã nguồn theo package; viết Javadoc cho phương thức; thực thi chương trình nhập/xuất dữ liệu cơ bản.',
    builtInMethods: [
      '//, /* */, /** */ - Ba loại bình luận (Comments) trong Java',
      'package - Khai báo thư mục logic chứa lớp nguồn',
      'import - Nạp các thư viện, lớp từ package khác vào sử dụng',
      'public class ClassName - Tên class public trùng tên file .java',
      'try-with-resources - Đóng tài nguyên tự động sau khi sử dụng'
    ],
    memoryTrick: '🧠 Package giống như thư mục phân loại tệp tin trong máy tính của bạn. Class giống như một tệp tin đơn lẻ. Quy tắc đặt tên và cấu trúc mã giống như biển chỉ dẫn giao thông giúp lập trình viên không bị lạc trong các dự án doanh nghiệp khổng lồ.',
    code: `package com.example.basics; // Khai báo package

import java.util.ArrayList; // Import lớp từ gói java.util

public class Main {
    // Phương thức chính khởi chạy ứng dụng
    public static void main(String[] args) {
        // Comment một dòng
        /* Comment nhiều dòng
           để mô tả thuật toán */
        ArrayList<String> list = new ArrayList<>();
        list.add("Java Structure");
        System.out.println("Dự án chạy thành công: " + list);
    }
}`,
    output: `Dự án chạy thành công: [Java Structure]`
  },
  {
    id: 'primitives_references',
    title: '3. Kiểu dữ liệu (Primitive vs Reference)',
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
    title: '4. Toán tử trong Java (Operators)',
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
    title: '5. Mảng & Duyệt Mảng (Arrays & Loops)',
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
    title: '6. Lớp Tiện Ích Arrays (Arrays Utility & Algos)',
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
    title: '7. Chuỗi Bất Biến (String)',
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
    title: '8. Chuỗi Thay Đổi (StringBuilder)',
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
    title: '9. Chuyển đổi Cơ số (Base Conversions)',
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
    id: 'datatype_glossary',
    title: '10. Thuật ngữ cốt lõi (Java Basics Glossary)',
    type: 'Glossary',
    description: 'Các định nghĩa và thuật ngữ cốt lõi về ngôn ngữ Java, kiểu dữ liệu, toán tử, mảng và lập trình cơ bản.',
    bulletSections: [
      {
        title: "Tổng quan về Java & Hướng đối tượng",
        items: [
          "**Java**: Một ngôn ngữ lập trình cấp cao, dựa trên lớp, hướng đối tượng, được phát triển bởi Sun Microsystems (nay là Oracle).",
          "**Máy ảo Java (JVM)**: Một môi trường thời gian chạy trừu tượng thực thi bytecode Java. Đây là thành phần chính cho phép tính năng \"Write Once, Run Anywhere\".",
          "**Bytecode**: Mã trung gian được tạo ra khi mã nguồn Java được biên dịch. Bytecode này sau đó được JVM phiên dịch hoặc biên dịch kịp thời để thực thi.",
          "**\"Write Once, Run Anywhere\" (WORA)**: Triết lý cốt lõi của Java, cho phép mã đã biên dịch chạy trên bất kỳ nền tảng nào hỗ trợ JVM mà không cần biên dịch lại.",
          "**Hướng đối tượng (Object-Oriented)**: Một phương pháp lập trình dựa trên các khái niệm về \"đối tượng\", có thể chứa dữ liệu và mã dưới dạng các thuộc tính và phương thức. Các tính năng chính bao gồm đóng gói, kế thừa và đa hình.",
          "**Đóng gói (Encapsulation)**: Gói dữ liệu (thuộc tính) và các phương thức hoạt động trên dữ liệu đó vào một đơn vị duy nhất (lớp), đồng thời ẩn các chi tiết triển khai khỏi bên ngoài.",
          "**Kế thừa (Inheritance)**: Một cơ chế trong đó một lớp (lớp con) có thể kế thừa các trường và phương thức từ một lớp khác (lớp cha), cho phép tái sử dụng mã.",
          "**Đa hình (Polymorphism)**: Khả năng một đối tượng có nhiều dạng, cho phép các đối tượng của các lớp khác nhau được đối xử như các đối tượng của một kiểu chung thông qua một giao diện chung.",
          "**Đa luồng (Multithreaded)**: Khả năng một chương trình thực thi đồng thời nhiều phần của chính nó (luồng) để cải thiện hiệu suất hoặc khả năng phản hồi.",
          "**Trình biên dịch Just-In-Time (JIT)**: Một phần của JVM biên dịch bytecode thành mã máy cục bộ trong thời gian chạy, giúp tăng tốc độ thực thi chương trình Java."
        ]
      },
      {
        title: "Cấu trúc Mã & Kiểu dữ liệu",
        items: [
          "**Bình luận (Comments)**: Các đoạn văn bản trong mã nguồn bị bỏ qua bởi trình biên dịch, được sử dụng để giải thích mã cho người đọc.",
          "**Gói (Package)**: Một cơ chế để tổ chức các lớp và giao diện Java thành các nhóm liên quan, giúp quản lý không gian tên và module hóa.",
          "**Lớp (Class)**: Một bản thiết kế hoặc khuôn mẫu để tạo đối tượng, định nghĩa các thuộc tính và phương thức mà các đối tượng của nó sẽ có.",
          "**Phương thức (Method)**: Một khối mã thực hiện một nhiệm vụ cụ thể và được liên kết với một đối tượng hoặc lớp.",
          "**Kiểu dữ liệu nguyên thủy (Primitive Data Types)**: Các kiểu dữ liệu cơ bản trong Java (ví dụ: int, byte, boolean, char) lưu trữ giá trị trực tiếp và có kích thước cố định.",
          "**Kiểu dữ liệu tham chiếu (Reference Data Types)**: Các kiểu dữ liệu trong Java (ví dụ: String, Array, Class, Interface) lưu trữ địa chỉ của một đối tượng trong bộ nhớ, chứ không phải bản thân giá trị.",
          "**Chuỗi (String)**: Một kiểu dữ liệu tham chiếu trong Java được sử dụng để lưu trữ một chuỗi ký tự.",
          "**Giao diện (Interface)**: Một bản thiết kế cho một lớp, chỉ chứa các khai báo phương thức trừu tượng và hằng số. Một lớp có thể triển khai nhiều giao diện.",
          "**Enum**: Một kiểu dữ liệu đặc biệt cho phép một biến là một tập hợp các hằng số được xác định trước."
        ]
      },
      {
        title: "Toán tử & Mảng",
        items: [
          "**Toán tử (Operator)**: Các ký hiệu đặc biệt thực hiện các thao tác trên một hoặc nhiều toán hạng (ví dụ: +, -, ==, &&).",
          "**Toán tử số học (Arithmetic Operators)**: Được sử dụng để thực hiện các phép toán số học như cộng, trừ, nhân, chia, lấy dư.",
          "**Toán tử quan hệ (Relational Operators)**: Được sử dụng để so sánh hai giá trị (ví dụ: bằng, không bằng, lớn hơn).",
          "**Toán tử logic (Logical Operators)**: Được sử dụng để kết hợp hoặc sửa đổi các biểu thức boolean (ví dụ: AND, OR, NOT).",
          "**Toán tử gán (Assignment Operators)**: Được sử dụng để gán giá trị cho một biến (ví dụ: =, +=).",
          "**Toán tử một ngôi (Unary Operators)**: Các toán tử hoạt động trên một toán hạng duy nhất (ví dụ: tăng ++, giảm --, phủ định !).",
          "**Toán tử ba ngôi (Ternary Operator)**: Một toán tử điều kiện đặc biệt hoạt động với ba toán hạng, là dạng viết tắt của câu lệnh if-else.",
          "**Mảng (Array)**: Một cấu trúc dữ liệu lưu trữ một tập hợp các phần tử có cùng kiểu dữ liệu trong một vị trí bộ nhớ liền kề.",
          "**Mảng đa chiều (Multi-dimensional Array)**: Một mảng của các mảng, thường được sử dụng để đại diện cho bảng hoặc ma trận (ví dụ: mảng 2D).",
          "**Chỉ mục mảng (Array Index)**: Vị trí số của một phần tử trong một mảng. Trong Java, chỉ mục bắt đầu từ 0.",
          "**Mảng Jagged (Jagged Array)**: Một loại mảng đa chiều trong Java nơi các hàng (hoặc các chiều con) có thể có độ dài khác nhau."
        ]
      }
    ],
    code: `// Chúc bạn học tốt! Nắm vững thuật ngữ cốt lõi giúp bạn tự tin phỏng vấn.`,
    output: `Java Basics Glossary loaded.`
  },
  {
    id: 'datatype_review_quizzes',
    title: '11. Câu hỏi Ôn tập & Trắc nghiệm (Java Basics Quizzes)',
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
        a: "\"Write Once, Run Anywhere\" (WORA) là một tính năng chính của Java có nghĩa là mã Java, sau khi được biên dịch thành bytecode, có thể chạy trên bất kỳ nền tảng nào miễn là nền tảng đó có Máy ảo Java (JVM) tương thích. Điều này loại bỏ nhu cầu biên dịch lại mã cho các hệ điều hành khác nhau, nâng cao tính di động."
      },
      {
        q: "Nêu ba loại bình luận khác nhau trong Java và mục đích chính của chúng.",
        a: "Ba loại bình luận trong Java là: bình luận một dòng (//) để giải thích nhanh, bình luận nhiều dòng (/* ... */) cho các đoạn mã dài hơn, và bình luận tài liệu (/** ... */) được sử dụng để tạo Javadoc và tài liệu API tự động. Mỗi loại phục vụ mục đích khác nhau trong việc cải thiện sự rõ ràng và khả năng bảo trì mã."
      },
      {
        q: "Tại sao việc sử dụng các gói (packages) lại quan trọng trong các dự án Java lớn?",
        a: "Việc sử dụng các gói (packages) trong Java rất quan trọng vì chúng giúp nhóm các lớp và giao diện liên quan lại với nhau, tránh xung đột đặt tên giữa các lớp có cùng tên nhưng khác chức năng. Ngoài ra, gói còn giúp quản lý cấu trúc dự án lớn một cách hiệu quả hơn bằng cách tổ chức mã thành các mô-đun logic."
      },
      {
        q: "Giải thích sự khác biệt cơ bản giữa kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu trong Java.",
        a: "Sự khác biệt cơ bản là kiểu dữ liệu nguyên thủy lưu trữ giá trị thực tế của dữ liệu một cách trực tiếp trong bộ nhớ, có kích thước cố định và không thể là null. Ngược lại, kiểu dữ liệu tham chiếu không lưu trữ giá trị trực tiếp mà lưu trữ địa chỉ bộ nhớ (tham chiếu) đến đối tượng hoặc tập hợp dữ liệu, cho phép các cấu trúc phức tạp hơn và có thể là null."
      },
      {
        q: "Cho ví dụ về một kiểu dữ liệu nguyên thủy và một kiểu dữ liệu tham chiếu, cùng với một trường hợp sử dụng phù hợp cho mỗi loại.",
        a: "Một ví dụ về kiểu dữ liệu nguyên thủy là int, dùng để lưu trữ các số nguyên lớn, ví dụ: int population = 1000000;. Một ví dụ về kiểu dữ liệu tham chiếu là String, dùng để xử lý văn bản, ví dụ: String greeting = \"Hello, World!\";."
      },
      {
        q: "Toán tử quan hệ được sử dụng để làm gì và chúng trả về loại giá trị nào?",
        a: "Toán tử quan hệ (còn gọi là toán tử so sánh) được sử dụng để so sánh hai giá trị hoặc biểu thức. Chúng trả về một giá trị boolean, tức là true nếu điều kiện so sánh là đúng hoặc false nếu điều kiện so sánh là sai."
      },
      {
        q: "Mô tả sự khác biệt giữa toán tử && (AND logic) và || (OR logic).",
        a: "Toán tử && (AND logic) trả về true chỉ khi *cả hai* điều kiện được kết hợp đều là true; nếu không, nó trả về false. Ngược lại, toán tử || (OR logic) trả về true nếu *ít nhất một* trong các điều kiện được kết hợp là true; nó chỉ trả về false khi cả hai điều kiện đều là false."
      },
      {
        q: "Trong Java, toán tử ba ngôi (ternary operator) là gì và cú pháp của nó như thế nào?",
        a: "Toán tử ba ngôi trong Java là một toán tử điều kiện viết tắt của câu lệnh if-else truyền thống, hoạt động với ba toán quang. Cú pháp của nó là condition ? expression1 : expression2;, trong đó expression1 được đánh giá nếu condition là true, và expression2 được đánh giá nếu condition là false."
      },
      {
        q: "Giải thích tại sao mảng trong Java được coi là cấu trúc dữ liệu \"kích thước cố định\".",
        a: "Mảng trong Java được coi là cấu trúc dữ liệu \"kích thước cố định\" vì một khi bạn đã khai báo và khởi tạo một mảng với một kích thước nhất định, bạn không thể thay đổi số lượng phần tử mà nó có thể chứa. Để thay đổi kích thước, bạn phải tạo một mảng mới và sao chép các phần tử cũ sang."
      },
      {
        q: "Ưu điểm của việc sử dụng vòng lặp for-each nâng cao so với vòng lặp for truyền thống khi lặp qua một mảng là gì?",
        a: "Ưu điểm của việc sử dụng vòng lặp for-each nâng cao là nó cung cấp một cú pháp ngắn gọn và dễ đọc hơn để lặp qua tất cả các phần tử trong một mảng hoặc tập hợp. Nó tự động xử lý việc quản lý chỉ mục, giúp giảm lỗi và làm cho mã sạch hơn khi bạn chỉ cần truy cập các giá trị của phần tử chứ không cần chỉ mục của chúng."
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
    title: '12. Câu hỏi Phỏng vấn thường gặp (Java Basics FAQs)',
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
        q: "FAQ 1: Java là gì và những đặc điểm chính của nó là gì?",
        a: "Java là một ngôn ngữ lập trình cấp cao, hướng đối tượng, dựa trên lớp, được phát triển bởi James Gosling tại Sun Microsystems (nay là Oracle và được phát hành lần đầu vào năm 1995. Đặc điểm nổi bật của Java là nguyên tắc \"Viết một lần, chạy mọi nơi\" (WORA), đạt được thông qua việc biên dịch mã Java thành bytecode, sau đó có thể chạy trên bất kỳ nền tảng nào có Máy ảo Java (JVM).\n\nCác tính năng chính của Java bao gồm:\n- **Hướng đối tượng:** Hỗ trợ đóng gói, kế thừa và đa hình thông qua các đối tượng và lớp.\n- **Độc lập nền tảng:** Đạt được nhờ JVM.\n- **Đơn giản:** Được thiết kế để dễ học và sử dụng.\n- **Bảo mật:** Tích hợp các tính năng bảo mật và không sử dụng con trỏ rõ ràng.\n- **Mạnh mẽ:** Có khả năng quản lý bộ nhớ mạnh mẽ, xử lý ngoại lệ và thu gom rác.\n- **Đa luồng:** Hỗ trợ thực thi đồng thời nhiều phần của chương trình.\n- **Hiệu suất cao:** Các trình biên dịch Just-In-Time (JIT) tối ưu hóa việc thực thi bytecode.\n- **Phân tán:** Được thiết kế cho các ứng dụng tập trung vào mạng.\n- **Động:** Có thể thích ứng với các môi trường đang phát triển."
      },
      {
        q: "FAQ 2: Các loại bình luận (comments) khác nhau trong Java là gì và tại sao chúng quan trọng?",
        a: "Trong Java, có ba loại bình luận chính:\n- **Bình luận một dòng:** Bắt đầu bằng //. Tất cả những gì theo sau dấu gạch chéo là một bình luận. Ví dụ: // Đây là bình luận một dòng.\n- **Bình luận nhiều dòng:** Bắt đầu bằng /* và kết thúc bằng */. Chúng có thể kéo dài nhiều dòng. Ví dụ: /* Đây là bình luận nhiều dòng. Nó có thể kéo dài nhiều dòng. */\n- **Bình luận tài liệu (Documentation comments):** Bắt đầu bằng /**. Chúng được sử dụng để tạo tài liệu, bao gồm Javadoc. Ví dụ: /** * Lớp Calculator cung cấp các phương thức * để thực hiện các phép toán số học cơ bản. */\n\nBình luận rất quan trọng vì các lý do sau:\n- **Độ rõ ràng:** Làm rõ logic phức tạp của mã.\n- **Bảo trì:** Cung cấp ngữ cảnh và giảm nhầm lẫn khi mã được xem xét hoặc sửa đổi sau này.\n- **Hợp tác:** Giúp các lập trình viên khác hiểu công việc của bạn."
      },
      {
        q: "FAQ 3: \"Packages\" trong Java là gì và tại sao chúng lại hữu ích?",
        a: "Packages (gói) trong Java là các cơ chế dùng để nhóm các lớp (classes) và giao diện (interfaces) có liên quan lại với nhau. Chúng giúp tổ chức mã nguồn của bạn và giải quyết vấn đề xung đột tên.\n\nCác lợi ích chính của packages:\n- **Nhóm các lớp và giao diện liên quan:** Giúp quản lý các dự án lớn hiệu quả hơn.\n- **Tránh xung đột tên:** Cho phép các lớp có cùng tên tồn tại trong các gói khác nhau mà không gây ra lỗi.\n- **Cấu trúc thư mục:** Cấu trúc thư mục của gói nên khớp với khai báo gói (ví dụ: com.example.myapp tương ứng với thư mục com/example/myapp).\n\nĐể tạo một gói, bạn sử dụng từ khóa package ở đầu tệp nguồn. Khi cần sử dụng các lớp từ các gói khác, bạn phải nhập chúng bằng câu lệnh import."
      },
      {
        q: "FAQ 4: Phân biệt giữa các kiểu dữ liệu nguyên thủy (primitive data types) và kiểu dữ liệu tham chiếu (reference data types) trong Java.",
        a: "Trong Java, các kiểu dữ liệu được chia thành hai loại chính:\n\n**Kiểu dữ liệu nguyên thủy (Primitive data types):**\n- **Đặc điểm:** Lưu trữ giá trị thực tế trực tiếp. Có kích thước mặc định và giá trị cố định, không thay đổi. Không thể chứa giá trị null.\n- **Mục đích:** Để lưu trữ các giá trị đơn giản, cơ bản.\n- **Ví dụ:**\n  + byte: Lưu trữ số nguyên từ -128 đến 127 (ví dụ: byte age = 25;).\n  + short: Lưu trữ số nguyên từ -32,768 đến 32,767 (ví dụ: short temperature = -5;).\n  + int: Lưu trữ số nguyên lớn hơn byte và short (ví dụ: int population = 1000000;).\n  + char: Lưu trữ một ký tự đơn (ví dụ: char initial = 'A';).\n  + boolean: Đại diện cho giá trị true hoặc false (ví dụ: boolean isLoggedIn = true;).\n\n**Kiểu dữ liệu tham chiếu (Reference data types):**\n- **Đặc điểm:** Lưu trữ địa chỉ bộ nhớ (tham chiếu) đến các đối tượng hoặc tập hợp dữ liệu. Hỗ trợ các cấu trúc dữ liệu phức tạp hơn. Có thể chứa giá trị null.\n- **Mục đích:** Để định vị các đối tượng hoặc các tập hợp dữ liệu, tổ chức dữ liệu và chức năng liên quan.\n- **Ví dụ:**\n  + String: Chuỗi ký tự (ví dụ: String greeting = \"Hello, World!\";).\n  + Arrays: Tập hợp các giá trị cùng kiểu (ví dụ: int[] scores = {85, 90, 78, 92};).\n  + Classes: Bản thiết kế để tạo đối tượng, tổ chức dữ liệu và hàm cùng nhau (ví dụ: public class Student { String name; int enrollmentYear; }).\n  + Interfaces: Định nghĩa các phương thức cần thiết cho các lớp triển khai, cung cấp một khuôn mẫu cho các lớp (ví dụ: public interface LMSOperations { void enrollStudent(); }).\n  + Enums: Đại diện cho các tập hợp giá trị có tên cố định (ví dụ: enum DaysOfWeek { MONDAY, TUESDAY, ... })."
      },
      {
        q: "FAQ 5: Các loại toán tử (operators) cơ bản trong Java là gì và chức năng của chúng?",
        a: "Các toán tử là các ký hiệu đặc biệt giúp thực hiện các thao tác trên dữ liệu. Trong Java, chúng bao gồm:\n- **Toán tử số học (Arithmetic operators):** Thực hiện các phép toán số học cơ bản.\n  + (Cộng), - (Trừ), * (Nhân), / (Chia), % (Chia lấy dư).\n  Ví dụ: int result = 10 + 5; // result là 15\n- **Toán tử quan hệ (Relational operators):** Dùng để so sánh hai giá trị hoặc biểu thức, trả về giá trị boolean (true hoặc false).\n  == (Bằng), != (Không bằng), > (Lớn hơn), < (Nhỏ hơn), >= (Lớn hơn hoặc bằng), <= (Nhỏ hơn hoặc bằng).\n  Ví dụ: boolean isEqual = (a == b);\n- **Toán tử logic (Logical operators):** Dùng để kết hợp nhiều điều kiện boolean, trả về kết quả boolean.\n  && (AND logic): true nếu cả hai điều kiện đều true.\n  || (OR logic): true nếu ít nhất một điều kiện là true.\n  ! (NOT logic): Đảo ngược kết quả (true thành false, và ngược lại).\n  Ví dụ: boolean condition = (x > 0 && y < 10);\n- **Toán tử gán (Assignment operators):** Dùng để gán giá trị cho một biến.\n  = (Gán giá trị), += (Cộng và gán), -= (Trừ và gán), *= (Nhân và gán), /= (Chia và gán), %= (Modulus và gán), v.v.\n  Ví dụ: int x = 10; x += 5; // x bây giờ là 15\n- **Toán tử một ngôi (Unary operators):** Chỉ tác động lên một toán hạng duy nhất.\n  + (Dấu cộng), - (Dấu trừ), ++ (Tăng 1), -- (Giảm 1), ! (NOT logic), ~ (Bitwise complement).\n  Ví dụ: int a = 5; a++; // a bây giờ là 6\n- **Toán tử ba ngôi (Ternary operator) / Toán tử điều kiện:** Là một dạng rút gọn của câu lệnh if-else, hoạt động với ba toán quang.\n  Cú pháp: điều kiện ? biểu_thức1 : biểu_thức2;\n  Nếu điều kiện là true thì biểu_thức1 được đánh giá, ngược lại biểu_thức2 được đánh giá.\n  Ví dụ: int max = (a > b) ? a : b;"
      },
      {
        q: "FAQ 6: Array (mảng) trong Java là gì và cách khai báo, khởi tạo, truy cập các phần tử của nó?",
        a: "Mảng trong Java là một cấu trúc dữ liệu cơ bản cho phép lưu trữ nhiều giá trị cùng loại trong một biến duy nhất. Các phần tử của mảng được lưu trữ trong bộ nhớ liền kề và được truy cập bằng một chỉ mục (index), bắt đầu từ 0. Mảng có thể chứa các kiểu dữ liệu nguyên thủy hoặc tham chiếu.\n\n**Khai báo một mảng:**\n- Cú pháp: dataType[] arrayName; hoặc dataType arrayName[];\n- Ví dụ: int[] numbers; hoặc String[] students;\n\n**Khởi tạo một mảng:** Có ba cách phổ biến:\n1. **Khai báo và cấp phát bộ nhớ:** Tạo một mảng với số lượng phần tử cố định nhưng chưa gán giá trị cụ thể. Ví dụ: int[] numbers = new int[5]; // Tạo mảng với 5 phần tử\n2. **Khai báo, cấp phát và gán giá trị:** Khởi tạo mảng với các giá trị ban đầu ngay lập tức. Ví dụ: int[] numbers = {10, 20, 30, 40, 50};\n3. **Gán giá trị từng phần tử:** Cấp phát bộ nhớ trước, sau đó gán giá trị cho từng phần tử một. Ví dụ: int[] numbers = new int[3]; numbers[0] = 5; numbers[1] = 10; numbers[2] = 15;\n\n**Truy cập phần tử mảng:**\n- Sử dụng chỉ mục (index) của phần tử. Chỉ mục bắt đầu từ 0. Ví dụ: System.out.println(numbers[0]); // Truy cập phần tử đầu tiên; numbers[2] = 100; // Thay đổi giá trị của phần tử thứ ba"
      },
      {
        q: "FAQ 7: Làm thế nào để lặp (loop) qua các phần tử trong một mảng một chiều và mảng đa chiều trong Java?",
        a: "Để lặp qua các phần tử của mảng, Java cung cấp các cấu trúc vòng lặp khác nhau:\n\n**Đối với mảng một chiều:**\n- **Sử dụng vòng lặp for truyền thống:**\n  for (int i = 0; i < numbers.length; i++) {\n      System.out.println(numbers[i]);\n  }\n- **Sử dụng vòng lặp for-each (enhanced for loop):** Đơn giản hơn khi bạn chỉ cần truy cập các phần tử mà không cần chỉ mục.\n  for (int num : numbers) {\n      System.out.println(num);\n  }\n\n**Đối với mảng đa chiều (ví dụ: mảng 2D):** Mảng đa chiều là một \"mảng của các mảng\". Trong Java, phổ biến nhất là mảng 2D, thường dùng để biểu diễn bảng hoặc ma trận. Bạn sử dụng vòng lặp lồng nhau (nested loops) để duyệt qua các phần tử.\n- **Duyệt mảng 2D bằng vòng lặp lồng nhau:**\n  int[][] matrix = {\n      {1, 2, 3},\n      {4, 5, 6},\n      {7, 8, 9}\n  };\n  for (int i = 0; i < matrix.length; i++) { // Lặp qua các hàng\n      for (int j = 0; j < matrix[i].length; j++) { // Lặp qua các cột trong hàng hiện tại\n          System.out.print(matrix[i][j] + \" \");\n      }\n      System.out.println(); // Xuống dòng sau mỗi hàng\n  }\n\nLưu ý rằng mảng trong Java có kích thước cố định, ngay cả mảng đa chiều. Tuy nhiên, bạn có thể tạo \"mảng lởm chởm\" (jagged arrays) nơi các hàng có độ dài khác nhau."
      },
      {
        q: "FAQ 8: Các phương pháp hay nhất (best practices) trong lập trình Java là gì?",
        a: "Tuân thủ các phương pháp hay nhất giúp mã của bạn dễ đọc, dễ bảo trì và dễ hợp tác hơn. Dưới đây là một số khuyến nghị:\n- **Tên có ý nghĩa:** Sử dụng các tên mô tả rõ ràng cho các lớp, phương thức và biến. Điều này giúp tăng cường tính dễ đọc của mã.\n- **Sử dụng bình luận:** Viết bình luận (sử dụng //, /* */, /** */) để giải thích logic phức tạp, mục đích của các phần mã hoặc cung cấp tài liệu.\n- **Thụt lề nhất quán:** Sử dụng thụt lề nhất quán giúp cải thiện khả năng đọc cấu trúc mã.\n- **Quản lý tài nguyên:** Luôn đóng các tài nguyên (như tệp, kết nối cơ sở dữ liệu) khi không sử dụng nữa. Nên sử dụng khối finally hoặc cấu trúc try-with-resources để đảm bảo tài nguyên được đóng ngay cả khi có lỗi.\n- **Tuân thủ quy ước Java:** Tuân thủ các quy ước mã hóa tiêu chuẩn của Java (ví dụ: đặt tên lớp theo kiểu PascalCase, phương thức và biến theo kiểu camelCase) để đảm bảo tính nhất quán và dễ đọc cho bất kỳ ai làm việc với mã của bạn."
      }
    ]
  }
];
