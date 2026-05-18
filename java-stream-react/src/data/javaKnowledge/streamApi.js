export const streamApi = [
  {
    id: 'stream_concept',
    title: 'Khái niệm Stream API',
    type: 'Concept',
    description: 'Stream đại diện cho một luồng xử lý dữ liệu tuần tự hoặc song song trên một nguồn dữ liệu (Collection, Array, I/O). Stream không phải là cấu trúc dữ liệu và không lưu trữ phần tử. Nó hoạt động theo mô hình Pipeline (Source -> Intermediate Operations -> Terminal Operation).',
    interviewSignals: 'Phân biệt Stream và Collection. Bản chất của cơ chế Lazy Evaluation (tính lười biếng) trong Stream.',
    practiceProblems: 'Hiểu rõ luồng dữ liệu chạy qua băng chuyền và quy trình xử lý luồng.',
    builtInMethods: [
      'stream() - Tạo stream tuần tự từ Collection',
      'parallelStream() - Tạo stream xử lý song song đa nhân CPU',
      'stream.isParallel() - Kiểm tra xem stream có chạy song song không'
    ],
    memoryTrick: '🧠 Stream giống như băng chuyền của nhà máy. Dữ liệu chạy qua các chốt kiểm tra (Intermediate) rồi đóng gói vào thùng hàng (Terminal).',
    code: `List<Integer> list = Arrays.asList(1, 2, 3);
// Tạo và in từng phần tử của Stream
list.stream().forEach(System.out::println);`,
    output: `1\n2\n3`
  },
  {
    id: 'predicate',
    title: 'Predicate<T>',
    type: 'Functional Interface',
    description: 'Giao diện hàm (Functional Interface) nhận vào một tham số kiểu T và trả về giá trị boolean (true/false). Thường được dùng để lọc dữ liệu trong Stream API thông qua hàm filter().',
    interviewSignals: 'Khi nhà tuyển dụng hỏi về Functional Interface trong Java 8, hoặc cách định nghĩa các điều kiện kiểm tra động.',
    practiceProblems: 'Viết hàm lọc danh sách đối tượng tùy biến, kết hợp nhiều Predicate bằng and(), or(), negate().',
    builtInMethods: [
      'test(T t) - Đánh giá điều kiện trên đối tượng đầu vào và trả về boolean',
      'and(Predicate other) - Kết hợp điều kiện VÀ (&&)',
      'or(Predicate other) - Kết hợp điều kiện HOẶC (||)',
      'negate() - Phép phủ định điều kiện KHÔNG (!)'
    ],
    memoryTrick: '🧠 Predicate giống như một người bảo vệ ở cửa quán bar. Kiểm tra chứng minh thư: Đủ tuổi thì cho vào (true), không đủ thì mời ra (false).',
    code: `Predicate<Integer> isPositive = n -> n > 0;

System.out.println("Số 10 có dương không? " + isPositive.test(10));
System.out.println("Số -5 có dương không? " + isPositive.test(-5));
System.out.println();`,
    output: `Số 10 có dương không? true\nSố -5 có dương không? false`
  },
  {
    id: 'consumer',
    title: 'Consumer<T>',
    type: 'Functional Interface',
    description: 'Giao diện hàm nhận vào một tham số kiểu T và thực hiện hành động nào đó nhưng KHÔNG trả về bất kỳ kết quả nào (void). Thường dùng để in ấn, ghi log hoặc thực thi side-effect (như trong forEach()).',
    interviewSignals: 'Dùng khi cần duyệt qua các phần tử và thực hiện tác vụ phụ (side-effects) mà không cần lấy kết quả đầu ra.',
    practiceProblems: 'Thực thi ghi log hàng loạt, xử lý hoặc cập nhật trạng thái dữ liệu bất đồng bộ.',
    memoryTrick: '🧠 Consumer giống như một "kẻ tiêu thụ". Bạn đưa đồ ăn cho nó, nó ăn sạch (tiêu thụ) và không nhả lại cái gì cả (void).',
    builtInMethods: [
      'accept(T t) - Thực hiện hành động trên tham số đầu vào và không trả về gì',
      'andThen(Consumer after) - Tạo chuỗi hành động kế tiếp sau khi accept xong'
    ],
    code: `Consumer<String> printWithStars = s -> System.out.println("*** " + s + " ***");

printWithStars.accept("Java là niềm vui");
printWithStars.accept("Học lập trình hàm");
System.out.println();`,
    output: `*** Java là niềm vui ***\n*** Học lập trình hàm ***`
  },
  {
    id: 'function',
    title: 'Function<T, R>',
    type: 'Functional Interface',
    description: 'Giao diện hàm nhận vào tham số kiểu T và biến đổi thành kết quả kiểu R. Đây là xương sống của hàm map() trong Stream API dùng để biến đổi dữ liệu.',
    interviewSignals: 'Hỏi về cơ chế map/biến đổi dữ liệu từ tầng này sang tầng khác (DTO mapping) trong thiết kế hệ thống.',
    practiceProblems: 'Chuyển chuỗi thành số, biến đổi Entity sang DTO và ngược lại.',
    memoryTrick: '🧠 Function giống như một máy xay thịt. Bạn bỏ thịt heo vào (T), máy xay ra xúc xích (R). Đầu vào và đầu ra có thể khác hoàn toàn kiểu dữ liệu.',
    builtInMethods: [
      'apply(T t) - Biến đổi đầu vào t thành kết quả R',
      'andThen(Function after) - Thực hiện hàm biến đổi tiếp theo sau hàm hiện tại',
      'compose(Function before) - Thực hiện hàm biến đổi trước đó rồi mới đến hàm hiện tại'
    ],
    code: `Function<String, Integer> doubleNumber = s -> Integer.parseInt(s) * 2;

int result = doubleNumber.apply("50");
System.out.println("Kết quả biến đổi '50': " + result);
System.out.println("Kết quả biến đổi '25': " + doubleNumber.apply("25"));`,
    output: `Kết quả biến đổi '50': 100\nKết quả biến đổi '25': 50`
  },
  {
    id: 'custom_filter',
    title: 'Ứng dụng Predicate (Lọc Đơn Hàng)',
    type: 'Practice Application',
    description: 'Ví dụ thực tế áp dụng Predicate và Lambda expression để viết một hàm lọc đơn hàng (Order) cực kỳ linh hoạt và tái sử dụng cao, không cần lặp lại logic duyệt mảng.',
    interviewSignals: 'Làm sao thiết kế một hàm filter tổng quát nhận điều kiện động làm tham số đầu vào trong Java.',
    practiceProblems: 'Lọc danh sách sản phẩm theo giá/loại, lọc tài khoản người dùng theo quyền/trạng thái.',
    memoryTrick: '🧠 Thay vì viết 3 hàm cho 3 điều kiện khác nhau, ta chỉ viết 1 hàm filterOrders duy nhất nhận "luật chơi" (Predicate) từ bên ngoài truyền vào!',
    builtInMethods: [
      'filterOrders(list, condition) - Nhận vào List và Predicate<Order> để lọc động các đơn hàng thỏa mãn'
    ],
    code: `import java.util.*;
import java.util.function.Predicate;

class Order {
    private String beverageName;
    private String size;
    private int sugarLevel;
    private int price;
    private boolean isTakeaway;

    public Order(String name, String size, int sugar, int price, boolean takeaway) {
        this.beverageName = name;
        this.size = size;
        this.sugarLevel = sugar;
        this.price = price;
        this.isTakeaway = takeaway;
    }

    public String getBeverageName() { return beverageName; }
    public String getSize() { return size; }
    public int getSugarLevel() { return sugarLevel; }
    public boolean isTakeaway() { return isTakeaway; }
}

public class Main {
    public static List<Order> filterOrders(List<Order> list, Predicate<Order> condition) {
        List<Order> result = new ArrayList<>();
        for (Order order : list) {
            if (condition.test(order)) {
                result.add(order);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        List<Order> orders = new ArrayList<>();
        orders.add(new Order("Cà Phê Đen", "L", 0, 100, true));
        orders.add(new Order("Trà Sữa", "M", 50, 50, false));
        orders.add(new Order("Cà Phê Muối", "S", 30, 100, true));

        System.out.println("--- Đơn hàng mang đi ---");
        List<Order> takeawayOrders = filterOrders(orders, order -> order.isTakeaway());
        takeawayOrders.forEach(o -> System.out.println(o.getBeverageName()));

        System.out.println("\\n--- Đơn hàng Size L ---");
        List<Order> largeOrders = filterOrders(orders, order -> order.getSize().equals("L"));
        largeOrders.forEach(o -> System.out.println(o.getBeverageName()));

        System.out.println("\\n--- Đơn hàng nhiều đường ---");
        List<Order> sweetOrders = filterOrders(orders, order -> order.getSugarLevel() > 40);
        sweetOrders.forEach(o -> System.out.println(o.getBeverageName()));
    }
}`,
    output: `--- Đơn hàng mang đi ---\nCà Phê Đen\nCà Phê Muối\n\n--- Đơn hàng Size L ---\nCà Phê Đen\n\n--- Đơn hàng nhiều đường ---\nTrà Sữa`
  },
  {
    id: 'filter',
    title: 'filter()',
    type: 'Intermediate',
    description: 'Lọc các phần tử thỏa mãn một điều kiện Predicate. Tương tự mệnh đề WHERE trong SQL.',
    interviewSignals: 'Cách kết hợp nhiều điều kiện filter liên tiếp và thứ tự tối ưu bộ lọc để tăng hiệu năng.',
    practiceProblems: 'Lọc các số chẵn, lọc các User đang hoạt động, lọc các chuỗi không rỗng.',
    builtInMethods: [
      'filter(Predicate<T>) - Giữ lại các phần tử trả về true từ Predicate'
    ],
    memoryTrick: '🧠 filter() giống như rây lọc bột. Chỉ hạt nào đủ mịn (thỏa mãn true) mới lọt qua được.',
    code: `List<String> names = Arrays.asList("Java", "Spring", "React", "K8s");
names.stream()
     .filter(name -> name.startsWith("J") || name.startsWith("S"))
     .forEach(System.out::println);`,
    output: `Java\nSpring`
  },
  {
    id: 'map',
    title: 'map()',
    type: 'Intermediate',
    description: 'Biến đổi mỗi phần tử của Stream từ kiểu dữ liệu này sang kiểu dữ liệu khác thông qua một Function. Tương tự mệnh đề SELECT trong SQL.',
    interviewSignals: 'Khác biệt giữa map() và flatMap(). Cách chuyển đổi Entity sang DTO trong các tầng Service.',
    practiceProblems: 'Chuyển danh sách chữ thường thành chữ hoa, trích xuất danh sách ID từ danh sách Object.',
    builtInMethods: [
      'map(Function<T, R>) - Biến đổi đối tượng kiểu T sang R',
      'mapToInt(ToIntFunction) - Biến đổi sang IntStream để tránh tốn bộ nhớ autoboxing'
    ],
    memoryTrick: '🧠 map() giống như gương biến hình. Đưa củ khoai tây vào, nhận về khoai tây chiên lát. Số lượng phần tử trước và sau không đổi.',
    code: `List<String> words = Arrays.asList("apple", "banana", "kiwi");
words.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);`,
    output: `APPLE\nBANANA\nKIWI`
  },
  {
    id: 'flat_map',
    title: 'flatMap()',
    type: 'Intermediate',
    description: 'Trải phẳng (flatten) nhiều Stream con thành một Stream duy nhất. Dùng khi mỗi phần tử của Stream gốc chứa một danh sách hoặc Collection con bên trong.',
    interviewSignals: 'Khi nào dùng flatMap() thay vì map()? Hãy cho một ví dụ thực tế về danh sách Order chứa nhiều OrderItem.',
    practiceProblems: 'Gộp các danh sách số con thành một danh sách phẳng duy nhất, lấy tất cả kỹ năng từ danh sách nhân viên.',
    builtInMethods: [
      'flatMap(Function<T, Stream<R>>) - Chuyển đổi mỗi phần tử thành một Stream con rồi trải phẳng'
    ],
    memoryTrick: '🧠 flatMap() giống như mở các hộp quà con xếp chồng. Thay vì nhận được các hộp nhỏ chứa kẹo, nó bóc hết vỏ hộp xếp tất cả kẹo ra đĩa phẳng.',
    code: `List<List<String>> complexList = Arrays.asList(
    Arrays.asList("Java", "Kotlin"),
    Arrays.asList("Python", "Go")
);
complexList.stream()
           .flatMap(List::stream)
           .forEach(System.out::println);`,
    output: `Java\nKotlin\nPython\nGo`
  },
  {
    id: 'sorted',
    title: 'sorted()',
    type: 'Intermediate',
    description: 'Sắp xếp các phần tử trong Stream theo thứ tự tự nhiên (Natural Order) hoặc theo một Comparator tùy biến. Tương tự ORDER BY trong SQL.',
    interviewSignals: 'Cách sắp xếp các thuộc tính null-first hoặc null-last, sắp xếp đảo ngược (reverse) và hiệu suất sắp xếp trên Stream lớn.',
    practiceProblems: 'Sắp xếp danh sách đơn hàng giảm dần theo giá trị, sắp xếp học sinh theo điểm số.',
    builtInMethods: [
      'sorted() - Sắp xếp theo thứ tự mặc định của lớp triển khai Comparable',
      'sorted(Comparator<T>) - Sắp xếp theo luật Comparator tùy ý'
    ],
    memoryTrick: '🧠 sorted() giống như cảnh sát xếp hàng. Gọi mọi người đứng yên vào hàng ngũ có trật tự trước khi cho băng chuyền tiếp tục chạy.',
    code: `List<Integer> scores = Arrays.asList(5, 12, 8, 3);
scores.stream()
      .sorted((a, b) -> b - a) // Sắp xếp giảm dần
      .forEach(System.out::println);`,
    output: `12\n8\n5\n3`
  },
  {
    id: 'distinct',
    title: 'distinct()',
    type: 'Intermediate',
    description: 'Loại bỏ các phần tử trùng lặp khỏi Stream dựa trên hàm equals() và hashCode() của đối tượng. Tương tự mệnh đề DISTINCT trong SQL.',
    interviewSignals: 'Làm sao distinct() biết hai đối tượng trùng nhau? (Trả lời: Phải ghi đè hashCode() và equals()).',
    practiceProblems: 'Lấy danh sách các vai trò (roles) duy nhất từ danh sách tài khoản, lọc trùng số điện thoại.',
    builtInMethods: [
      'distinct() - Lọc sạch các phần tử trùng lặp và trả về luồng chỉ chứa các phần tử độc nhất'
    ],
    memoryTrick: '🧠 distinct() giống như bộ lọc cổng soát vé VIP. Một người chỉ được nhận 1 vé duy nhất, ai xuất hiện lần thứ 2 sẽ bị giữ lại tại cửa.',
    code: `List<String> tags = Arrays.asList("Java", "Java", "React", "Spring", "React");
tags.stream()
    .distinct()
    .forEach(System.out::println);`,
    output: `Java\nReact\nSpring`
  },
  {
    id: 'limit',
    title: 'limit(n)',
    type: 'Intermediate',
    description: 'Giới hạn Stream chỉ lấy tối đa n phần tử đầu tiên. Tương tự mệnh đề LIMIT trong SQL.',
    interviewSignals: 'Sử dụng limit() kết hợp với các stream vô hạn (infinite streams) như thế nào để không bị tràn bộ nhớ.',
    practiceProblems: 'Lấy Top 3 bài đăng mới nhất, lấy 5 giao dịch có giá trị lớn nhất.',
    builtInMethods: [
      'limit(long maxSize) - Cắt ngắn stream để lấy tối đa số phần tử chỉ định'
    ],
    memoryTrick: '🧠 limit(n) giống như chốt chặn đếm số lượng khách. Chốt mở cho n người đầu tiên đi qua, sau đó đóng sầm cửa lại bất kể phía sau còn bao nhiêu người.',
    code: `List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
numbers.stream()
       .limit(3)
       .forEach(System.out::println);`,
    output: `10\n20\n30`
  },
  {
    id: 'skip',
    title: 'skip(n)',
    type: 'Intermediate',
    description: 'Bỏ qua n phần tử đầu tiên của Stream và lấy các phần tử còn lại từ vị trí thứ n+1 trở đi. Tương tự OFFSET trong SQL.',
    interviewSignals: 'Cách kết hợp limit() và skip() để thực hiện chức năng phân trang (Pagination) dữ liệu.',
    practiceProblems: 'Bỏ qua phần tử đầu tiên trong file CSV (header), phân trang trang 2 với 10 phần tử mỗi trang.',
    builtInMethods: [
      'skip(long n) - Bỏ qua n phần tử đầu tiên trong stream'
    ],
    memoryTrick: '🧠 skip(n) giống như trò nhảy lò cò. Bạn nhảy cóc qua n ô đầu tiên và chỉ bắt đầu đi bộ từ ô thứ n+1 trở đi.',
    code: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
       .skip(3)
       .forEach(System.out::println);`,
    output: `4\n5`
  },
  {
    id: 'for_each',
    title: 'forEach()',
    type: 'Terminal',
    description: 'Duyệt qua từng phần tử của Stream và thực hiện một hành động Consumer trên mỗi phần tử đó. Kết thúc luồng.',
    interviewSignals: 'Sự khác biệt giữa forEach() trên Stream thường và Stream song song (parallel stream) về mặt thứ tự in ra.',
    practiceProblems: 'Ghi nhật ký hệ thống, gửi email thông báo cho hàng loạt người dùng.',
    builtInMethods: [
      'forEach(Consumer<T>) - Duyệt qua từng phần tử không đảm bảo thứ tự trong parallel stream',
      'forEachOrdered(Consumer<T>) - Duyệt qua từng phần tử và đảm bảo giữ nguyên thứ tự gốc'
    ],
    memoryTrick: '🧠 forEach() giống như người chuyển phát thư gõ cửa từng nhà. Phát thư xong là kết thúc ngày làm việc (Đóng Stream).',
    code: `List<String> list = Arrays.asList("A", "B", "C");
list.stream().forEach(item -> System.out.print(item + " "));`,
    output: `A B C`
  },
  {
    id: 'collect',
    title: 'collect()',
    type: 'Terminal',
    description: 'Thu gom toàn bộ kết quả của Stream và biến đổi nó thành một cấu trúc dữ liệu khác như List, Set, Map hoặc nối chuỗi.',
    interviewSignals: 'Cách phân biệt Collectors.toList() và Collectors.toUnmodifiableList(). Cách groupingBy và partitioningBy hoạt động.',
    practiceProblems: 'Nhóm danh sách học sinh theo lớp học, thu gom ID thành một Set để loại trùng.',
    builtInMethods: [
      'collect(Collectors.toList()) - Gom thành danh sách List',
      'collect(Collectors.toSet()) - Gom thành tập hợp Set không trùng lặp',
      'collect(Collectors.groupingBy(Function)) - Nhóm dữ liệu theo thuộc tính'
    ],
    memoryTrick: '🧠 collect() giống như rổ gom trái cây. Trái cây trên cây rớt xuống rổ sẽ được gom lại xếp ngay ngắn vào từng khay (List, Set, Map).',
    code: `List<String> list = Arrays.asList("Red", "Green", "Blue");
Set<String> set = list.stream()
                      .collect(Collectors.toSet());
System.out.println(set);`,
    output: `[Red, Green, Blue]`
  },
  {
    id: 'reduce',
    title: 'reduce()',
    type: 'Terminal',
    description: 'Gộp (tích tụ) tất cả phần tử của Stream thành một giá trị duy nhất thông qua một phép toán nhị phân (BinaryOperator). Thường dùng tính tổng, tích hoặc tìm max/min.',
    interviewSignals: 'Giá trị identity (giá trị khởi tạo) trong reduce() đóng vai trò gì? Khác biệt giữa các overload của reduce().',
    practiceProblems: 'Tính tổng giá trị của tất cả hóa đơn, tìm từ dài nhất trong một câu.',
    builtInMethods: [
      'reduce(identity, accumulator) - accumulator cộng dồn phần tử vào identity',
      'reduce(accumulator) - Trả về Optional chứa kết quả gộp (nếu stream trống trả Optional rỗng)'
    ],
    memoryTrick: '🧠 reduce() giống như lăn quả cầu tuyết. Bắt đầu từ nắm tuyết nhỏ (identity), lăn qua từng phần tử nó gom tuyết dày thêm để tạo thành một quả bóng khổng lồ.',
    code: `List<Integer> nums = Arrays.asList(1, 2, 3, 4);
int sum = nums.stream()
              .reduce(0, (a, b) -> a + b);
System.out.println("Tổng: " + sum);`,
    output: `Tổng: 10`
  },
  {
    id: 'count',
    title: 'count()',
    type: 'Terminal',
    description: 'Trả về tổng số lượng phần tử còn lại trong Stream sau khi thực hiện các bộ lọc. Trả về kiểu số nguyên long.',
    interviewSignals: 'count() có luôn duyệt qua toàn bộ Stream không? (Trả lời: Trong Java hiện đại, nếu stream biết trước kích thước cố định như Collection.stream(), compiler có thể tối ưu hóa không cần duyệt).',
    practiceProblems: 'Đếm xem có bao nhiêu tài khoản đang online, đếm số từ có độ dài > 5.',
    builtInMethods: [
      'count() - Trả về số lượng phần tử (long) có trong Stream'
    ],
    memoryTrick: '🧠 count() giống như người đứng gác cổng bấm nút cơ học để đếm lượt người đi qua. Đi qua hết thì báo con số cuối cùng.',
    code: `List<String> list = Arrays.asList("An", "Bình", "Cường", "Duy");
long count = list.stream()
                 .filter(name -> name.length() > 3)
                 .count();
System.out.println("Độ dài > 3: " + count);`,
    output: `Độ dài > 3: 2`
  },
  {
    id: 'any_match',
    title: 'anyMatch()',
    type: 'Terminal',
    description: 'Kiểm tra xem CÓ ÍT NHẤT một phần tử nào trong Stream thỏa mãn điều kiện Predicate hay không. Trả về true/false và dừng duyệt ngay lập tức (short-circuiting).',
    interviewSignals: 'Cơ chế short-circuiting (ngắt mạch sớm) hoạt động như thế nào trong anyMatch()?',
    practiceProblems: 'Kiểm tra xem giỏ hàng có sản phẩm nào hết hàng không, kiểm tra danh sách có ai là Admin không.',
    builtInMethods: [
      'anyMatch(Predicate<T>) - Trả về true nếu có ít nhất một phần tử thỏa mãn'
    ],
    memoryTrick: '🧠 anyMatch() giống như tìm chìa khóa mở được cửa. Bạn thử chìa đầu tiên mà mở được (true) thì cất chùm chìa khóa luôn, không cần thử các chìa còn lại.',
    code: `List<Integer> ages = Arrays.asList(15, 17, 19, 22);
boolean hasAdult = ages.stream()
                       .anyMatch(age -> age >= 18);
System.out.println("Có người lớn: " + hasAdult);`,
    output: `Có người lớn: true`
  },
  {
    id: 'all_match',
    title: 'allMatch()',
    type: 'Terminal',
    description: 'Kiểm tra xem TẤT CẢ phần tử trong Stream có đồng thời thỏa mãn điều kiện Predicate hay không. Trả về true/false và dừng duyệt ngay khi gặp phần tử đầu tiên không thỏa mãn (short-circuiting).',
    interviewSignals: 'Nếu Stream trống (empty), allMatch() trả về true hay false? (Trả lời: Trả về true - vacuous truth).',
    practiceProblems: 'Kiểm tra xem tất cả tài khoản trong lớp học đã đóng học phí chưa, kiểm tra tất cả các số trong mảng có phải số dương không.',
    builtInMethods: [
      'allMatch(Predicate<T>) - Trả về true nếu mọi phần tử thỏa mãn điều kiện'
    ],
    memoryTrick: '🧠 allMatch() giống như kiểm tra chất lượng sản phẩm. Chỉ cần phát hiện một món hàng lỗi (false), dây chuyền lập tức báo động đỏ dừng lại và kết luận lô hàng không đạt.',
    code: `List<Integer> nums = Arrays.asList(2, 4, 6, 8);
boolean allEven = nums.stream()
                      .allMatch(n -> n % 2 == 0);
System.out.println("Toàn bộ là số chẵn: " + allEven);`,
    output: `Toàn bộ là số chẵn: true`
  },
  {
    id: 'find_first',
    title: 'findFirst()',
    type: 'Terminal',
    description: 'Trả về phần tử đầu tiên xuất hiện trong Stream dưới dạng đối tượng Optional. Dừng xử lý các phần tử tiếp theo ngay lập tức.',
    interviewSignals: 'Phân biệt findFirst() và findAny(). Trong môi trường xử lý song song, tại sao findAny() lại tối ưu hơn findFirst()?',
    practiceProblems: 'Tìm người đầu tiên đạt điểm 10 trong danh sách học sinh, lấy bài viết đầu tiên làm tiêu điểm.',
    builtInMethods: [
      'findFirst() - Trả về Optional chứa phần tử đầu tiên trong stream',
      'findAny() - Trả về Optional chứa phần tử bất kỳ (tối ưu hơn trong parallel stream)'
    ],
    memoryTrick: '🧠 findFirst() giống như người đoạt giải nhất trong cuộc thi chạy. Ai chạm vạch đích đầu tiên sẽ được vinh danh, các vận động viên phía sau không cần chạy tiếp.',
    code: `List<String> titles = Arrays.asList("A", "B", "C");
Optional<String> first = titles.stream().findFirst();
first.ifPresent(System.out::println);`,
    output: `A`
  }
];
