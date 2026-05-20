export const oopCore = [
  {
    id: 'intro_oop',
    title: '1. Giới thiệu về OOP (Introduction to OOP)',
    type: 'Cơ bản',
    description: 'Tìm hiểu về triết lý Lập trình hướng đối tượng (OOP), các lợi ích cốt lõi và so sánh trực quan giữa OOP với Lập trình thủ tục.',
    interviewSignals: 'Phân biệt mô hình lập trình thủ tục (Procedural) và lập trình hướng đối tượng (OOP) về mặt cấu trúc dữ liệu và khả năng mở rộng.',
    practiceProblems: 'Tìm các ví dụ thực tế xung quanh bạn (Ví dụ: Xe cộ, Con người, Tài khoản) và phân tích thuộc tính/hành vi của chúng.',
    builtInMethods: [
      'OOP là gì? - Mô hình lập trình dựa trên khái niệm đối tượng.',
      'Tính mô-đun (Modularity) - Tách biệt bài toán thành các lớp.',
      'Tái sử dụng (Reusability) - Khả năng sử dụng lại mã nguồn.',
      'Dễ bảo trì (Maintainability) - Cấu trúc rõ ràng, dễ mở rộng.'
    ],
    memoryTrick: '🧠 Hãy nghĩ về chiếc Xe hơi: Các thông số như hãng xe, màu sắc là dữ liệu (Trường/Thuộc tính); còn các hành động như khởi động, phanh xe là hành vi (Phương thức).',
    code: `// So sánh tư duy lập trình:
// 1. Thủ tục (Procedural): dữ liệu và hàm tách rời
String carMake = "Toyota";
void startCar(String make) {
    System.out.println("Khởi động xe: " + make);
}

// 2. Hướng đối tượng (OOP): gộp chung dữ liệu & hành vi vào Class
class Car {
    String make = "Toyota";
    void start() {
        System.out.println("Khởi động xe: " + make);
    }
}`,
    summaryTableTitle: 'So sánh OOP & Lập trình Thủ tục',
    summaryTable: {
      headers: ['Tiêu chí', 'Lập trình thủ tục', 'Lập trình hướng đối tượng'],
      rows: [
        ['Trọng tâm', 'Hàm/thủ tục, các bước thực thi', 'Đối tượng, dữ liệu + hành vi'],
        ['Tổ chức dữ liệu', 'Dữ liệu và hàm tách biệt', 'Dữ liệu và phương thức đóng gói chung'],
        ['Thiết kế', 'Từ trên xuống (Top-down)', 'Từ dưới lên (Bottom-up)'],
        ['Khả năng mở rộng', 'Khó quản lý khi hệ thống lớn', 'Quản lý tốt nhờ tính mô-đun']
      ]
    }
  },
  {
    id: 'class_object',
    title: '2. Lớp & Đối tượng (Class & Object)',
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
class Car {
    String make;
    String model;
    int year;

    void start() {
        System.out.println("Khởi động xe: " + make + " " + model + " (" + year + ")");
    }
}

public class Main {
    public static void main(String[] args) {
        // 2. Tạo Đối tượng (Object) từ Lớp bằng từ khóa 'new'
        Car myCar = new Car();
        myCar.make = "Toyota";
        myCar.model = "Camry";
        myCar.year = 2023;
        
        // 3. Thực thi hành động
        myCar.start();
    }
}`,
    output: `Khởi động xe: Toyota Camry (2023)`
  },
  {
    id: 'encapsulation',
    title: '3. Tính Đóng Gói (Encapsulation)',
    type: 'Bảo mật dữ liệu',
    description: 'Nguyên lý che giấu thông tin nhạy cảm bên trong đối tượng bằng cách đặt thuộc tính là private. Chỉ cho phép đọc/ghi dữ liệu một cách an toàn thông qua các cổng kiểm soát công khai: Getters (lấy ra) và Setters (ghi vào).',
    interviewSignals: 'Access Modifiers: private (chỉ trong lớp), public (mọi nơi), protected (trong lớp, lớp con, cùng gói), default (trong cùng gói). Dùng Getters/Setters để kiểm soát dữ liệu.',
    practiceProblems: 'Thiết kế lớp BankAccount (tài khoản ngân hàng) bảo vệ số dư không bị gán số âm.',
    builtInMethods: [
      'private - Từ khóa giấu kín thuộc tính, chỉ trong lớp xem được',
      'public - Từ khóa mở rộng quyền truy cập từ mọi nơi',
      'getTenThuocTinh() - Phương thức đọc dữ liệu',
      'setTenThuocTinh(giaTri) - Phương thức cập nhật dữ liệu kèm kiểm tra điều kiện'
    ],
    memoryTrick: '🧠 Tính đóng gói giống như một CHIẾC TỦ ĐỒ SIÊU THỊ. Bạn không thể tự tiện thò tay lấy đồ của người khác (private). Bạn bắt buộc phải đưa vé quét/nhập mật mã (Getter/Setter) cho tủ mở ra một cách hợp lệ.',
    code: `class Car {
    private String make; // private: ẩn thông tin hãng xe

    // GETTER: Cho phép xem hãng xe một cách an toàn
    public String getMake() {
        return this.make;
    }

    // SETTER: Cho phép cập nhật hãng xe kèm xác thực đầu vào
    public void setMake(String make) {
        if (make != null && !make.isEmpty()) {
            this.make = make;
        } else {
            System.out.println("Hãng xe không hợp lệ!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        // myCar.make = "Toyota"; // ❌ Bị lỗi biên dịch ngay! Không cho truy cập trực tiếp
        
        myCar.setMake("Toyota"); // ✅ Đúng quy trình
        System.out.println("Hãng xe: " + myCar.getMake());
    }
}`,
    output: `Hãng xe: Toyota`
  },
  {
    id: 'constructors',
    title: '4. Hàm Khởi Tạo (Constructors)',
    type: 'Khởi tạo đối tượng',
    description: 'Hàm đặc biệt cùng tên với Class, không có kiểu trả về, tự động chạy ngay khi đối tượng được sinh ra bằng từ khóa new. Dùng để cài đặt các giá trị ban đầu cho đối tượng.',
    interviewSignals: 'Nạp chồng Constructor là gì? Khác biệt giữa Constructor mặc định (Default) và Constructor có tham số.',
    practiceProblems: 'Viết Class Dog có các Constructor mặc định và có tham số để thiết lập tên và tuổi.',
    builtInMethods: [
      'this(...) - Gọi constructor khác trong cùng class',
      'super(...) - Gọi constructor của lớp cha'
    ],
    memoryTrick: '🧠 Constructor giống như các BƯỚC THIẾT LẬP BAN ĐẦU khi bạn vừa mua điện thoại mới (chọn Ngôn ngữ, Wifi, Nhập tên). Thiết lập xong máy mới sẵn sàng hoạt động.',
    code: `class Dog {
    String name;
    int age;

    // 1. Constructor mặc định (Không tham số)
    public Dog() {
        this("Unknown", 0); // Gọi constructor có tham số bên dưới
    }

    // 2. Constructor có tham số (Nạp chồng - Overloading)
    public Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog1 = new Dog(); // Chạy Constructor mặc định
        Dog dog2 = new Dog("Alaska", 3); // Chạy Constructor có tham số
        
        System.out.println("Dog 1: " + dog1.name + " - " + dog1.age + " tuổi");
        System.out.println("Dog 2: " + dog2.name + " - " + dog2.age + " tuổi");
    }
}`,
    output: `Dog 1: Unknown - 0 tuổi\nDog 2: Alaska - 3 tuổi`
  },
  {
    id: 'inheritance_polymorphism',
    title: '5. Kế Thừa & Đa Hình (Inheritance & Polymorphism)',
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
    title: '6. Tính Trừu Tượng (Abstraction)',
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
    id: 'oop_glossary',
    title: '7. Thuật ngữ cốt lõi (OOP Basics Glossary)',
    type: 'Glossary',
    description: 'Bảng tra cứu nhanh các thuật ngữ cốt lõi về lập trình hướng đối tượng (OOP), các bộ sửa đổi truy cập và cơ chế khởi tạo đối tượng trong Java.',
    bulletSections: [
      {
        title: 'Khái niệm OOP Nền tảng (Core OOP Concepts)',
        items: [
          '**Object-Oriented Programming (OOP) (Lập trình hướng đối tượng):** Mô hình lập trình dựa trên khái niệm "đối tượng" chứa dữ liệu (thuộc tính) và hành vi (phương thức).',
          '**Class (Lớp):** Bản thiết kế hoặc khuôn mẫu định nghĩa cấu trúc dữ liệu và hành vi chung cho các đối tượng được tạo ra từ nó.',
          '**Object (Đối tượng):** Một thể hiện cụ thể (instance) của một lớp, chiếm không gian trong bộ nhớ Heap và có dữ liệu riêng biệt.',
          '**Instantiation (Khởi tạo):** Quá trình tạo một đối tượng cụ thể từ một lớp bằng từ khóa `new`.',
          '**Instance (Thể hiện):** Một đối tượng cụ thể được tạo từ lớp; một bản sao thực tế của bản thiết kế lớp.',
          '**Blueprint (Bản thiết kế):** Cách ví von mô tả lớp, định nghĩa cấu trúc và hành vi cho tất cả các đối tượng.',
          '**Programming Paradigm (Mô hình lập trình):** Phong cách hoặc cách tiếp cận cơ bản để thiết kế và viết mã nguồn (ví dụ: thủ tục, hướng đối tượng).'
        ]
      },
      {
        title: 'Thành phần Lớp & Đóng gói (Class Members & Encapsulation)',
        items: [
          '**Attributes (Thuộc tính):** Dữ liệu mà một đối tượng sở hữu, định nghĩa trạng thái của đối tượng (còn gọi là trường hoặc biến thể hiện).',
          '**Fields (Trường):** Các biến được khai báo bên trong một lớp để lưu trữ trạng thái của đối tượng.',
          '**Behavior (Hành vi):** Các hành động hoặc thao tác mà đối tượng có thể thực hiện, thể hiện qua các phương thức.',
          '**Methods (Phương thức):** Các hàm định nghĩa bên trong lớp để xử lý dữ liệu và thực hiện hành vi của đối tượng.',
          '**Encapsulation (Đóng gói):** Nguyên tắc gộp dữ liệu và phương thức xử lý vào một lớp, đồng thời che giấu chi tiết cài đặt nội bộ.',
          '**Data Hiding (Ẩn dữ liệu):** Khía cạnh đóng gói giúp ẩn chi tiết biến nội bộ khỏi truy cập trực tiếp từ bên ngoài bằng `private`.',
          '**Access Modifiers (Bộ sửa đổi truy cập):** Các từ khóa (`private`, `public`, `protected`, default) kiểm soát quyền truy cập và hiển thị của lớp, trường, phương thức.',
          '**Getters (Phương thức truy cập):** Phương thức public dùng để đọc giá trị của trường private một cách an toàn.',
          '**Setters (Phương thức thay đổi):** Phương thức public dùng để ghi đè/cập nhật giá trị trường private kèm logic xác thực.'
        ]
      },
      {
        title: 'Cơ chế Khởi tạo & Từ khóa (Instantiation & Keywords)',
        items: [
          '**Constructor (Hàm khởi tạo):** Phương thức đặc biệt cùng tên lớp, không có kiểu trả về, tự động chạy khi dùng `new` để tạo đối tượng.',
          '**Default Constructor (Hàm khởi tạo mặc định):** Hàm khởi tạo không đối số tự động cung cấp bởi Java nếu lớp không khai báo constructor nào.',
          '**Parameterized Constructor (Hàm khởi tạo có tham số):** Hàm khởi tạo chấp nhận tham số đầu vào để gán giá trị khởi điểm cho các trường.',
          '**Constructor Overloading (Nạp chồng hàm khởi tạo):** Khả năng khai báo nhiều constructor trong cùng một lớp bằng cách thay đổi số lượng hoặc kiểu tham số.',
          '**this keyword (Từ khóa this):** Tham chiếu trỏ đến đối tượng hiện tại, dùng để phân biệt biến instance và tham số trùng tên.',
          '**Modularity (Tính mô-đun):** Chia nhỏ hệ thống lớn thành các lớp/đối tượng độc lập giúp dễ quản lý và bảo trì.',
          '**Reusability (Tính tái sử dụng):** Khả năng sử dụng lại mã nguồn của lớp ở nhiều nơi mà không cần viết lại.',
          '**Maintainability (Khả năng bảo trì):** Đặc điểm hệ thống dễ gỡ lỗi, cập nhật và mở rộng nhờ cấu trúc rõ ràng.'
        ]
      }
    ]
  },
  {
    id: 'oop_review_quizzes',
    title: '8. Câu hỏi Ôn tập & Bài tập Luyện tập (OOP Review & Quizzes)',
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
    title: '9. Câu hỏi Phỏng vấn thường gặp (OOP Interview FAQs)',
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
