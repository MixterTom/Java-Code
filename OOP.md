4. Các khái niệm cốt lõi về lập trình hướng đối tượng (OOP)
Tài liệu này trình bày các khái niệm nền tảng của lập trình hướng đối tượng, bao gồm: định nghĩa, lợi ích, sự khác biệt so với lập trình thủ tục, cách làm việc với lớp và đối tượng, nguyên lý đóng gói (Encapsulation), và cơ chế khởi tạo đối tượng (Constructor).
1. Giới thiệu về OOP
1.1. OOP là gì?
Lập trình hướng đối tượng (Object-Oriented Programming) là mô hình lập trình dựa trên khái niệm “đối tượng” — các cấu trúc dữ liệu kết hợp dữ liệu (thuộc tính/trường) và hành vi (phương thức).
Ví dụ:
Xe hơi: thuộc tính (hãng, đời, màu sắc), phương thức (khởi động, phanh)
Người: thuộc tính (tên, tuổi), phương thức (nói, đi)
Ý tưởng cốt lõi: Mô hình hóa thế giới thực thông qua các đối tượng và sự tương tác giữa chúng.
1.2. Lợi ích của OOP
Tính mô-đun (Modularity): Chia nhỏ vấn đề phức tạp thành các thành phần dễ quản lý.
Tái sử dụng (Reusability): Lớp và đối tượng có thể tái sử dụng ở nhiều nơi.
Dễ bảo trì (Maintainability): Cấu trúc rõ ràng, dễ sửa đổi và nâng cấp.
Linh hoạt (Flexibility): Thích ứng tốt với thay đổi yêu cầu.
Phản ánh thế giới thực: Mô hình hóa gần gũi với cách chúng ta quan sát và suy nghĩ.
1.3. So sánh OOP và Lập trình Thủ tục
Tiêu chí
Lập trình thủ tục
Lập trình hướng đối tượng
Trọng tâm
Hàm/thủ tục, các bước thực thi
Đối tượng, dữ liệu + hành vi
Tổ chức dữ liệu
Dữ liệu và hàm tách biệt
Dữ liệu và phương thức đóng gói chung
Thiết kế
Từ trên xuống
Từ dưới lên
Khả năng mở rộng
Khó quản lý khi hệ thống lớn
Quản lý tốt nhờ tính mô-đun
2. Lớp và Đối tượng
2.1. Lớp (Class)
Là bản thiết kế định nghĩa thuộc tính và hành vi chung của đối tượng.
Ví dụ: Car có make, model, year và phương thức start().
2.2. Đối tượng (Object)
Là thể hiện cụ thể của một lớp, có dữ liệu riêng.
Ví dụ: "Toyota Camry 2023" là đối tượng của lớp Car.
Tạo đối tượng:
Car myCar = new Car();
myCar.make = "Toyota";
myCar.start();
​
3. Đóng gói (Encapsulation)
3.1. Khái niệm
Gộp dữ liệu và phương thức xử lý dữ liệu vào cùng một lớp, đồng thời ẩn chi tiết bên trong thông qua access modifiers.
3.2. Lợi ích
Bảo vệ dữ liệu: Ngăn truy cập trái phép.
Kiểm soát: Có thể thêm logic xác thực khi thay đổi dữ liệu.
Linh hoạt: Thay đổi bên trong mà không ảnh hưởng bên ngoài.
3.3. Access Modifiers
private: Chỉ trong lớp
public: Bất kỳ đâu
protected: Trong lớp, lớp con và cùng gói
(default): Trong cùng gói
3.4. Getters và Setters
class Car {
  private String make;
  public String getMake() { return make; }
  public void setMake(String make) {
    if(make != null && !make.isEmpty()) this.make = make;
  }
}
​
4. Constructors
4.1. Khái niệm
Phương thức đặc biệt để khởi tạo đối tượng, tự động gọi khi dùng new.
Cùng tên lớp
Không có kiểu trả về
4.2. Loại Constructor
Mặc định: Java tự tạo nếu không khai báo constructor nào.
Có tham số: Cho phép truyền giá trị ban đầu.
Nạp chồng (Overloading): Nhiều constructor với tham số khác nhau.
Ví dụ:
class Dog {
  String name;
  int age;

  public Dog() { this("Unknown", 0); }
  public Dog(String name, int age) {
    this.name = name; this.age = age;
  }
}
​
Tóm tắt
OOP tổ chức chương trình xoay quanh đối tượng, giúp dễ bảo trì, mở rộng, tái sử dụng, đồng thời mô hình hóa sát với thế giới thực. Các khái niệm nền tảng: Lớp, Đối tượng, Đóng gói, Constructor là cơ sở để hiểu và vận dụng OOP hiệu quả


# Câu hỏi ôn tập

## Câu đố ngắn

Hướng dẫn: Trả lời mỗi câu hỏi trong 2-3 câu.

1. **OOP là gì và ý tưởng cốt lõi của nó là gì?**
2. **Kể ra ba lợi ích chính của việc sử dụng Lập trình hướng đối tượng.**
3. **Giải thích sự khác biệt cơ bản giữa Lớp và Đối tượng trong OOP.**
4. **Tại sao lại cần phải "khởi tạo" một đối tượng?**
5. **Mô tả mục đích của toán tử chấm (.) khi làm việc với các đối tượng.**
6. **Đóng gói là gì và mục đích chính của Data Hiding là gì?**
7. **Sự khác biệt giữa công cụ sửa đổi truy cập private và public là gì?**
8. **Giải thích tại sao chúng ta sử dụng Getters và Setters trong OOP.**
9. **Hàm khởi tạo là gì và khi nào nó được gọi?**
10. **Sự khác biệt giữa hàm khởi tạo mặc định và hàm khởi tạo có tham số là gì?**

## Đáp án câu đố

1. **OOP (Lập trình hướng đối tượng)** là một mô hình lập trình dựa trên khái niệm "đối tượng", là các cấu trúc dữ liệu chứa dữ liệu và mã. Ý tưởng cốt lõi của nó là mô hình hóa các vấn đề trong thế giới thực bằng cách sử dụng các đối tượng và sự tương tác của chúng, làm cho mã trực quan và dễ quản lý hơn.
2. Ba lợi ích chính của OOP là **tính mô-đun**, cho phép chia nhỏ các vấn đề phức tạp; **tính tái sử dụng**, cho phép sử dụng lại mã và lớp; và **khả năng bảo trì**, giúp gỡ lỗi, cập nhật và mở rộng mã dễ dàng hơn.
3. Một **Lớp** là một bản thiết kế hoặc mẫu để tạo đối tượng, định nghĩa các đặc điểm và hành vi chung. Ngược lại, một **Đối tượng** là một thể hiện cụ thể của một lớp, là một hiện thực của bản thiết kế với bộ giá trị dữ liệu riêng.
4. Cần phải "khởi tạo" một đối tượng để tạo một thể hiện cụ thể của một lớp trong bộ nhớ. Quá trình này cấp phát không gian và chuẩn bị đối tượng để sử dụng, thường thiết lập các giá trị ban đầu cho các trường của nó.
5. Toán tử chấm (.) được sử dụng để truy cập các thành viên của đối tượng, cụ thể là các trường (dữ liệu) và các phương thức (hành vi). Nó cho phép lập trình viên tương tác với dữ liệu được đóng gói bên trong đối tượng và gọi các chức năng của nó.
6. **Đóng gói** là việc đóng gói dữ liệu và các phương thức hoạt động trên dữ liệu đó vào một đơn vị duy nhất (một lớp). Mục đích chính của **Data Hiding** (một khía cạnh của đóng gói) là hạn chế quyền truy cập trực tiếp vào các thành phần nội bộ của đối tượng, đảm bảo tính toàn vẹn dữ liệu và kiểm soát cách dữ liệu được sửa đổi.
7. Công cụ sửa đổi truy cập **private** giới hạn quyền truy cập vào một thành viên chỉ trong lớp mà nó được khai báo, được sử dụng để ẩn dữ liệu. Ngược lại, **public** cho phép truy cập thành viên từ bất kỳ đâu, thường được sử dụng cho các phương thức cung cấp giao diện bên ngoài của lớp.
8. Chúng ta sử dụng **Getters** và **Setters** để kiểm soát và quản lý quyền truy cập vào các trường private của một lớp. Getters cho phép đọc các giá trị trường, trong khi Setters cho phép sửa đổi chúng, thường bao gồm logic xác thực để đảm bảo tính hợp lệ của dữ liệu.
9. Một **Hàm khởi tạo** là một loại phương thức đặc biệt được sử dụng để khởi tạo một đối tượng khi nó được tạo. Nó được gọi tự động khi một đối tượng mới được tạo bằng từ khóa new.
10. Hàm khởi tạo **mặc định** là một hàm khởi tạo không có đối số được Java cung cấp tự động nếu không có hàm khởi tạo nào được định nghĩa, khởi tạo các biến với giá trị mặc định của chúng. Ngược lại, hàm khởi tạo **có tham số** là một hàm khởi tạo chấp nhận một hoặc nhiều đối số, cho phép khởi tạo các trường của đối tượng với các giá trị cụ thể được cung cấp tại thời điểm tạo.

## Câu hỏi dạng bài luận

Hướng dẫn: Đề xuất năm câu hỏi dạng bài luận, không cung cấp câu trả lời.

1. Phân tích cách Lập trình hướng đối tượng cải thiện khả năng bảo trì và linh hoạt của mã so với mô hình lập trình thủ tục. Cung cấp các ví dụ cụ thể về cách tính mô-đun và đóng gói góp phần vào những lợi ích này.
2. Thảo luận sâu về khái niệm đóng gói trong OOP, bao gồm tầm quan trọng của việc ẩn dữ liệu và vai trò của các công cụ sửa đổi truy cập. Giải thích cách Getters và Setters thực thi đóng gói và bảo vệ tính toàn vẹn dữ liệu.
3. So sánh và đối chiếu vai trò của một Lớp và một Đối tượng trong Lập trình hướng đối tượng. Làm thế nào chúng tương tác với nhau để mô hình hóa các thực thể trong thế giới thực và tại sao cả hai khái niệm đều cần thiết cho việc thiết kế phần mềm hiệu quả?
4. Giải thích các loại hàm khởi tạo khác nhau (mặc định, có tham số, nạp chồng) và mục đích của chúng trong việc khởi tạo đối tượng. Làm thế nào việc nạp chồng hàm khởi tạo cung cấp tính linh hoạt cho lập trình viên và khi nào bạn nên sử dụng một loại hàm khởi tạo cụ thể?
5. Xem xét kịch bản thiết kế một hệ thống quản lý thư viện. Mô tả cách bạn sẽ sử dụng các khái niệm OOP cốt lõi (đối tượng, lớp, đóng gói, hàm khởi tạo) để mô hình hóa các thực thể như Sách, Thành viên và Giao dịch.

## Bảng thuật ngữ các thuật ngữ chính

- **Access Modifiers (Công cụ sửa đổi truy cập):** Các từ khóa trong OOP (ví dụ: private, public, protected, default) kiểm soát khả năng hiển thị và khả năng truy cập của các lớp, trường, phương thức và hàm khởi tạo.
- **Attributes (Thuộc tính):** Còn được gọi là trường hoặc biến thể hiện; dữ liệu mà một đối tượng sở hữu, định nghĩa trạng thái của nó.
- **Behavior (Hành vi):** Các hành động mà một đối tượng có thể thực hiện, được thể hiện thông qua các phương thức của nó.
- **Blueprint (Bản thiết kế):** Một cách ví von để mô tả một Lớp, vì nó định nghĩa cấu trúc và hành vi cho tất cả các đối tượng được tạo từ nó.
- **Class (Lớp):** Một bản thiết kế hoặc mẫu để tạo đối tượng, định nghĩa cấu trúc dữ liệu (trường) và hành vi (phương thức) chung mà tất cả các đối tượng của loại đó sẽ có.
- **Constructor (Hàm khởi tạo):** Một loại phương thức đặc biệt được sử dụng để khởi tạo một đối tượng khi nó được tạo, thiết lập trạng thái ban đầu cho các trường của nó.
- **Constructor Overloading (Nạp chồng hàm khởi tạo):** Khả năng một lớp có nhiều hàm khởi tạo, mỗi hàm có một chữ ký khác nhau (số lượng hoặc kiểu tham số khác nhau), cung cấp các cách khác nhau để khởi tạo đối tượng.
- **Data Hiding (Ẩn dữ liệu):** Một nguyên tắc của đóng gói, nơi các chi tiết triển khai nội bộ của một đối tượng được ẩn khỏi quyền truy cập bên ngoài, được kiểm soát thông qua các công cụ sửa đổi truy cập như private.
- **Default Constructor (Hàm khởi tạo mặc định):** Một hàm khởi tạo không có đối số được Java cung cấp tự động (nếu không có hàm khởi tạo nào khác được định nghĩa) để khởi tạo các biến thể hiện với giá trị mặc định của chúng.
- **Encapsulation (Đóng gói):** Nguyên tắc đóng gói dữ liệu (trường) và các phương thức hoạt động trên dữ liệu đó vào một đơn vị duy nhất (một lớp), cùng với việc ẩn dữ liệu.
- **Fields (Trường):** Các biến được khai báo trong một lớp để lưu trữ dữ liệu, đại diện cho các thuộc tính hoặc trạng thái của một đối tượng.
- **Getters (Phương thức truy cập):** Các phương thức public được sử dụng để đọc (truy cập) giá trị của một trường private.
- **Instance (Thể hiện):** Một đối tượng được tạo từ một lớp; một bản sao cụ thể của bản thiết kế lớp.
- **Instantiation (Khởi tạo):** Quá trình tạo một đối tượng (một thể hiện) từ một lớp bằng cách sử dụng từ khóa new và gọi hàm khởi tạo.
- **Maintainability (Khả năng bảo trì):** Dễ dàng sửa đổi, cập nhật hoặc mở rộng mã; một lợi ích chính của OOP do cấu trúc mô-đun.
- **Methods (Phương thức):** Các hàm được định nghĩa trong một lớp thực hiện các hành động hoặc thao tác trên dữ liệu của đối tượng, đại diện cho hành vi của đối tượng.
- **Modularity (Tính mô-đun):** Khả năng chia một hệ thống phức tạp thành các phần nhỏ hơn, độc lập (đối tượng hoặc lớp) để dễ quản lý và hiểu hơn.
- **Object (Đối tượng):** Một thể hiện của một lớp, chứa dữ liệu (trường) và mã (phương thức) và đại diện cho một thực thể trong thế giới thực.
- **Object-Oriented Programming (OOP) (Lập trình hướng đối tượng):** Một mô hình lập trình dựa trên khái niệm "đối tượng" như các khối xây dựng cơ bản, tập trung vào việc mô hình hóa các thực thể trong thế giới thực.
- **Parameterized Constructor (Hàm khởi tạo có tham số):** Một hàm khởi tạo chấp nhận một hoặc nhiều đối số để khởi tạo các trường của đối tượng với các giá trị cụ thể được cung cấp tại thời điểm tạo.
- **Programming Paradigm (Mô hình lập trình):** Một phong cách hoặc cách tiếp cận cơ bản để viết chương trình máy tính (ví dụ: thủ tục, hướng đối tượng).
- **Reusability (Tính tái sử dụng):** Khả năng sử dụng lại các thành phần mã (đối tượng, lớp) trong các phần khác nhau của một ứng dụng hoặc trong các dự án khác, giảm trùng lặp và tăng hiệu quả.
- **Setters (Phương thức sửa đổi):** Các phương thức public được sử dụng để ghi (sửa đổi) giá trị của một trường private, thường bao gồm logic xác thực.
- **this keyword (Từ khóa this):** Trong Java, this là một tham chiếu đến đối tượng hiện tại, thường được sử dụng để phân biệt giữa các biến thể hiện và các tham số có cùng tên trong hàm tạo hoặc phương thức.



# Câu hỏi thường gặp

Dưới đây là 8 câu hỏi thường gặp (FAQ) về các khái niệm lập trình hướng đối tượng (OOP), kèm theo câu trả lời chi tiết:

### OOP là gì và tại sao nó quan trọng?

OOP (Lập trình hướng đối tượng) là một mô hình lập trình dựa trên khái niệm "đối tượng". Đối tượng là các cấu trúc dữ liệu chứa cả dữ liệu (trường/thuộc tính) và mã (phương thức/hành vi). Ý tưởng cốt lõi là mô hình hóa các vấn đề trong thế giới thực bằng cách sử dụng các đối tượng và sự tương tác của chúng.

**Lợi ích của OOP bao gồm:**

- **Tính mô đun:** Phân tách các vấn đề phức tạp thành các đối tượng nhỏ hơn, dễ quản lý hơn.
- **Khả năng tái sử dụng:** Các đối tượng (và lớp) có thể được tái sử dụng trong các phần khác nhau của ứng dụng hoặc trong các dự án khác.
- **Khả năng bảo trì:** Dễ dàng gỡ lỗi, cập nhật và mở rộng mã do thiết kế có cấu trúc.
- **Tính linh hoạt:** Dễ dàng thích ứng với những thay đổi về yêu cầu.
- **Mô hình hóa thế giới thực:** Phù hợp với cách chúng ta nhận thức và tương tác với thế giới thực.

### Sự khác biệt giữa Lớp (Class) và Đối tượng (Object) trong OOP là gì?

- **Lớp (Class):** Là một bản thiết kế hoặc khuôn mẫu để tạo ra các đối tượng. Nó định nghĩa các đặc điểm chung (trường) và hành vi (phương thức) mà tất cả các đối tượng thuộc loại đó sẽ có. Ví dụ, một "Bản thiết kế ô tô" định rõ rằng tất cả các xe ô tô sẽ có hãng, mẫu, năm sản xuất và các phương thức như start(), stop().
- **Đối tượng (Object):** Là một thể hiện (instance) của một lớp. Nó là một hiện thực cụ thể của bản thiết kế. Mỗi đối tượng có tập hợp các giá trị dữ liệu riêng cho các trường được định nghĩa trong lớp. Ví dụ, một "Toyota Camry 2023" hoặc "Honda Civic 2024" thực tế được chế tạo từ bản thiết kế "Thiết kế ô tô" là các đối tượng.

### Làm cách nào để truy cập các thành viên (fields và methods) của một đối tượng?

Để truy cập các trường (dữ liệu) hoặc gọi các phương thức (hành vi) của một đối tượng, bạn sử dụng toán tử dấu chấm (.).

- **Truy cập trường:** tenDoiTuong.tenTruong (ví dụ: myCar.make = "Toyota";)
- **Gọi phương thức:** tenDoiTuong.tenPhuongThuc() (ví dụ: myCar.start();)

### Khái niệm Đóng gói (Encapsulation) trong OOP là gì và tại sao nó quan trọng?

Đóng gói là việc đóng gói dữ liệu (các trường) và các phương thức (hàm) hoạt động trên dữ liệu đó vào một đơn vị duy nhất (một lớp). Nó cũng bao gồm việc ẩn dữ liệu, hạn chế quyền truy cập trực tiếp vào một số thành phần của đối tượng. Điều này được thực hiện bằng cách sử dụng các bộ điều chỉnh quyền truy cập như private.

**Tầm quan trọng của đóng gói:**

- **Tính toàn vẹn dữ liệu:** Ngăn chặn việc sửa đổi trực tiếp, trái phép trạng thái nội bộ của đối tượng.
- **Kiểm soát:** Cho phép bạn kiểm soát cách dữ liệu được truy cập và sửa đổi (ví dụ: thêm logic xác thực trong các phương thức setter).
- **Tính linh hoạt:** Việc triển khai nội bộ có thể thay đổi mà không ảnh hưởng đến mã bên ngoài sử dụng lớp.
- **Giảm độ phức tạp:** Đơn giản hóa giao diện của một lớp, giúp việc sử dụng dễ dàng hơn.

### Getters và Setters là gì và chúng liên quan đến Đóng gói như thế nào?

- **Getters (Phương thức truy cập):** Là các phương thức public được sử dụng để đọc giá trị của một trường private. Theo quy ước, chúng thường có dạng getTenTruong().
- **Setters (Phương thức thay đổi):** Là các phương thức public được sử dụng để ghi (sửa đổi) giá trị của một trường private. Theo quy ước, chúng thường có dạng setTenTruong(giaTri). Setters có thể bao gồm logic xác thực để đảm bảo dữ liệu hợp lệ.

Getters và setters là cơ chế chính để triển khai đóng gói. Bằng cách đặt các trường là private và cung cấp getters/setters public, bạn kiểm soát cách dữ liệu được truy cập và sửa đổi, bảo vệ tính toàn vẹn của đối tượng.

### Bộ điều chỉnh quyền truy cập (Access Modifiers) trong Java là gì và công dụng của chúng?

Bộ điều chỉnh quyền truy cập kiểm soát khả năng hiển thị và khả năng truy cập của các lớp, trường, phương thức và hàm tạo.

- **private:** Chỉ có thể truy cập trong lớp mà nó được khai báo. Được sử dụng để ẩn dữ liệu.
- **public:** Có thể truy cập từ bất cứ đâu. Thường được sử dụng cho các phương thức cung cấp giao diện công khai của lớp.
- **protected:** Có thể truy cập trong lớp, bởi các lớp con, và từ các lớp trong cùng gói.
- **default (không có bộ điều chỉnh):** Chỉ có thể truy cập trong cùng gói.

### Hàm tạo (Constructor) là gì và mục đích của nó?

Hàm tạo là một loại phương thức đặc biệt được sử dụng để khởi tạo một đối tượng. Mục đích chính của nó là thiết lập trạng thái ban đầu (giá trị cho các trường) của một đối tượng khi nó được tạo.

**Đặc điểm của hàm tạo:**

- Có cùng tên với lớp.
- Không có kiểu trả về (ngay cả void).
- Được gọi tự động khi một đối tượng được tạo bằng từ khóa new.

### Hàm tạo mặc định (Default Constructor) và Hàm tạo có tham số (Parameterized Constructor) khác nhau như thế nào?

- **Hàm tạo mặc định (Default Constructor):**
- Nếu bạn không định nghĩa bất kỳ hàm tạo nào trong lớp của mình, Java sẽ tự động cung cấp một hàm tạo public, không có đối số (hàm tạo mặc định ngầm).
- Nó khởi tạo các biến thể hiện với giá trị mặc định của chúng (ví dụ: null cho đối tượng, 0 cho số, false cho boolean).
- Nếu bạn đã định nghĩa bất kỳ hàm tạo nào khác, hàm tạo mặc định sẽ không còn được cung cấp tự động nữa.
- **Hàm tạo có tham số (Parameterized Constructor):**
- Là các hàm tạo chấp nhận một hoặc nhiều tham số.
- Mục đích là để khởi tạo các trường của đối tượng với các giá trị cụ thể được cung cấp tại thời điểm tạo đối tượng. Điều này cho phép bạn tạo các đối tượng với trạng thái ban đầu được xác định rõ.

Một lớp có thể có nhiều hàm tạo (constructor overloading), miễn là mỗi hàm tạo có một chữ ký khác nhau (số lượng hoặc loại tham số khác nhau), mang lại sự linh hoạt trong cách các đối tượng có thể được khởi tạo.