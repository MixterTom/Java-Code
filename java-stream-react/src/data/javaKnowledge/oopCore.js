export const oopCore = [
  {
    id: 'class_object',
    title: '1. Lớp & Đối tượng (Class & Object)',
    type: 'Cơ bản',
    description: 'Khái niệm nền tảng nhất của OOP. Lớp (Class) là bản thiết kế, định nghĩa các thuộc tính (dữ liệu) và hành vi (phương thức). Đối tượng (Object) là thực thể thực tế được tạo ra từ bản thiết kế đó.',
    interviewSignals: 'Phân biệt sự khác nhau giữa Class (Bản vẽ trên giấy) và Object (Ngôi nhà thực tế có địa chỉ cụ thể trên bộ nhớ RAM).',
    practiceProblems: 'Tạo class Student (học sinh), Book (sách), Product (sản phẩm) để tập làm quen.',
    builtInMethods: [
      'new ClassName() - Lệnh tạo đối tượng',
      'object.propertyName - Cách xem/sửa thuộc tính của đối tượng',
      'object.methodName() - Cách gọi hành động của đối tượng'
    ],
    memoryTrick: '🧠 Hãy tưởng tượng: Class giống như chiếc KHUÔN LÀM BÁNH (chỉ định hình dạng, kích cỡ chiếc bánh). Còn Object chính là những CHIẾC BÁNH THẬT được đúc ra từ khuôn đó (mỗi chiếc bánh có thể có vị dâu, vị socola khác nhau).',
    code: `// 1. Tạo Lớp (Class) - Bản thiết kế
class Cake {
    String flavor; // Thuộc tính (Dữ liệu)

    void eat() { // Hành vi (Phương thức)
        System.out.println("Măm măm chiếc bánh vị " + flavor + "! Ngon tuyệt!");
    }
}

public class Main {
    public static void main(String[] args) {
        // 2. Tạo Đối tượng (Object) từ Lớp bằng từ khóa 'new'
        Cake strawberryCake = new Cake();
        strawberryCake.flavor = "Dâu Tây"; // Gán giá trị
        
        Cake chocolateCake = new Cake();
        chocolateCake.flavor = "Socola"; // Gán giá trị khác
        
        // 3. Thực thi hành động
        strawberryCake.eat();
        chocolateCake.eat();
    }
}`,
    output: `Măm măm chiếc bánh vị Dâu Tây! Ngon tuyệt!\nMăm măm chiếc bánh vị Socola! Ngon tuyệt!`
  },
  {
    id: 'encapsulation',
    title: '2. Tính Đóng Gói (Encapsulation)',
    type: 'Bảo mật dữ liệu',
    description: 'Nguyên lý che giấu thông tin nhạy cảm bên trong đối tượng bằng cách đặt thuộc tính là private. Chỉ cho phép đọc/ghi dữ liệu một cách an toàn thông qua các cổng kiểm soát công khai: Getters (lấy ra) và Setters (ghi vào).',
    interviewSignals: 'Tại sao không nên để thuộc tính public? (Vì bên ngoài sẽ sửa bừa bãi dữ liệu sai nghiệp vụ). Cách sử dụng Getter/Setter để kiểm soát dữ liệu.',
    practiceProblems: 'Thiết kế lớp BankAccount (tài khoản ngân hàng) bảo vệ số dư không bị gán số âm.',
    builtInMethods: [
      'private - Từ khóa giấu kín thuộc tính, chỉ trong lớp xem được',
      'public - Từ khóa mở rộng quyền truy cập từ mọi nơi',
      'getTenThuocTinh() - Phương thức đọc dữ liệu',
      'setTenThuocTinh(giaTri) - Phương thức cập nhật dữ liệu kèm kiểm tra điều kiện'
    ],
    memoryTrick: '🧠 Tính đóng gói giống như một CHIẾC TỦ ĐỒ SIÊU THỊ. Bạn không thể tự tiện thò tay lấy đồ của người khác (private). Bạn bắt buộc phải đưa vé quét/nhập mật mã (Getter/Setter) cho tủ mở ra một cách hợp lệ.',
    code: `class BankAccount {
    private double balance; // private: giấu kín số dư, chặn sửa bừa bãi

    // GETTER: Cho phép xem số dư một cách an toàn
    public double getBalance() {
        return this.balance;
    }

    // SETTER: Cho phép nạp tiền nhưng bắt buộc phải kiểm tra điều kiện
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Nạp thành công: +" + amount + " VND");
        } else {
            System.out.println("Số tiền nạp phải lớn hơn 0!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        // account.balance = -999999; // ❌ Bị lỗi biên dịch ngay! Không cho truy cập trực tiếp

        account.deposit(500000); //  Đúng quy trình
        System.out.println("Số dư hiện tại: " + account.getBalance() + " VND");
    }
}`,
    output: `Nạp thành công: +500000.0 VND\nSố dư hiện tại: 500000.0 VND`
  },
  {
    id: 'constructors',
    title: '3. Hàm Khởi Tạo (Constructors)',
    type: 'Khởi tạo đối tượng',
    description: 'Hàm đặc biệt cùng tên với Class, không có kiểu trả về, tự động chạy ngay khi đối tượng được sinh ra bằng từ khóa new. Dùng để cài đặt các giá trị ban đầu cho đối tượng.',
    interviewSignals: 'Nạp chồng Constructor là gì? Khác biệt giữa Constructor mặc định (Default) và Constructor có tham số.',
    practiceProblems: 'Viết Class SmartPhone có các Constructor cài đặt thương hiệu và dung lượng bộ nhớ khác nhau.',
    builtInMethods: [
      'this(...) - Gọi constructor khác trong cùng class',
      'super(...) - Gọi constructor của lớp cha'
    ],
    memoryTrick: '🧠 Constructor giống như các BƯỚC THIẾT LẬP BAN ĐẦU khi bạn vừa mua điện thoại mới (chọn Ngôn ngữ, Wifi, Nhập tên). Thiết lập xong máy mới sẵn sàng hoạt động.',
    code: `class SmartPhone {
    String brand;
    int storage; // GB

    // 1. Constructor mặc định (Không tham số)
    public SmartPhone() {
        this.brand = "Chưa biết";
        this.storage = 128; // Mặc định 128GB
    }

    // 2. Constructor có tham số (Nạp chồng - Overloading)
    public SmartPhone(String brand, int storage) {
        this.brand = brand;
        this.storage = storage;
    }
}

public class Main {
    public static void main(String[] args) {
        SmartPhone phone1 = new SmartPhone(); // Chạy Constructor 1
        SmartPhone phone2 = new SmartPhone("Apple", 256); // Chạy Constructor 2
        
        System.out.println("Phone 1: " + phone1.brand + " - " + phone1.storage + "GB");
        System.out.println("Phone 2: " + phone2.brand + " - " + phone2.storage + "GB");
    }
}`,
    output: `Phone 1: Chưa biết - 128GB\nPhone 2: Apple - 256GB`
  },
  {
    id: 'inheritance_polymorphism',
    title: '4. Kế Thừa & Đa Hình (Inheritance & Polymorphism)',
    type: 'Tái sử dụng & Linh hoạt',
    description: 'Kế thừa (Inheritance): Lớp con nhận lại các thuộc tính và hành vi của lớp cha bằng từ khóa extends. Đa hình (Polymorphism): Lớp con có thể định nghĩa lại (Ghi đè - Override) hành vi nhận từ cha để hoạt động theo cách riêng của mình.',
    interviewSignals: 'Phân biệt Overloading (Nạp chồng - Cùng class, khác tham số) và Overriding (Ghi đè - Khác class có quan hệ cha-con, cùng chữ ký hàm).',
    practiceProblems: 'Tạo lớp cha Vehicle (Phương tiện) và các lớp con Car, MotorBike ghi đè phương thức run().',
    builtInMethods: [
      'extends - Từ khóa để kế thừa',
      '@Override - Chú thích báo cho Java biết đây là hàm ghi đè lại của cha'
    ],
    memoryTrick: '🧠 KẾ THỪA giống như cha truyền gen cho con (thừa hưởng các đặc tính). ĐA HÌNH giống như việc cha dạy con tập kêu, nhưng con CHÓ thì sủa "Gâu Gâu", còn con MÈO thì kêu "Meo Meo"!',
    code: `// Lớp Cha (Superclass)
class Animal {
    void makeSound() {
        System.out.println("Động vật phát ra tiếng kêu");
    }
}

// Lớp Con (Subclass) kế thừa từ Animal
class Dog extends Animal {
    @Override // Ghi đè (Override)
    void makeSound() {
        System.out.println("Gâu gâu! 🐕");
    }
}

class Cat extends Animal {
    @Override // Ghi đè (Override)
    void makeSound() {
        System.out.println("Meo meo! 🐈");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog(); // Ép kiểu ngầm định (Tính Đa hình)
        Animal myCat = new Cat();
        
        myDog.makeSound(); // Chạy phiên bản của Dog
        myCat.makeSound(); // Chạy phiên bản của Cat
    }
}`,
    output: `Gâu gâu! 🐕\nMeo meo! 🐈`
  },
  {
    id: 'abstraction',
    title: '5. Tính Trừu Tượng (Abstraction)',
    type: 'Đơn giản hóa hệ thống',
    description: 'Lược bỏ những chi tiết kỹ thuật phức tạp bên trong, chỉ cung cấp cho người dùng một giao diện điều khiển đơn giản. Trong Java, được thể hiện thông qua Abstract Class (Lớp trừu tượng) hoặc Interface (Giao diện).',
    interviewSignals: 'Phân biệt sự khác nhau giữa Abstract Class (vẫn có thể chứa biến và hàm có thân) và Interface (chỉ định nghĩa hành vi mẫu, không chứa trạng thái).',
    practiceProblems: 'Thiết kế interface PaymentMethod (Momo, Visa) có phương thức pay() trừu tượng.',
    builtInMethods: [
      'abstract - Khai báo lớp hoặc phương thức trừu tượng (không có thân hàm)',
      'interface - Định nghĩa khung mẫu hành vi thuần túy',
      'implements - Từ khóa để lớp con hiện thực hóa Interface'
    ],
    memoryTrick: '🧠 Tính trừu tượng giống như chiếc VÔ LĂNG XE HƠI hay CHIẾC REMOTE TV. Bạn chỉ cần bấm nút Bật/Tắt là TV chạy. Bạn hoàn toàn không cần biết bảng mạch bên trong xử lý sóng hồng ngoại hay dòng điện ra sao!',
    code: `// Định nghĩa Interface (Mẫu hành vi trừu tượng)
interface RemoteControl {
    void turnOn(); // Phương thức trừu tượng (chỉ gọi tên, không viết thân hàm)
}

// Lớp con hiện thực hóa
class TvRemote implements RemoteControl {
    @Override
    public void turnOn() {
        System.out.println("Mở Tivi LED: Kết nối cổng HDMI, bật đèn nền...");
    }
}

public class Main {
    public static void main(String[] args) {
        RemoteControl myRemote = new TvRemote();
        myRemote.turnOn(); // Gọi cực kỳ đơn giản!
    }
}`,
    output: `Mở Tivi LED: Kết nối cổng HDMI, bật đèn nền...`
  },
  {
    id: 'oop_review_quizzes',
    title: '6. Câu hỏi Ôn tập & Bài tập Luyện tập (OOP Review & Quizzes)',
    type: 'Luyện tập & Tự kiểm tra',
    description: 'Tổng hợp 10 câu hỏi đố nhanh để tự kiểm tra kiến thức về các khái niệm OOP cốt lõi và 5 câu hỏi tự luận mở rộng tư duy thiết kế hệ thống.',
    interviewSignals: 'Tự đánh giá độ hiểu bài trước khi đi phỏng vấn. Tăng tốc phản xạ lập trình hướng đối tượng.',
    practiceProblems: 'Hãy click vào từng thẻ câu hỏi bên dưới để xem gợi ý đáp án cực kỳ trực quan và sinh động!',
    builtInMethods: [
      'Câu đố 1 - 5 - Kiểm tra khái niệm cơ bản: Định nghĩa OOP, Lợi ích, Lớp và Đối tượng, toán tử chấm.',
      'Câu đố 6 - 10 - Kiểm tra khái niệm nâng cao: Tính đóng gói, Access modifiers, Getters/Setters, Constructors.',
      'Bài luận 1 - 5 - Các câu hỏi mở rộng về thiết kế và tối ưu cấu trúc hệ thống.'
    ],
    memoryTrick: '🧠 Việc tự làm bài tập kiểm tra và đối chiếu lời giải sẽ giúp tăng khả năng khắc sâu kiến thức của não bộ lên đến 300%!',
    quizzes: [
      {
        q: "OOP là gì và ý tưởng cốt lõi của nó là gì?",
        a: "OOP (Lập trình hướng đối tượng) là mô hình lập trình dựa trên khái niệm 'đối tượng' chứa dữ liệu và hành động. Ý tưởng cốt lõi là mô hình hóa các thực thể thế giới thực giúp code trực quan, dễ quản lý và dễ tái sử dụng."
      },
      {
        q: "Kể ra ba lợi ích chính của việc sử dụng Lập trình hướng đối tượng.",
        a: "Ba lợi ích chính bao gồm: \n1) Tính mô-đun (Modularity): Dễ chia nhỏ code.\n2) Khả năng tái sử dụng (Reusability): Tái sử dụng các lớp đã viết.\n3) Khả năng bảo trì (Maintainability): Dễ gỡ lỗi, nâng cấp mà không sập hệ thống."
      },
      {
        q: "Giải thích sự khác biệt cơ bản giữa Lớp (Class) và Đối tượng (Object).",
        a: "Class là bản thiết kế trên giấy (khuôn mẫu định nghĩa thuộc tính và hành động chung). Object là thực thể thực tế (instance) được đúc ra từ khuôn đó và được lưu trữ trên bộ nhớ RAM với dữ liệu riêng biệt."
      },
      {
        q: "Tại sao lại cần phải \"khởi tạo\" (Instantiation) một đối tượng?",
        a: "Để yêu cầu JVM cấp phát vùng nhớ Heap, cài đặt trạng thái ban đầu cho các biến và chuẩn bị đối tượng sẵn sàng đi vào hoạt động trong chương trình."
      },
      {
        q: "Mô tả mục đích của toán tử chấm (.) khi làm việc với các đối tượng.",
        a: "Dùng để kích hoạt hành động (gọi phương thức) hoặc truy xuất/chỉnh sửa thông tin (truy cập trường) của một đối tượng cụ thể. Ví dụ: myDog.makeSound()."
      },
      {
        q: "Đóng gói (Encapsulation) là gì và mục đích chính của Data Hiding là gì?",
        a: "Đóng gói là việc gom dữ liệu và phương thức xử lý vào một class. Data Hiding (Ẩn dữ liệu) đặt thuộc tính là private nhằm chặn việc can thiệp, gán sai lệch dữ liệu bừa bãi từ ngoài, bảo vệ nghiệp vụ của hệ thống."
      },
      {
        q: "Sự khác biệt giữa access modifier 'private' và 'public' là gì?",
        a: "- 'private': Giới hạn tối đa, chỉ có nội bộ lớp đó mới truy cập được.\n- 'public': Mở hoàn toàn, bất kỳ lớp nào ở gói nào cũng gọi được."
      },
      {
        q: "Giải thích tại sao chúng ta sử dụng Getters và Setters trong OOP.",
        a: "Để làm cầu nối trung gian kiểm soát đọc/ghi trường private. Giúp ta thêm bộ lọc kiểm duyệt dữ liệu (ví dụ: cấm nạp số dư âm) trước khi dữ liệu được ghi đè vào biến."
      },
      {
        q: "Hàm khởi tạo (Constructor) là gì và khi nào nó được tự động gọi?",
        a: "Là một phương thức khởi tạo đặc biệt cùng tên với lớp, không có kiểu trả về. Nó được gọi tự động và duy nhất một lần ngay khi ta dùng từ khóa 'new' để tạo đối tượng."
      },
      {
        q: "Sự khác biệt giữa hàm khởi tạo mặc định và hàm khởi tạo có tham số là gì?",
        a: "- Mặc định (Default): Không tham số, do Java tự tạo nếu lớp trống, gán giá trị mặc định cho biến (0, null).\n- Có tham số: Cho phép lập trình viên chủ động truyền thông tin thiết lập ngay từ khi tạo đối tượng."
      }
    ],
    essays: [
      {
        q: "Phân tích cách Lập trình hướng đối tượng cải thiện khả năng bảo trì và linh hoạt của mã so với mô hình lập trình thủ tục (Procedural Programming).",
        hint: "Hãy tập trung phân tích việc đóng gói dữ liệu tại chỗ (không bị Service bên ngoài can thiệp) và tính độc lập của các Module."
      },
      {
        q: "Thảo luận sâu về đóng gói: Làm thế nào Getters và Setters bảo vệ tính toàn vẹn dữ liệu và ngăn chặn việc phá vỡ cấu trúc nghiệp vụ của đối tượng?",
        hint: "Getter có thể trả về bản sao unmodifiable (như Collections.unmodifiableList), Setter có thể thêm Validation (kiểm tra điều kiện hợp lệ)."
      },
      {
        q: "So sánh và đối chiếu vai trò của một Lớp và một Đối tượng. Tại sao cả hai khái niệm này đều là bắt buộc và không thể thay thế cho nhau?",
        hint: "Class giống như bản vẽ kỹ thuật kiến trúc, Object là ngôi nhà được xây dựng từ bản vẽ đó. Không thể ở trong bản vẽ, và không thể xây nhà nếu không có bản vẽ!"
      },
      {
        q: "Phân tích các loại Constructor (Mặc định, Có tham số, Nạp chồng). Việc nạp chồng Constructor mang lại sự linh hoạt như thế nào cho lập trình viên?",
        hint: "Cho phép khởi tạo đối tượng bằng nhiều cách khác nhau (ví dụ: tạo tài khoản chỉ cần email, hoặc tạo tài khoản cần đầy đủ thông tin)."
      },
      {
        q: "Thiết kế hệ thống: Nếu thiết kế một hệ thống quản lý thư viện, bạn sẽ phân bổ các lớp Sách (Book), Thành viên (Member) và Giao dịch (Transaction) như thế nào?",
        hint: "Book chứa mã sách, trạng thái mượn. Member chứa thông tin thẻ. Transaction kết nối Book và Member kèm ngày mượn/ngày trả."
      }
    ]
  },
  {
    id: 'oop_interview_faqs',
    title: '7. Câu hỏi Phỏng vấn thường gặp (OOP Interview FAQs)',
    type: 'Kinh nghiệm Phỏng vấn',
    description: 'Tổng hợp 8 câu hỏi phỏng vấn kinh điển về OOP thường xuất hiện trong các buổi phỏng vấn kỹ thuật từ cấp độ Junior đến Senior kèm câu trả lời chuẩn xác nhất.',
    interviewSignals: 'Bộ câu hỏi bắt buộc phải vượt qua trong phần Phỏng vấn lý thuyết Core Java & Tư duy Thiết kế.',
    practiceProblems: 'Hãy click vào từng tiêu đề câu hỏi bên dưới để mở rộng câu trả lời chi tiết từ các chuyên gia!',
    builtInMethods: [
      'FAQ 1 & 2 - Bản chất cốt lõi của Lập trình hướng đối tượng và cách phân biệt Class/Object.',
      'FAQ 3 & 4 - Cơ chế hoạt động của Toán tử chấm và Bản chất thật của Đóng gói dữ liệu.',
      'FAQ 5 & 6 - Cách sử dụng cặp Getter/Setter hiệu quả và Vai trò của 4 Access Modifiers trong Java.',
      'FAQ 7 & 8 - Chi tiết về vòng đời Constructor và Cơ chế nạp chồng Constructor Overloading.'
    ],
    memoryTrick: '🧠 Khi phỏng vấn, thay vì đọc định nghĩa khô khan, hãy lấy ví dụ thực tế như chiếc KHUÔN BÁNH, VÔ LĂNG XE hay CHIẾC REMOTE để minh họa. Nhà tuyển dụng cực kỳ đánh giá cao điều này!',
    faqs: [
      {
        q: "FAQ 1: OOP là gì và tại sao nó lại vô cùng quan trọng trong phát triển phần mềm?",
        a: "OOP (Object-Oriented Programming) là một phương pháp luận lập trình dựa trên khái niệm các 'đối tượng' đại diện cho các thực thể thực tế.\n\nNó vô cùng quan trọng vì:\n✔ Tính Mô-đun cao (Modularity): Dễ phân rã bài toán lớn.\n✔ Tái sử dụng cao (Reusability): Tận dụng lại các lớp đã định nghĩa.\n✔ Dễ bảo trì (Maintainability): Khắc phục lỗi cục bộ mà không gây hiệu ứng Domino sập hệ thống."
      },
      {
        q: "FAQ 2: Sự khác biệt thực sự giữa Lớp (Class) và Đối tượng (Object) là gì?",
        a: "✔ Lớp (Class): Là một BẢN THIẾT KẾ hoặc một KHUÔN MẪU dùng để định hình cấu trúc dữ liệu và hành động của đối tượng. Class chỉ là khái niệm trừu tượng, không chiếm dụng bộ nhớ RAM thật.\n✔ Đối tượng (Object): Là một THỂ HIỆN THỰC TẾ (Instance) được đúc ra từ Class cha, chiếm hữu vùng nhớ thật trên Heap và mang một bộ dữ liệu cụ thể riêng biệt."
      },
      {
        q: "FAQ 3: Làm cách nào để truy cập các trường dữ liệu và gọi phương thức của đối tượng?",
        a: "Chúng ta sử dụng toán tử dấu chấm (.) để chỉ định thành viên cần tương tác:\n✔ Truy cập/sửa thuộc tính: đốiTượng.tênThuộcTính = giáTrị;\n✔ Gọi hành động: đốiTượng.tênPhươngThức();\n\nVí dụ thực tế:\n`Car myCar = new Car(); myCar.speed = 120; myCar.startEngine();`"
      },
      {
        q: "FAQ 4: Khái niệm Đóng gói (Encapsulation) là gì và tại sao nó lại là nền tảng sống còn của OOP?",
        a: "Đóng gói là việc bao bọc dữ liệu (trường) và các hành động (phương thức) vào trong một đơn vị lớp duy nhất, đồng thời ẩn giấu dữ liệu nhạy cảm bằng từ khóa 'private'.\n\nNó là sống còn vì giúp:\n- Ngăn chặn mã nguồn bên ngoài chỉnh sửa sai lệch trạng thái nội tại (bảo đảm tính toàn vẹn nghiệp vụ).\n- Che giấu độ phức tạp cơ khí, chỉ cung cấp bảng điều khiển đơn giản."
      },
      {
        q: "FAQ 5: Getters và Setters là gì? Chúng liên quan gì đến Đóng gói dữ liệu?",
        a: "✔ Getters: Là phương thức đọc dữ liệu từ biến private ra ngoài.\n✔ Setters: Là phương thức ghi đè/cập nhật giá trị mới cho biến private.\n\nLiên quan đóng gói: Chúng là hai 'cánh cổng' có bảo vệ. Setter cho phép ta thêm code xác thực đầu vào (ví dụ: chỉ cho tuổi > 18 mới set), bảo đảm dữ liệu luôn đúng nghiệp vụ."
      },
      {
        q: "FAQ 6: Bộ điều chỉnh quyền truy cập (Access Modifiers) trong Java hoạt động như thế nào?",
        a: "Java cung cấp 4 cấp độ kiểm soát truy cập từ chặt chẽ đến lỏng lẻo:\n1. private: Chỉ cho phép truy cập từ trong nội bộ class (tính đóng gói tối đa).\n2. default (không viết gì): Chỉ cho phép các class trong cùng thư mục (package) gọi.\n3. protected: Cho các class cùng package và lớp con ở package khác (kế thừa) gọi.\n4. public: Cho phép bất kỳ class nào gọi từ bất cứ nơi đâu."
      },
      {
        q: "FAQ 7: Hàm tạo (Constructor) là gì và mục đích thực sự của nó?",
        a: "Constructor là một loại phương thức đặc biệt, trùng tên hoàn toàn với Class và không có kiểu dữ liệu trả về.\n\nMục đích thực sự: Tự động chạy ngay khi tạo đối tượng bằng từ khóa 'new' nhằm thiết lập các cấu hình sơ bộ, gán các giá trị ban đầu hợp lệ trước khi đối tượng được mang ra sử dụng."
      },
      {
        q: "FAQ 8: Phân biệt Hàm tạo mặc định (Default) và Hàm tạo có tham số (Parameterized).",
        a: "✔ Default Constructor: Không nhận tham số đầu vào. Nếu class của bạn trống trơn không khai báo constructor nào, Java sẽ tự động cung cấp một default constructor âm thầm để khởi tạo các biến về 0 hoặc null.\n✔ Parameterized Constructor: Nhận đối số truyền vào, giúp bạn linh hoạt thiết lập thông tin đặc thù ngay lập tức cho đối tượng (Ví dụ: thiết lập ngay tên và giá tiền cho một sản phẩm mới tạo)."
      }
    ]
  }
];
