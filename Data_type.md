# 1. Giới Thiệu, Cấu Trúc Mã, Kiểu Dữ Liệu, Toán Tử và Mảng

Java là ngôn ngữ lập trình bậc cao, hướng đối tượng (Object-Oriented), dựa trên lớp (Class-Based), được James Gosling phát triển tại Sun Microsystems (nay thuộc Oracle) và ra mắt năm 1995.

**Nguyên tắc “Write Once, Run Anywhere” (WORA):**

Mã Java được biên dịch thành *bytecode*, có thể chạy trên bất kỳ nền tảng nào có Máy ảo Java (JVM).

**Các tính năng nổi bật:**

- **Hướng đối tượng:** Hỗ trợ đóng gói, kế thừa, đa hình.
- **Độc lập nền tảng:** Chạy được trên nhiều hệ điều hành thông qua JVM.
- **Đơn giản:** Dễ học, dễ sử dụng, cú pháp gọn.
- **Bảo mật:** Có cơ chế bảo mật tích hợp, không dùng con trỏ trực tiếp.
- **Mạnh mẽ:** Quản lý bộ nhớ tốt, xử lý ngoại lệ và thu gom rác tự động.
- **Đa luồng:** Hỗ trợ lập trình đồng thời.
- **Hiệu suất cao:** Tối ưu với Just-In-Time Compiler (JIT).
- **Phân tán:** Hỗ trợ ứng dụng mạng và môi trường phân tán.
- **Động:** Thích ứng tốt với thay đổi trong môi trường chạy.

---

## 2. Cấu trúc Lập trình Cơ bản

### 2.1. Nhận xét (Comments)

Dùng để giải thích mã, giúp dễ bảo trì và cộng tác.

- **Một dòng:** `// comment`
- **Nhiều dòng:** `/* comment */`
- **Tài liệu (Javadoc):** `/** comment */`

### 2.2. Gói (Packages)

Tập hợp các lớp và giao diện liên quan, giúp quản lý dự án lớn và tránh trùng tên.

### 2.3. Tệp nguồn và Quy ước đặt tên

- Mỗi lớp `public` nằm trong một tệp riêng.
- Tên tệp phải trùng với tên lớp (thêm `.java`).

### 2.4. Lớp và Phương thức

- **Class:** Bản thiết kế cho đối tượng.
- **Method:** Định nghĩa hành vi của đối tượng.

### 2.5. Import

Dùng từ khóa `import` để sử dụng lớp từ gói khác.

Ví dụ:

```java
import java.util.ArrayList;
```

### 2.6. Thực hành tốt

- Tên biến/lớp/method có ý nghĩa.
- Viết nhận xét khi cần.
- Thụt lề nhất quán.
- Đóng tài nguyên sau khi dùng (`try-with-resources`).
- Tuân thủ quy ước mã hóa Java.

---

## 3. Kiểu Dữ liệu

### 3.1. Khái niệm

Kiểu dữ liệu xác định loại và phạm vi giá trị mà biến có thể lưu trữ.

### 3.2. Kiểu Nguyên thủy

- `byte` (-128 → 127)
- `short` (-32,768 → 32,767)
- `int` (số nguyên lớn)
- `char` (một ký tự)
- `boolean` (`true` hoặc `false`)

### 3.3. Kiểu Tham chiếu

- **String:** Chuỗi ký tự.
- **Array:** Danh sách giá trị cùng loại.
- **Class:** Mô hình đối tượng.
- **Interface:** Định nghĩa hành vi chung.
- **Enum:** Tập giá trị cố định.

---

## 4. Toán tử trong Java

- **Số học:** `+ - * / %`
- **Quan hệ:** `== != > < >= <=`
- **Logic:** `&& || !`
- **Gán:** `= += -= *= /=`
- **Một ngôi:** `++ -- ! ~`
- **Ba ngôi:** `condition ? expr1 : expr2`

---

## 5. Mảng (Arrays)

### 5.1. Khai báo

```java
int[] numbers;
int numbers[];
```

### 5.2. Khởi tạo

```java
int[] numbers = new int[5];
int[] nums = {1, 2, 3};
```

### 5.3. Truy cập

Chỉ mục bắt đầu từ 0: `numbers[0]`

### 5.4. Duyệt mảng

```java
for (int i = 0; i < arr.length; i++) { ... }

for (int num : arr) { ... }
```

### 5.5. Mảng đa chiều

```java
int[][] matrix = {{1,2,3},{4,5,6}};
```

---

[Câu hỏi ôn tập]# Câu hỏi ôn tập

## Trắc nghiệm ngắn (10 câu hỏi)

Hướng dẫn: Trả lời mỗi câu hỏi trong 2-3 câu.

1. "Write Once, Run Anywhere" (WORA) trong Java là gì?
2. Nêu ba loại bình luận khác nhau trong Java và mục đích chính của chúng.
3. Tại sao việc sử dụng các gói (packages) lại quan trọng trong các dự án Java lớn?
4. Giải thích sự khác biệt cơ bản giữa kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu trong Java.
5. Cho ví dụ về một kiểu dữ liệu nguyên thủy và một kiểu dữ liệu tham chiếu, cùng với một trường hợp sử dụng phù hợp cho mỗi loại.
6. Toán tử quan hệ được sử dụng để làm gì và chúng trả về loại giá trị nào?
7. Mô tả sự khác biệt giữa toán tử && (AND logic) và || (OR logic).
8. Trong Java, toán tử ba ngôi (ternary operator) là gì và cú pháp của nó như thế nào?
9. Giải thích tại sao mảng trong Java được coi là cấu trúc dữ liệu "kích thước cố định".
10. Ưu điểm của việc sử dụng vòng lặp for-each nâng cao so với vòng lặp for truyền thống khi lặp qua một mảng là gì?

## Đáp án trắc nghiệm ngắn hạn

1. "Write Once, Run Anywhere" (WORA) là một tính năng chính của Java có nghĩa là mã Java, sau khi được biên dịch thành bytecode, có thể chạy trên bất kỳ nền tảng nào miễn là nền tảng đó có Máy ảo Java (JVM) tương thích. Điều này loại bỏ nhu cầu biên dịch lại mã cho các hệ điều hành khác nhau, nâng cao tính di động.
2. Ba loại bình luận trong Java là: bình luận một dòng (//) để giải thích nhanh, bình luận nhiều dòng (/* ... */) cho các đoạn mã dài hơn, và bình luận tài liệu (/** ... */) được sử dụng để tạo Javadoc và tài liệu API tự động. Mỗi loại phục vụ mục đích khác nhau trong việc cải thiện sự rõ ràng và khả năng bảo trì mã.
3. Việc sử dụng các gói (packages) trong Java rất quan trọng vì chúng giúp nhóm các lớp và giao diện liên quan lại với nhau, tránh xung đột đặt tên giữa các lớp có cùng tên nhưng khác chức năng. Ngoài ra, gói còn giúp quản lý cấu trúc dự án lớn một cách hiệu quả hơn bằng cách tổ chức mã thành các mô-đun logic.
4. Sự khác biệt cơ bản là kiểu dữ liệu nguyên thủy lưu trữ giá trị thực tế của dữ liệu một cách trực tiếp trong bộ nhớ, có kích thước cố định và không thể là null. Ngược lại, kiểu dữ liệu tham chiếu không lưu trữ giá trị trực tiếp mà lưu trữ địa chỉ bộ nhớ (tham chiếu) đến đối tượng hoặc tập hợp dữ liệu, cho phép các cấu trúc phức tạp hơn và có thể là null.
5. Một ví dụ về kiểu dữ liệu nguyên thủy là int, dùng để lưu trữ các số nguyên lớn, ví dụ: int population = 1000000;. Một ví dụ về kiểu dữ liệu tham chiếu là String, dùng để xử lý văn bản, ví dụ: String greeting = "Hello, World!";.
6. Toán tử quan hệ (còn gọi là toán tử so sánh) được sử dụng để so sánh hai giá trị hoặc biểu thức. Chúng trả về một giá trị boolean, tức là true nếu điều kiện so sánh là đúng hoặc false nếu điều kiện so sánh là sai.
7. Toán tử && (AND logic) trả về true chỉ khi *cả hai* điều kiện được kết hợp đều là true; nếu không, nó trả về false. Ngược lại, toán tử || (OR logic) trả về true nếu *ít nhất một* trong các điều kiện được kết hợp là true; nó chỉ trả về false khi cả hai điều kiện đều là false.
8. Toán tử ba ngôi trong Java là một toán tử điều kiện viết tắt của câu lệnh if-else truyền thống, hoạt động với ba toán hạng. Cú pháp của nó là condition ? expression1 : expression2;, trong đó expression1 được đánh giá nếu condition là true, và expression2 được đánh giá nếu condition là false.
9. Mảng trong Java được coi là cấu trúc dữ liệu "kích thước cố định" vì một khi bạn đã khai báo và khởi tạo một mảng với một kích thước nhất định, bạn không thể thay đổi số lượng phần tử mà nó có thể chứa. Để thay đổi kích thước, bạn phải tạo một mảng mới và sao chép các phần tử cũ sang.
10. Ưu điểm của việc sử dụng vòng lặp for-each nâng cao là nó cung cấp một cú pháp ngắn gọn và dễ đọc hơn để lặp qua tất cả các phần tử trong một mảng hoặc tập hợp. Nó tự động xử lý việc quản lý chỉ mục, giúp giảm lỗi và làm cho mã sạch hơn khi bạn chỉ cần truy cập các giá trị của phần tử chứ không cần chỉ mục của chúng.

## Câu hỏi dạng luận

Hướng dẫn: Không cần trả lời, chỉ cần cung cấp câu hỏi.

1. Thảo luận sâu về triết lý "Write Once, Run Anywhere" (WORA) của Java. Giải thích cách Máy ảo Java (JVM) và bytecode góp phần vào việc đạt được tính độc lập nền tảng này, và phân tích các lợi ích và hạn chế của cách tiếp cận này trong phát triển phần mềm hiện đại.
2. So sánh và đối chiếu các kiểu dữ liệu nguyên thủy và kiểu dữ liệu tham chiếu trong Java. Đề cập đến cách chúng được lưu trữ trong bộ nhớ, khả năng chứa giá trị null, và khi nào nên ưu tiên sử dụng một loại hơn loại kia. Cung cấp ví dụ cụ thể để minh họa các điểm của bạn.
3. Phân tích tầm quan trọng của các toán tử trong Java bằng cách thảo luận chi tiết về ít nhất ba loại toán tử khác nhau (ví dụ: số học, quan hệ, logic, gán, một ngôi, ba ngôi). Cung cấp các ví dụ mã cho mỗi loại và giải thích cách chúng được sử dụng để thao tác dữ liệu và kiểm soát luồng chương trình.
4. Thiết kế một giải pháp Java sử dụng mảng để quản lý dữ liệu cho một kịch bản thực tế (ví dụ: hệ thống quản lý thư viện đơn giản, bảng điểm của học sinh). Giải thích cách bạn sẽ sử dụng mảng (một chiều hoặc đa chiều) để lưu trữ và truy cập dữ liệu, cũng như cách bạn sẽ lặp qua mảng để thực hiện các thao tác (ví dụ: thêm, xóa, tìm kiếm).
5. Thảo luận về các thực hành tốt nhất trong cấu trúc mã Java, bao gồm việc sử dụng bình luận, gói, quy ước đặt tên và quản lý tài nguyên. Giải thích tại sao việc tuân thủ các thực hành này lại quan trọng đối với khả năng đọc, khả năng bảo trì và khả năng cộng tác trong các dự án phát triển phần mềm.

## Bảng chú giải thuật ngữ chính

- **Java:** Một ngôn ngữ lập trình cấp cao, dựa trên lớp, hướng đối tượng, được phát triển bởi Sun Microsystems (nay là Oracle).
- **Máy ảo Java (JVM):** Một môi trường thời gian chạy trừu tượng thực thi bytecode Java. Đây là thành phần chính cho phép tính năng "Write Once, Run Anywhere".
- **Bytecode:** Mã trung gian được tạo ra khi mã nguồn Java được biên dịch. Bytecode này sau đó được JVM phiên dịch hoặc biên dịch kịp thời để thực thi.
- **"Write Once, Run Anywhere" (WORA):** Triết lý cốt lõi của Java, cho phép mã đã biên dịch chạy trên bất kỳ nền tảng nào hỗ trợ JVM mà không cần biên dịch lại.
- **Hướng đối tượng (Object-Oriented):** Một phương pháp lập trình dựa trên các khái niệm về "đối tượng", có thể chứa dữ liệu và mã dưới dạng các thuộc tính và phương thức. Các tính năng chính bao gồm đóng gói, kế thừa và đa hình.
- **Đóng gói (Encapsulation):** Gói dữ liệu (thuộc tính) và các phương thức hoạt động trên dữ liệu đó vào một đơn vị duy nhất (lớp), đồng thời ẩn các chi tiết triển khai khỏi bên ngoài.
- **Kế thừa (Inheritance):** Một cơ chế trong đó một lớp (lớp con) có thể kế thừa các trường và phương thức từ một lớp khác (lớp cha), cho phép tái sử dụng mã.
- **Đa hình (Polymorphism):** Khả năng một đối tượng có nhiều dạng, cho phép các đối tượng của các lớp khác nhau được đối xử như các đối tượng của một kiểu chung thông qua một giao diện chung.
- **Đa luồng (Multithreaded):** Khả năng một chương trình thực thi đồng thời nhiều phần của chính nó (luồng) để cải thiện hiệu suất hoặc khả năng phản hồi.
- **Trình biên dịch Just-In-Time (JIT):** Một phần của JVM biên dịch bytecode thành mã máy cục bộ trong thời gian chạy, giúp tăng tốc độ thực thi chương trình Java.
- **Bình luận (Comments):** Các đoạn văn bản trong mã nguồn bị bỏ qua bởi trình biên dịch, được sử dụng để giải thích mã cho người đọc.
- **Gói (Package):** Một cơ chế để tổ chức các lớp và giao diện Java thành các nhóm liên quan, giúp quản lý không gian tên và module hóa.
- **Lớp (Class):** Một bản thiết kế hoặc khuôn mẫu để tạo đối tượng, định nghĩa các thuộc tính và phương thức mà các đối tượng của nó sẽ có.
- **Phương thức (Method):** Một khối mã thực hiện một nhiệm vụ cụ thể và được liên kết với một đối tượng hoặc lớp.
- **Kiểu dữ liệu nguyên thủy (Primitive Data Types):** Các kiểu dữ liệu cơ bản trong Java (ví dụ: int, byte, boolean, char) lưu trữ giá trị trực tiếp và có kích thước cố định.
- **Kiểu dữ liệu tham chiếu (Reference Data Types):** Các kiểu dữ liệu trong Java (ví dụ: String, Array, Class, Interface) lưu trữ địa chỉ của một đối tượng trong bộ nhớ, chứ không phải bản thân giá trị.
- **Chuỗi (String):** Một kiểu dữ liệu tham chiếu trong Java được sử dụng để lưu trữ một chuỗi ký tự.
- **Giao diện (Interface):** Một bản thiết kế cho một lớp, chỉ chứa các khai báo phương thức trừu tượng và hằng số. Một lớp có thể triển khai nhiều giao diện.
- **Enum:** Một kiểu dữ liệu đặc biệt cho phép một biến là một tập hợp các hằng số được xác định trước.
- **Toán tử (Operator):** Các ký hiệu đặc biệt thực hiện các thao tác trên một hoặc nhiều toán hạng (ví dụ: +, -, ==, &&).
- **Toán tử số học (Arithmetic Operators):** Được sử dụng để thực hiện các phép toán số học như cộng, trừ, nhân, chia, lấy dư.
- **Toán tử quan hệ (Relational Operators):** Được sử dụng để so sánh hai giá trị (ví dụ: bằng, không bằng, lớn hơn).
- **Toán tử logic (Logical Operators):** Được sử dụng để kết hợp hoặc sửa đổi các biểu thức boolean (ví dụ: AND, OR, NOT).
- **Toán tử gán (Assignment Operators):** Được sử dụng để gán giá trị cho một biến (ví dụ: =, +=).
- **Toán tử một ngôi (Unary Operators):** Các toán tử hoạt động trên một toán hạng duy nhất (ví dụ: tăng ++, giảm --, phủ định !).
- **Toán tử ba ngôi (Ternary Operator):** Một toán tử điều kiện đặc biệt hoạt động với ba toán hạng, là dạng viết tắt của câu lệnh if-else.
- **Mảng (Array):** Một cấu trúc dữ liệu lưu trữ một tập hợp các phần tử có cùng kiểu dữ liệu trong một vị trí bộ nhớ liền kề.
- **Mảng đa chiều (Multi-dimensional Array):** Một mảng của các mảng, thường được sử dụng để đại diện cho bảng hoặc ma trận (ví dụ: mảng 2D).
- **Chỉ mục mảng (Array Index):** Vị trí số của một phần tử trong một mảng. Trong Java, chỉ mục bắt đầu từ 0.
- **Mảng Jagged (Jagged Array):** Một loại mảng đa chiều trong Java nơi các hàng (hoặc các chiều con) có thể có độ dài khác nhau.

[Câu hỏi thường gặp]# Câu hỏi thường gặp

Dưới đây là 8 câu hỏi thường gặp (FAQ) về các chủ đề chính từ nguồn bạn cung cấp:

### 1. Java là gì và những đặc điểm chính của nó là gì?

Java là một ngôn ngữ lập trình cấp cao, hướng đối tượng, dựa trên lớp, được phát triển bởi James Gosling tại Sun Microsystems (nay là Oracle và được phát hành lần đầu vào năm 1995. Đặc điểm nổi bật của Java là nguyên tắc "Viết một lần, chạy mọi nơi" (WORA), đạt được thông qua việc biên dịch mã Java thành bytecode, sau đó có thể chạy trên bất kỳ nền tảng nào có Máy ảo Java (JVM).

Các tính năng chính của Java bao gồm:

- **Hướng đối tượng:** Hỗ trợ đóng gói, kế thừa và đa hình thông qua các đối tượng và lớp.
- **Độc lập nền tảng:** Đạt được nhờ JVM.
- **Đơn giản:** Được thiết kế để dễ học và sử dụng.
- **Bảo mật:** Tích hợp các tính năng bảo mật và không sử dụng con trỏ rõ ràng.
- **Mạnh mẽ:** Có khả năng quản lý bộ nhớ mạnh mẽ, xử lý ngoại lệ và thu gom rác.
- **Đa luồng:** Hỗ trợ thực thi đồng thời nhiều phần của chương trình.
- **Hiệu suất cao:** Các trình biên dịch Just-In-Time (JIT) tối ưu hóa việc thực thi bytecode.
- **Phân tán:** Được thiết kế cho các ứng dụng tập trung vào mạng.
- **Động:** Có thể thích ứng với các môi trường đang phát triển.

### 2. Các loại bình luận (comments) khác nhau trong Java là gì và tại sao chúng quan trọng?

Trong Java, có ba loại bình luận chính:

- **Bình luận một dòng:** Bắt đầu bằng //. Tất cả những gì theo sau dấu gạch chéo là một bình luận. Ví dụ: // Đây là bình luận một dòng.
- **Bình luận nhiều dòng:** Bắt đầu bằng /* và kết thúc bằng */. Chúng có thể kéo dài nhiều dòng. Ví dụ: /* Đây là bình luận nhiều dòng. Nó có thể kéo dài nhiều dòng. */
- **Bình luận tài liệu (Documentation comments):** Bắt đầu bằng /**. Chúng được sử dụng để tạo tài liệu, bao gồm Javadoc. Ví dụ: /** * Lớp Calculator cung cấp các phương thức * để thực hiện các phép toán số học cơ bản. */

Bình luận rất quan trọng vì các lý do sau:

- **Độ rõ ràng:** Làm rõ logic phức tạp của mã.
- **Bảo trì:** Cung cấp ngữ cảnh và giảm nhầm lẫn khi mã được xem xét hoặc sửa đổi sau này.
- **Hợp tác:** Giúp các lập trình viên khác hiểu công việc của bạn.

### 3. "Packages" trong Java là gì và tại sao chúng lại hữu ích?

Packages (gói) trong Java là các cơ chế dùng để nhóm các lớp (classes) và giao diện (interfaces) có liên quan lại với nhau. Chúng giúp tổ chức mã nguồn của bạn và giải quyết vấn đề xung đột tên.

Các lợi ích chính của packages:

- **Nhóm các lớp và giao diện liên quan:** Giúp quản lý các dự án lớn hiệu quả hơn.
- **Tránh xung đột tên:** Cho phép các lớp có cùng tên tồn tại trong các gói khác nhau mà không gây ra lỗi.
- **Cấu trúc thư mục:** Cấu trúc thư mục của gói nên khớp với khai báo gói (ví dụ: com.example.myapp tương ứng với thư mục com/example/myapp).

Để tạo một gói, bạn sử dụng từ khóa package ở đầu tệp nguồn. Khi cần sử dụng các lớp từ các gói khác, bạn phải nhập chúng bằng câu lệnh import.

### 4. Phân biệt giữa các kiểu dữ liệu nguyên thủy (primitive data types) và kiểu dữ liệu tham chiếu (reference data types) trong Java.

Trong Java, các kiểu dữ liệu được chia thành hai loại chính:

**Kiểu dữ liệu nguyên thủy (Primitive data types):**

- **Đặc điểm:** Lưu trữ giá trị thực tế trực tiếp. Có kích thước mặc định và giá trị cố định, không thay đổi. Không thể chứa giá trị null.
- **Mục đích:** Để lưu trữ các giá trị đơn giản, cơ bản.
- **Ví dụ:**byte: Lưu trữ số nguyên từ -128 đến 127 (ví dụ: byte age = 25;).
- short: Lưu trữ số nguyên từ -32,768 đến 32,767 (ví dụ: short temperature = -5;).
- int: Lưu trữ số nguyên lớn hơn byte và short (ví dụ: int population = 1000000;).
- char: Lưu trữ một ký tự đơn (ví dụ: char initial = 'A';).
- boolean: Đại diện cho giá trị true hoặc false (ví dụ: boolean isLoggedIn = true;).

**Kiểu dữ liệu tham chiếu (Reference data types):**

- **Đặc điểm:** Lưu trữ địa chỉ bộ nhớ (tham chiếu) đến các đối tượng hoặc tập hợp dữ liệu. Hỗ trợ các cấu trúc dữ liệu phức tạp hơn. Có thể chứa giá trị null.
- **Mục đích:** Để định vị các đối tượng hoặc các tập hợp dữ liệu, tổ chức dữ liệu và chức năng liên quan.
- **Ví dụ:**String: Chuỗi ký tự (ví dụ: String greeting = "Hello, World!";).
- Arrays: Tập hợp các giá trị cùng kiểu (ví dụ: int[] scores = {85, 90, 78, 92};).
- Classes: Bản thiết kế để tạo đối tượng, tổ chức dữ liệu và hàm cùng nhau (ví dụ: public class Student { String name; int enrollmentYear; }).
- Interfaces: Định nghĩa các phương thức cần thiết cho các lớp triển khai, cung cấp một khuôn mẫu cho các lớp (ví dụ: public interface LMSOperations { void enrollStudent(); }).
- Enums: Đại diện cho các tập hợp giá trị có tên cố định (ví dụ: enum DaysOfWeek { MONDAY, TUESDAY, ... }).

### 5. Các loại toán tử (operators) cơ bản trong Java là gì và chức năng của chúng?

Các toán tử là các ký hiệu đặc biệt giúp thực hiện các thao tác trên dữ liệu. Trong Java, chúng bao gồm:

- **Toán tử số học (Arithmetic operators):** Thực hiện các phép toán số học cơ bản.
- + (Cộng), - (Trừ), * (Nhân), / (Chia), % (Chia lấy dư).
- Ví dụ: int result = 10 + 5; // result là 15
- **Toán tử quan hệ (Relational operators):** Dùng để so sánh hai giá trị hoặc biểu thức, trả về giá trị boolean (true hoặc false).
- == (Bằng), != (Không bằng), > (Lớn hơn), < (Nhỏ hơn), >= (Lớn hơn hoặc bằng), <= (Nhỏ hơn hoặc bằng).
- Ví dụ: boolean isEqual = (a == b);
- **Toán tử logic (Logical operators):** Dùng để kết hợp nhiều điều kiện boolean, trả về kết quả boolean.
- && (AND logic): true nếu cả hai điều kiện đều true.
- || (OR logic): true nếu ít nhất một điều kiện là true.
- ! (NOT logic): Đảo ngược kết quả (true thành false, và ngược lại).
- Ví dụ: boolean condition = (x > 0 && y < 10);
- **Toán tử gán (Assignment operators):** Dùng để gán giá trị cho một biến.
- = (Gán giá trị), += (Cộng và gán), -= (Trừ và gán), *= (Nhân và gán), /= (Chia và gán), %= (Modulus và gán), v.v.
- Ví dụ: int x = 10; x += 5; // x bây giờ là 15
- **Toán tử một ngôi (Unary operators):** Chỉ tác động lên một toán hạng duy nhất.
- + (Dấu cộng), - (Dấu trừ), ++ (Tăng 1), -- (Giảm 1), ! (NOT logic), ~ (Bitwise complement).
- Ví dụ: int a = 5; a++; // a bây giờ là 6
- **Toán tử ba ngôi (Ternary operator) / Toán tử điều kiện:** Là một dạng rút gọn của câu lệnh if-else, hoạt động với ba toán hạng.
- Cú pháp: điều kiện ? biểu_thức1 : biểu_thức2;
- Nếu điều kiện là true thì biểu_thức1 được đánh giá, ngược lại biểu_thức2 được đánh giá.
- Ví dụ: int max = (a > b) ? a : b;

### 6. Array (mảng) trong Java là gì và cách khai báo, khởi tạo, truy cập các phần tử của nó?

Mảng trong Java là một cấu trúc dữ liệu cơ bản cho phép lưu trữ nhiều giá trị cùng loại trong một biến duy nhất. Các phần tử của mảng được lưu trữ trong bộ nhớ liền kề và được truy cập bằng một chỉ mục (index), bắt đầu từ 0. Mảng có thể chứa các kiểu dữ liệu nguyên thủy hoặc tham chiếu.

**Khai báo một mảng:**

- Cú pháp: dataType[] arrayName; hoặc dataType arrayName[];
- Ví dụ: int[] numbers; hoặc String[] students;

**Khởi tạo một mảng:** Có ba cách phổ biến:

1. **Khai báo và cấp phát bộ nhớ:** Tạo một mảng với số lượng phần tử cố định nhưng chưa gán giá trị cụ thể.
- Ví dụ: int[] numbers = new int[5]; // Tạo mảng với 5 phần tử
1. **Khai báo, cấp phát và gán giá trị:** Khởi tạo mảng với các giá trị ban đầu ngay lập tức.
- Ví dụ: int[] numbers = {10, 20, 30, 40, 50};
1. **Gán giá trị từng phần tử:** Cấp phát bộ nhớ trước, sau đó gán giá trị cho từng phần tử một.
- Ví dụ:
- int[] numbers = new int[3];
- numbers[0] = 5;
- numbers[1] = 10;
- numbers[2] = 15;

**Truy cập phần tử mảng:**

- Sử dụng chỉ mục (index) của phần tử. Chỉ mục bắt đầu từ 0.
- Ví dụ:
- System.out.println(numbers[0]); // Truy cập phần tử đầu tiên
- numbers[2] = 100; // Thay đổi giá trị của phần tử thứ ba

### 7. Làm thế nào để lặp (loop) qua các phần tử trong một mảng một chiều và mảng đa chiều trong Java?

Để lặp qua các phần tử của mảng, Java cung cấp các cấu trúc vòng lặp khác nhau:

**Đối với mảng một chiều:**

- **Sử dụng vòng lặp for truyền thống:**for (int i = 0; i < numbers.length; i++) {
- System.out.println(numbers[i]);
- }
- **Sử dụng vòng lặp for-each (enhanced for loop):** Đơn giản hơn khi bạn chỉ cần truy cập các phần tử mà không cần chỉ mục.
- for (int num : numbers) {
- System.out.println(num);
- }

**Đối với mảng đa chiều (ví dụ: mảng 2D):** Mảng đa chiều là một "mảng của các mảng". Trong Java, phổ biến nhất là mảng 2D, thường dùng để biểu diễn bảng hoặc ma trận. Bạn sử dụng vòng lặp lồng nhau (nested loops) để duyệt qua các phần tử.

- **Duyệt mảng 2D bằng vòng lặp lồng nhau:**int[][] matrix = {
- {1, 2, 3},
- {4, 5, 6},
- {7, 8, 9}
- };
- 
- for (int i = 0; i < matrix.length; i++) { // Lặp qua các hàng
- for (int j = 0; j < matrix[i].length; j++) { // Lặp qua các cột trong hàng hiện tại
- System.out.print(matrix[i][j] + " ");
- }
- System.out.println(); // Xuống dòng sau mỗi hàng
- }

Lưu ý rằng mảng trong Java có kích thước cố định, ngay cả mảng đa chiều. Tuy nhiên, bạn có thể tạo "mảng lởm chởm" (jagged arrays) nơi các hàng có độ dài khác nhau.

### 8. Các phương pháp hay nhất (best practices) trong lập trình Java là gì?

Tuân thủ các phương pháp hay nhất giúp mã của bạn dễ đọc, dễ bảo trì và dễ hợp tác hơn. Dưới đây là một số khuyến nghị:

- **Tên có ý nghĩa:** Sử dụng các tên mô tả rõ ràng cho các lớp, phương thức và biến. Điều này giúp tăng cường tính dễ đọc của mã.
- **Sử dụng bình luận:** Viết bình luận (sử dụng //, /* */, /** */) để giải thích logic phức tạp, mục đích của các phần mã hoặc cung cấp tài liệu.
- **Thụt lề nhất quán:** Sử dụng thụt lề nhất quán giúp cải thiện khả năng đọc cấu trúc mã.
- **Quản lý tài nguyên:** Luôn đóng các tài nguyên (như tệp, kết nối cơ sở dữ liệu) khi không sử dụng nữa. Nên sử dụng khối finally hoặc cấu trúc try-with-resources để đảm bảo tài nguyên được đóng ngay cả khi có lỗi.
- **Tuân thủ quy ước Java:** Tuân thủ các quy ước mã hóa tiêu chuẩn của Java (ví dụ: đặt tên lớp theo kiểu PascalCase, phương thức và biến theo kiểu camelCase) để đảm bảo tính nhất quán và dễ đọc cho bất kỳ ai làm việc với mã của bạn.