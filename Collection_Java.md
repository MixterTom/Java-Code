6. Tổng quan về Các Bộ sưu tập trong Java
1. Giới thiệu về Bộ sưu tập (Collections)
Định nghĩa
Collections là framework cung cấp kiến trúc để lưu trữ và xử lý một nhóm đối tượng.
Đặc điểm
Cấu trúc dữ liệu động – có thể mở rộng hoặc thu hẹp.
Tối ưu hiệu suất – triển khai sẵn các cấu trúc phổ biến: List, Set, Map, Queue.
Tái sử dụng & tương thích – giao diện chuẩn, dễ trao đổi dữ liệu.
Hỗ trợ Generics – lưu trữ an toàn các đối tượng nhiều loại.
Hệ thống phân cấp chính
Iterable → Giao diện gốc (for-each loop).
Collection → Giao diện cơ sở.
List → Có thứ tự, cho phép trùng lặp.
Set → Không thứ tự, không trùng lặp.
Queue → Có thứ tự xử lý (thường FIFO).
Map → Cặp khóa–giá trị, khóa duy nhất (không kế thừa Collection).
2. Array và List
Array
Kích thước cố định, cùng kiểu dữ liệu.
Truy cập nhanh bằng chỉ số O(1).
Thêm/xóa khó (phải tạo mảng mới).
List (giao diện)
Có thứ tự, cho phép trùng lặp.
Truy cập bằng chỉ số nguyên.
Các triển khai: ArrayList, LinkedList, Vector.
ArrayList
Triển khai: mảng động.
Truy cập nhanh O(1), chèn/xóa giữa chậm O(n).
Dùng khi cần truy cập ngẫu nhiên thường xuyên.
LinkedList
Triển khai: danh sách liên kết đôi.
Chèn/xóa đầu/cuối nhanh O(1), truy cập ngẫu nhiên chậm O(n).
Phù hợp khi thêm/xóa thường xuyên, đặc biệt ở hai đầu; cũng triển khai Queue.
3. Set – Tập hợp không trùng lặp
Đặc điểm chung
Không cho phép phần tử trùng.
Thường không duy trì thứ tự.
Triển khai chính
HashSet: Bảng băm, thao tác add/remove/contains trung bình O(1), không đảm bảo thứ tự.
TreeSet: Cây đỏ–đen, lưu phần tử có thứ tự, thao tác O(log n).
4. Queue – Hàng đợi
Đặc điểm
Giữ phần tử trước khi xử lý.
Thường FIFO.
Phương thức quan trọng: add(), offer(), remove(), poll(), element(), peek().
Triển khai chính
LinkedList: FIFO, thêm cuối/xóa đầu nhanh.
PriorityQueue: Min-heap, phần tử ưu tiên cao hơn được xử lý trước.
5. Map – Cặp khóa–giá trị
Đặc điểm
Khóa duy nhất, giá trị có thể trùng.
Không kế thừa từ Collection.
Triển khai chính
HashMap: Bảng băm, put/get/remove trung bình O(1), không đảm bảo thứ tự, cho phép 1 khóa null.
TreeMap: Cây đỏ–đen, khóa có thứ tự, thao tác O(log n), không cho phép khóa null.
6. Ứng dụng thực tế
Loại
Ví dụ sử dụng
ArrayList
Danh sách sản phẩm (thứ tự quan trọng, truy cập nhanh).
LinkedList
Danh sách phát nhạc (thêm/xóa dễ).
HashSet
Danh sách email duy nhất.
TreeSet
Bảng xếp hạng điểm số.
LinkedList-Queue
Hàng đợi in ấn.
PriorityQueue
Lập lịch tác vụ theo ưu tiên.
HashMap
Lưu hồ sơ người dùng theo ID.
TreeMap
Từ điển sắp xếp theo chữ cái.
7. Tóm tắt nhanh
Interface
Đặc điểm chính
Triển khai tiêu biểu
List
Có thứ tự, cho phép trùng
ArrayList, LinkedList
Set
Không trùng
HashSet, TreeSet
Queue
FIFO/Ưu tiên
LinkedList, PriorityQueue
Map
Khóa–giá trị
HashMap, TreeMap



# Câu hỏi ôn tập

# Câu hỏi kiểm tra ngắn gọn

**Hướng dẫn:** Trả lời mỗi câu hỏi bằng 2-3 câu.

1. Mô tả sự khác biệt chính giữa ArrayList và LinkedList về hiệu suất cho các thao tác chèn/xóa ở giữa danh sách.
2. Tại sao HashSet được ưa chuộng hơn TreeSet khi bạn cần hiệu suất nhanh nhất cho các thao tác cơ bản và thứ tự không quan trọng?
3. Giải thích mục đích chính của giao diện Queue trong Khung Bộ sưu tập Java và cung cấp một ví dụ về trường hợp sử dụng.
4. Giao diện Map khác với giao diện Collection như thế nào về cách lưu trữ dữ liệu?
5. Giải thích khi nào nên sử dụng HashMap thay vì TreeMap và những ưu điểm mà HashMap mang lại trong trường hợp đó.
6. Nếu bạn cần lưu trữ một tập hợp các số nguyên duy nhất và muốn chúng được tự động sắp xếp, bạn sẽ sử dụng triển khai Set nào và tại sao?
7. Mô tả cách PriorityQueue xác định phần tử nào là "đầu" của hàng đợi và tại sao nó không phải là hàng đợi FIFO nghiêm ngặt.
8. Trình bày hai đặc điểm chính của Arrays khiến chúng khác biệt đáng kể so với ArrayList trong Java.
9. Giao diện Collection trong Khung Bộ sưu tập Java đóng vai trò gì? Liệt kê hai giao diện con trực tiếp của nó được đề cập trong tài liệu.
10. Tại sao các bộ sưu tập được coi là "cấu trúc dữ liệu động"?

# Hướng dẫn trả lời

1. ArrayList chậm hơn cho các thao tác chèn/xóa ở giữa (O(n)) vì nó yêu cầu dịch chuyển các phần tử sau điểm chèn/xóa. Ngược lại, LinkedList hiệu quả hơn cho các thao tác này (O(1)) vì nó chỉ cần cập nhật các con trỏ của các nút liền kề.
2. HashSet sử dụng bảng băm, cho phép hiệu suất trung bình O(1) cho các thao tác thêm, xóa và kiểm tra sự tồn tại. TreeSet sử dụng cây tìm kiếm nhị phân cân bằng, dẫn đến hiệu suất O(log n) chậm hơn cho các thao tác tương tự.
3. Mục đích chính của giao diện Queue là giữ các phần tử trước khi xử lý, thường tuân theo thứ tự FIFO (First-In, First-Out). Một ví dụ là một hệ thống hàng đợi in, nơi các tài liệu được xử lý theo thứ tự chúng được gửi.
4. Giao diện Map lưu trữ dữ liệu dưới dạng các cặp khóa-giá trị, trong đó mỗi khóa là duy nhất và ánh xạ tới một giá trị. Ngược lại, giao diện Collection là giao diện cơ sở cho các nhóm đối tượng đơn lẻ và không liên quan trực tiếp đến các cặp khóa-giá trị.
5. Nên sử dụng HashMap thay vì TreeMap khi việc tra cứu nhanh bằng khóa là ưu tiên hàng đầu và thứ tự của các cặp khóa-giá trị không quan trọng. HashMap cung cấp hiệu suất trung bình O(1) cho các thao tác put, get và remove do sử dụng bảng băm.
6. Nếu cần lưu trữ một tập hợp các số nguyên duy nhất và muốn chúng được tự động sắp xếp, bạn sẽ sử dụng TreeSet. TreeSet duy trì các phần tử theo thứ tự tự nhiên được sắp xếp của chúng (hoặc theo một Comparator tùy chỉnh) và không cho phép trùng lặp.
7. PriorityQueue xác định "đầu" của hàng đợi là phần tử có độ ưu tiên cao nhất, thường là phần tử nhỏ nhất theo thứ tự tự nhiên hoặc theo Comparator. Nó không phải là FIFO nghiêm ngặt vì thứ tự các phần tử được truy xuất dựa trên độ ưu tiên của chúng, không phải thứ tự chúng được chèn vào.
8. Hai đặc điểm chính của Arrays khiến chúng khác biệt đáng kể so với ArrayList là kích thước cố định và khả năng lưu trữ các phần tử cùng kiểu dữ liệu nguyên thủy. ArrayList là cấu trúc dữ liệu động có thể thay đổi kích thước và lưu trữ các đối tượng.
9. Giao diện Collection là giao diện cơ sở cho các nhóm đối tượng trong Khung Bộ sưu tập Java, cung cấp chức năng chung cho tất cả các loại bộ sưu tập. Hai giao diện con trực tiếp của nó được đề cập là List và Set.
10. Các bộ sưu tập được coi là "cấu trúc dữ liệu động" vì chúng có thể tự động thay đổi kích thước, tăng hoặc giảm dung lượng lưu trữ khi cần thiết. Điều này trái ngược với các mảng truyền thống có kích thước cố định sau khi được tạo.

# Các câu hỏi định dạng bài luận

1. So sánh và đối chiếu các trường hợp sử dụng, ưu điểm và nhược điểm của ArrayList và LinkedList. Bao gồm phân tích phức tạp thời gian cho các thao tác phổ biến như thêm, xóa và truy cập.
2. Thảo luận về vai trò của giao diện Set trong Khung Bộ sưu tập Java. Giải thích cách HashSet và TreeSet triển khai giao diện này khác nhau, bao gồm cả các cấu trúc dữ liệu cơ bản của chúng và các cân nhắc về hiệu suất. Cung cấp các ví dụ thực tế về khi nào nên chọn một loại thay vì loại kia.
3. Giải thích chi tiết giao diện Map và các đặc điểm của nó. So sánh HashMap và TreeMap, làm nổi bật sự khác biệt về thứ tự, khả năng chấp nhận khóa null và hiệu suất. Cung cấp một kịch bản phức tạp mà TreeMap sẽ phù hợp hơn HashMap.
4. Phân tích tầm quan trọng của giao diện Queue trong các ứng dụng thực tế. So sánh cách LinkedList và PriorityQueue có thể được sử dụng để triển khai Queue, chỉ ra các đặc điểm hoạt động khác nhau của chúng và các trường hợp sử dụng phù hợp.
5. Trình bày các nguyên tắc cơ bản đằng sau Khung Bộ sưu tập Java, giải thích tại sao nó được phát triển và những lợi ích chính mà nó mang lại cho các nhà phát triển. Chọn một giao diện bộ sưu tập chính (List, Set, Queue, hoặc Map) và thảo luận về cách nó giải quyết một vấn đề lập trình cụ thể, cung cấp một ví dụ minh họa.

# Thuật ngữ chính với định nghĩa

- **Collections (Bộ sưu tập):** Một framework trong Java cung cấp một kiến trúc để lưu trữ và thao tác một nhóm các đối tượng.
- **Dynamic Data Structures (Cấu trúc dữ liệu động):** Cấu trúc dữ liệu có thể tăng hoặc giảm kích thước khi cần thiết trong thời gian chạy.
- **Generics (Generics):** Một tính năng trong Java cho phép các lớp, giao diện và phương thức hoạt động với các kiểu khác nhau mà không cần viết lại mã.
- **Iterable:** Giao diện gốc trong hệ thống phân cấp Khung Bộ sưu tập Java, cho phép các đối tượng được lặp lại (ví dụ: trong vòng lặp for-each).
- **Collection (Giao diện Collection):** Giao diện cơ sở trong Khung Bộ sưu tập Java cho các nhóm đối tượng.
- **List (Giao diện List):** Một giao diện con của Collection đại diện cho một tập hợp có thứ tự, cho phép trùng lặp và truy cập theo chỉ mục.
- **Set (Giao diện Set):** Một giao diện con của Collection đại diện cho một tập hợp không có thứ tự mà không cho phép các phần tử trùng lặp.
- **Queue (Giao diện Queue):** Một giao diện con của Collection được thiết kế để giữ các phần tử trước khi xử lý, thường tuân theo nguyên tắc FIFO.
- **Map (Giao diện Map):** Một giao diện trong Java lưu trữ dữ liệu dưới dạng các cặp khóa-giá trị, trong đó khóa phải là duy nhất. Không kế thừa từ Collection.
- **Array (Mảng):** Một cấu trúc dữ liệu có kích thước cố định lưu trữ các phần tử cùng kiểu dữ liệu, được truy cập bằng chỉ mục.
- **ArrayList:** Một triển khai của giao diện List sử dụng một mảng có thể thay đổi kích thước. Tốt cho truy cập ngẫu nhiên.
- **LinkedList:** Một triển khai của giao diện List và Queue sử dụng một danh sách liên kết đôi. Tốt cho các thao tác chèn/xóa ở các đầu.
- **HashSet:** Một triển khai của giao diện Set sử dụng bảng băm để lưu trữ. Cung cấp hiệu suất O(1) trung bình cho các thao tác cơ bản và không duy trì thứ tự.
- **TreeSet:** Một triển khai của giao diện Set sử dụng cây tìm kiếm nhị phân cân bằng (cây Đỏ-Đen). Lưu trữ các phần tử theo thứ tự được sắp xếp và có hiệu suất O(log n).
- **PriorityQueue:** Một triển khai của giao diện Queue sử dụng cấu trúc dữ liệu min-heap. Các phần tử được sắp xếp dựa trên độ ưu tiên của chúng, không phải thứ tự chèn.
- **HashMap:** Một triển khai của giao diện Map sử dụng bảng băm. Cung cấp hiệu suất O(1) trung bình cho các thao tác cơ bản và không duy trì thứ tự.
- **TreeMap:** Một triển khai của giao diện Map sử dụng cây tìm kiếm nhị phân cân bằng (cây Đỏ-Đen). Lưu trữ các cặp khóa-giá trị theo thứ tự sắp xếp của khóa và có hiệu suất O(log n).
- **FIFO (First-In, First-Out):** Một nguyên tắc xử lý trong đó phần tử được thêm vào đầu tiên cũng là phần tử được xử lý hoặc lấy ra đầu tiên.
- **LIFO (Last-In, First-Out):** Một nguyên tắc xử lý trong đó phần tử được thêm vào cuối cùng cũng là phần tử được xử lý hoặc lấy ra đầu tiên (ví dụ: Stack).
- **Hash Table (Bảng băm):** Một cấu trúc dữ liệu sử dụng hàm băm để tính toán chỉ mục thành một mảng vị trí hoặc "bucket" từ đó giá trị mong muốn có thể được tìm thấy.
- **Binary Search Tree (Cây tìm kiếm nhị phân):** Một cấu trúc dữ liệu cây trong đó mỗi nút có nhiều nhất hai nút con, và tất cả các nút con ở bên trái nhỏ hơn nút cha, trong khi tất cả các nút con ở bên phải lớn hơn.
- **Red-Black Tree (Cây Đỏ-Đen):** Một loại cây tìm kiếm nhị phân tự cân bằng, được sử dụng trong TreeSet và TreeMap để đảm bảo hiệu suất O(log n) ngay cả trong trường hợp xấu nhất.
- **Comparator (Bộ so sánh):** Một giao diện trong Java được sử dụng để định nghĩa thứ tự sắp xếp tùy chỉnh cho các đối tượng.
- **hashCode() và equals():** Các phương thức được sử dụng bởi các cấu trúc dữ liệu dựa trên băm (như HashSet, HashMap) để xác định tính duy nhất và so sánh các đối tượng.


# Câu hỏi thường gặp

Dưới đây là 8 câu hỏi thường gặp (FAQ) với các câu trả lời chi tiết, tóm tắt các chủ đề và ý tưởng chính từ các nguồn được cung cấp:

### 1. Collections trong Java là gì và tại sao chúng ta nên sử dụng chúng?

Collections trong Java là một framework cung cấp kiến trúc để lưu trữ và thao tác với một nhóm các đối tượng. Chúng là các cấu trúc dữ liệu động có thể tự động co giãn khi cần thiết. Chúng ta nên sử dụng Collections vì nhiều lý do:

- **Hiệu quả:** Cung cấp các triển khai được tối ưu hóa cho các cấu trúc dữ liệu phổ biến như danh sách, tập hợp, bản đồ và hàng đợi.
- **Khả năng tái sử dụng:** Có các giao diện và triển khai tiêu chuẩn hóa, giúp dễ dàng sử dụng lại.
- **Linh hoạt:** Có thể lưu trữ các đối tượng thuộc nhiều loại khác nhau (với generics), mang lại sự linh hoạt cao.
- **Khả năng tương tác:** Dễ dàng trao đổi dữ liệu giữa các phần khác nhau của hệ thống.

### 2. Các giao diện chính trong Java Collections Framework là gì và mục đích của chúng?

Java Collections Framework có một hệ thống phân cấp các giao diện chính, mỗi giao diện phục vụ một mục đích cụ thể:

- **Iterable**: Giao diện gốc, cho phép lặp lại qua các phần tử.
- **Collection**: Giao diện cơ sở cho các nhóm đối tượng.
- **List**: Một tập hợp có thứ tự, cho phép các phần tử trùng lặp và truy cập theo chỉ mục. Ví dụ: ArrayList, LinkedList.
- **Set**: Một tập hợp không có thứ tự, không cho phép các phần tử trùng lặp. Ví dụ: HashSet, TreeSet.
- **Queue**: Một tập hợp có thứ tự được thiết kế để chứa các phần tử trước khi xử lý, thường tuân theo nguyên tắc FIFO (First-In, First-Out). Ví dụ: LinkedList, PriorityQueue.
- **Map**: Lưu trữ dữ liệu dưới dạng các cặp khóa-giá trị, trong đó các khóa là duy nhất. Không kế thừa trực tiếp từ giao diện Collection. Ví dụ: HashMap, TreeMap.

### 3. Sự khác biệt chính giữa ArrayList và LinkedList là gì, và khi nào nên sử dụng từng loại?

ArrayList và LinkedList đều là các triển khai của giao diện List, nhưng có đặc điểm hoạt động khác nhau:

- **ArrayList**:
    - **Triển khai:** Sử dụng một mảng có thể thay đổi kích thước.
    - **Đặc điểm:** Tốt cho việc truy cập ngẫu nhiên (lấy phần tử theo chỉ mục) với độ phức tạp O(1). Tuy nhiên, việc chèn/xóa phần tử ở giữa chậm hơn (O(n)) vì yêu cầu dịch chuyển các phần tử.
    - **Trường hợp sử dụng:** Khi cần truy cập ngẫu nhiên thường xuyên và việc chèn/xóa ít phổ biến.
- **LinkedList**:
    - **Triển khai:** Sử dụng một danh sách liên kết đôi.
    - **Đặc điểm:** Tốt cho việc chèn/xóa ở đầu hoặc cuối (O(1)). Tuy nhiên, việc truy cập ngẫu nhiên chậm hơn (O(n)) vì yêu cầu duyệt từ đầu hoặc cuối.
    - **Trường hợp sử dụng:** Khi cần thêm/xóa thường xuyên, đặc biệt là ở hai đầu danh sách. LinkedList cũng triển khai giao diện Queue.

### 4. Khi nào nên dùng HashSet thay vì TreeSet?

Cả HashSet và TreeSet đều là các triển khai của giao diện Set, đảm bảo tính duy nhất của các phần tử, nhưng chúng khác nhau về cách lưu trữ và sắp xếp:

- **HashSet**:
    - **Triển khai:** Sử dụng bảng băm (hash table).
    - **Đặc điểm:** Không đảm bảo thứ tự của các phần tử. Có hiệu suất nhanh (trung bình O(1)) cho việc thêm, xóa và kiểm tra sự tồn tại (contains). Dựa vào các phương thức hashCode() và equals().
    - **Trường hợp sử dụng:** Khi tính duy nhất là mối quan tâm chính và thứ tự không quan trọng.
- **TreeSet**:
    - **Triển khai:** Sử dụng cây tìm kiếm nhị phân cân bằng (cây Đỏ-Đen).
    - **Đặc điểm:** Lưu trữ các phần tử theo thứ tự tự nhiên của chúng hoặc theo một Comparator tùy chỉnh. Hiệu suất chậm hơn HashSet (O(log n)) cho các thao tác cơ bản.
    - **Trường hợp sử dụng:** Khi cần tính duy nhất và các phần tử cần được lưu trữ/truy xuất theo thứ tự đã sắp xếp.

### 5. Khái niệm hàng đợi (Queue) trong Java là gì và PriorityQueue khác với LinkedList (khi dùng làm Queue) như thế nào?

Giao diện Queue trong Java được thiết kế để chứa các phần tử trước khi xử lý, thường tuân theo nguyên tắc FIFO (First-In, First-Out). Các phương thức chính bao gồm add(), offer(), remove(), poll(), element(), và peek().

- **LinkedList (khi dùng làm Queue)**:
    - LinkedList triển khai giao diện Queue và có thể được sử dụng như một hàng đợi FIFO.
    - Hiệu quả cho việc thêm vào cuối và xóa từ đầu.
    - Các phần tử được xử lý theo thứ tự mà chúng được thêm vào (First-In, First-Out).
- **PriorityQueue**:
    - **Triển khai:** Sử dụng cấu trúc dữ liệu min-heap.
    - **Đặc điểm:** Các phần tử được sắp xếp dựa trên thứ tự tự nhiên của chúng hoặc một Comparator tùy chỉnh. Phần tử đứng đầu hàng đợi là phần tử nhỏ nhất theo thứ tự sắp xếp.
    - **Không nghiêm ngặt FIFO:** Các phần tử có độ ưu tiên cao hơn (giá trị nhỏ hơn theo mặc định) sẽ được lấy ra trước, bất kể thời điểm chúng được thêm vào.
    - **Trường hợp sử dụng:** Khi các phần tử cần được xử lý dựa trên độ ưu tiên, không chỉ dựa vào thứ tự đến.

### 6. Sự khác biệt giữa HashMap và TreeMap là gì?

Cả HashMap và TreeMap đều là các triển khai của giao diện Map, lưu trữ dữ liệu dưới dạng các cặp khóa-giá trị, trong đó các khóa là duy nhất:

- **HashMap**:
    - **Triển khai:** Sử dụng bảng băm (hash table).
    - **Đặc điểm:** Không đảm bảo thứ tự của các cặp khóa-giá trị. Hiệu suất nhanh (trung bình O(1)) cho các thao tác put, get, remove. Cho phép một khóa null và nhiều giá trị null.
    - **Trường hợp sử dụng:** Khi cần tra cứu nhanh chóng theo khóa và thứ tự không quan trọng.
- **TreeMap**:
    - **Triển khai:** Sử dụng cây tìm kiếm nhị phân cân bằng (cây Đỏ-Đen).
    - **Đặc điểm:** Lưu trữ các cặp khóa-giá trị theo thứ tự đã sắp xếp tự nhiên của khóa hoặc theo một Comparator tùy chỉnh. Hiệu suất chậm hơn HashMap (O(log n)) cho các thao tác cơ bản. Không cho phép khóa null.
    - **Trường hợp sử dụng:** Khi các cặp khóa-giá trị cần được lưu trữ và truy xuất theo thứ tự đã sắp xếp của khóa.

### 7. Bạn sẽ sử dụng loại Collections nào cho các kịch bản thực tế sau:

- lưu trữ danh sách các email duy nhất, quản lý các tác vụ trong hàng đợi ưu tiên, và lưu trữ hồ sơ người dùng để tra cứu nhanh?

Dựa trên các đặc điểm của từng loại Collection, các lựa chọn phù hợp nhất sẽ là:

- **Lưu trữ danh sách các email duy nhất:** Nên sử dụng **HashSet**. HashSet đảm bảo không có các phần tử trùng lặp và cung cấp hiệu suất nhanh chóng cho việc thêm và kiểm tra sự tồn tại, điều này lý tưởng cho việc quản lý các email duy nhất cho một danh sách đăng ký nhận tin.
- **Quản lý các tác vụ trong hàng đợi ưu tiên:** Nên sử dụng **PriorityQueue**. PriorityQueue cho phép các tác vụ được xử lý dựa trên độ ưu tiên của chúng (ví dụ: tác vụ có độ ưu tiên cao hơn được thực hiện trước), thay vì chỉ dựa vào thứ tự chúng được thêm vào.
- **Lưu trữ hồ sơ người dùng để tra cứu nhanh (ID người dùng làm khóa, đối tượng hồ sơ làm giá trị):** Nên sử dụng **HashMap**. HashMap cung cấp khả năng tra cứu nhanh chóng (trung bình O(1)) bằng khóa, rất hiệu quả khi cần truy xuất thông tin hồ sơ người dùng dựa trên ID của họ.

### 8. Tóm tắt những lợi ích chính của việc sử dụng Java Collections Framework và các loại phổ biến nhất của nó.

Java Collections Framework là một công cụ mạnh mẽ để quản lý các nhóm dữ liệu một cách hiệu quả.

- **Lợi ích chính:**Cho phép lưu trữ và thao tác dữ liệu một cách linh hoạt, hiệu quả và có khả năng tái sử dụng.
- Giúp dễ dàng trao đổi dữ liệu giữa các phần khác nhau của hệ thống.
- **Các giao diện chính:** List, Set, Queue, và Map.
- **Các loại phổ biến và ứng dụng của chúng:ArrayList**: Truy cập nhanh các phần tử theo chỉ mục.
- **LinkedList**: Chèn/xóa nhanh các phần tử, đặc biệt ở hai đầu.
- **HashSet**: Đảm bảo tính duy nhất của các phần tử, không duy trì thứ tự.
- **TreeSet**: Đảm bảo tính duy nhất và lưu trữ các phần tử theo thứ tự đã sắp xếp.
- **PriorityQueue**: Xử lý các phần tử dựa trên độ ưu tiên.
- **HashMap**: Lưu trữ các cặp khóa-giá trị để tra cứu nhanh chóng.
- **TreeMap**: Lưu trữ các cặp khóa-giá trị theo thứ tự đã sắp xếp của khóa. Các Collections này cung cấp giải pháp cho nhiều trường hợp sử dụng trong thế giới thực, từ danh sách và hàng đợi đến các tập hợp duy nhất và lưu trữ khóa-giá trị có hoặc không có thứ tự.