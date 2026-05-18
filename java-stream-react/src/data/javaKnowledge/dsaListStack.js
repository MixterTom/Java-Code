export const dsaListStack = [
  {
    id: 'collections_overview',
    title: '1. Giới thiệu về Bộ sưu tập (Collections)',
    type: 'Cấu trúc & Phân cấp',
    description: 'Tổng quan hệ thống phân cấp và định nghĩa cốt lõi của Java Collections Framework.',
    bulletSections: [
      {
        title: "Định nghĩa",
        items: [
          "Collections là **framework** cung cấp kiến trúc để **lưu trữ** và **xử lý** một nhóm đối tượng."
        ]
      },
      {
        title: "Đặc điểm",
        items: [
          "**Cấu trúc dữ liệu động** – có thể mở rộng hoặc thu hẹp.",
          "**Tối ưu hiệu suất** – triển khai sẵn các cấu trúc phổ biến: `List`, `Set`, `Map`, `Queue`.",
          "**Tái sử dụng & tương thích** – giao diện chuẩn, dễ trao đổi dữ liệu.",
          "**Hỗ trợ Generics** – lưu trữ an toàn các đối tượng nhiều loại."
        ]
      },
      {
        title: "Hệ thống phân cấp chính",
        items: [
          "**Iterable** → Giao diện gốc (`for-each` loop).",
          "**Collection** → Giao diện cơ sở.",
          "  - **List** → Có thứ tự, cho phép trùng lặp.",
          "  - **Set** → Không thứ tự, không trùng lặp.",
          "  - **Queue** → Có thứ tự xử lý (thường `FIFO`).",
          "**Map** → Cặp khóa–giá trị, khóa duy nhất (không kế thừa `Collection`)."
        ]
      }
    ],
    code: `import java.util.Collection;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Collection<String> items = new ArrayList<>();
        items.add("Java");
        items.add("DSA");
        
        System.out.println("Kích thước bộ sưu tập: " + items.size());
        System.out.println("Chứa 'Java' không? " + items.contains("Java"));
    }
}`,
    output: `Kích thước bộ sưu tập: 2\nChứa 'Java' không? true`
  },
  {
    id: 'list_arraylist_linkedlist',
    title: '2. Array và List',
    type: 'Danh sách có thứ tự',
    description: 'So sánh chi tiết giữa Mảng tĩnh (Array) và Danh sách (List), ArrayList vs LinkedList.',
    bulletSections: [
      {
        title: "Array (Mảng)",
        items: [
          "Kích thước cố định, cùng kiểu dữ liệu.",
          "Truy cập nhanh bằng chỉ số `O(1)`.",
          "Thêm/xóa khó (phải tạo mảng mới)."
        ]
      },
      {
        title: "List (giao diện)",
        items: [
          "Có thứ tự, cho phép trùng lặp.",
          "Truy cập bằng chỉ số nguyên.",
          "Các triển khai: `ArrayList`, `LinkedList`, `Vector`."
        ]
      },
      {
        title: "ArrayList",
        items: [
          "Triển khai: mảng động.",
          "Truy cập nhanh `O(1)`, chèn/xóa giữa chậm `O(n)`.",
          "Dùng khi cần truy cập ngẫu nhiên thường xuyên."
        ]
      },
      {
        title: "LinkedList",
        items: [
          "Triển khai: danh sách liên kết đôi.",
          "Chèn/xóa đầu/cuối nhanh `O(1)`, truy cập ngẫu nhiên chậm `O(n)`.",
          "Phù hợp khi thêm/xóa thường xuyên, đặc biệt ở hai đầu; cũng triển khai `Queue`."
        ]
      }
    ],
    comparisonPair: {
      title: "⚔️ ĐỐI ĐẦU TRỰC DIỆN: ArrayList vs LinkedList",
      items: [
        { 
          name: "ArrayList (Mảng động)", 
          detail: "✔ Cơ chế: Lưu các phần tử liền kề nhau trong mảng bộ nhớ RAM.\n✔ Tốc độ: Lấy phần tử get(index) đạt O(1) cực nhanh. Nhưng chèn/xóa ở giữa chậm O(N) do phải dịch chuyển các phần tử.\n✔ Null/Trùng: Cho phép giá trị null và cho phép trùng lặp dữ liệu.", 
          color: "#FFEBF0" 
        },
        { 
          name: "LinkedList (Danh sách liên kết đôi)", 
          detail: "✔ Cơ chế: Lưu các nút phân tán, liên kết với nhau qua địa chỉ (nút trước trỏ nút sau).\n✔ Tốc độ: Chèn/xóa ở đầu/cuối hoặc tại nút hiện tại cực nhanh O(1). Nhưng get(index) chậm O(N) vì phải duyệt tuần tự.\n✔ Null/Trùng: Cho phép giá trị null và cho phép trùng lặp dữ liệu.", 
          color: "#EBF8EA" 
        }
      ],
      verdict: "💡 PHÁN QUYẾT: Ưu tiên dùng ArrayList cho 90% trường hợp đọc ghi thông thường. Chỉ dùng LinkedList khi bạn cần liên tục thêm/xóa phần tử ở hai đầu mảng (ví dụ làm lịch sử undo/redo, hàng đợi tạm thời)."
    },
    code: `import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        
        List<String> linkedList = new LinkedList<>();
        linkedList.add("Cat");
        linkedList.add("Dog");
        
        System.out.println("ArrayList: " + arrayList.get(0));
        System.out.println("LinkedList: " + linkedList.get(0));
    }
}`,
    output: `ArrayList: Apple\nLinkedList: Cat`
  },
  {
    id: 'set_hashset_treeset',
    title: '3. Set – Tập hợp không trùng lặp',
    type: 'Tập hợp độc nhất',
    description: 'Phân tích các đặc trưng của Set interface, HashSet (bảng băm) và TreeSet (cây đỏ-đen).',
    bulletSections: [
      {
        title: "Đặc điểm chung",
        items: [
          "Không cho phép phần tử trùng.",
          "Thường không duy trì thứ tự."
        ]
      },
      {
        title: "Triển khai chính",
        items: [
          "**HashSet**: Bảng băm, thao tác `add`/`remove`/`contains` trung bình `O(1)`, không đảm bảo thứ tự.",
          "**TreeSet**: Cây đỏ–đen, lưu phần tử có thứ tự, thao tác `O(log n)`."
        ]
      }
    ],
    comparisonPair: {
      title: "⚔️ ĐỐI ĐẦU TRỰC DIỆN: HashSet vs TreeSet",
      items: [
        { 
          name: "HashSet (Dựa trên bảng băm)", 
          detail: "✔ Cơ chế: Sử dụng cơ chế Bảng băm (Hash Table) để quản lý phần tử.\n✔ Thứ tự: Hoàn toàn không duy trì thứ tự chèn hay sắp xếp nào.\n✔ Tốc độ: add, remove, contains siêu tốc đạt O(1) trung bình.\n✔ Null: Cho phép chứa tối đa 1 phần tử null.", 
          color: "#FFF9E6" 
        },
        { 
          name: "TreeSet (Dựa trên cây Đỏ-Đen)", 
          detail: "✔ Cơ chế: Sử dụng cây tìm kiếm nhị phân cân bằng (Red-Black Tree) tự điều chỉnh.\n✔ Thứ tự: Luôn tự động sắp xếp các phần tử tăng dần (hoặc theo bộ so sánh Comparator).\n✔ Tốc độ: Các thao tác tốn chi phí O(log N) do liên tục phải cân bằng cây.\n✔ Null: Hoàn toàn cấm chứa null (gây NullPointerException).", 
          color: "#E8F4FC" 
        }
      ],
      verdict: "💡 PHÁN QUYẾT: Dùng HashSet khi cần lọc trùng dữ liệu với hiệu năng cao nhất. Chỉ dùng TreeSet khi vừa muốn lọc trùng, vừa muốn phần tử tự động sắp xếp (ví dụ bảng xếp hạng điểm số liên tục)."
    },
    code: `import java.util.HashSet;
import java.util.TreeSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Set<Integer> hashSet = new HashSet<>();
        hashSet.add(5);
        hashSet.add(2);
        hashSet.add(5); // Trùng lặp
        
        Set<Integer> treeSet = new TreeSet<>();
        treeSet.add(5);
        treeSet.add(2);
        
        System.out.println("HashSet (không thứ tự, lọc trùng): " + hashSet);
        System.out.println("TreeSet (sắp xếp tăng dần): " + treeSet);
    }
}`,
    output: `HashSet (không thứ tự, lọc trùng): [2, 5]\nTreeSet (sắp xếp tăng dần): [2, 5]`
  },
  {
    id: 'queue_priorityqueue',
    title: '4. Queue – Hàng đợi',
    type: 'Hàng đợi & Heap',
    description: 'Triển khai cấu trúc dữ liệu hàng đợi Queue, LinkedList và PriorityQueue.',
    bulletSections: [
      {
        title: "Đặc điểm",
        items: [
          "Giữ phần tử trước khi xử lý.",
          "Thường `FIFO` (First-In First-Out)."
        ]
      },
      {
        title: "Phương thức quan trọng",
        items: [
          "`add()`, `offer()`, `remove()`, `poll()`, `element()`, `peek()`"
        ]
      },
      {
        title: "Triển khai chính",
        items: [
          "**LinkedList**: `FIFO`, thêm cuối/xóa đầu nhanh.",
          "**PriorityQueue**: Min-heap, phần tử ưu tiên cao hơn được xử lý trước."
        ]
      }
    ],
    comparisonPair: {
      title: "⚔️ ĐỐI ĐẦU TRỰC DIỆN: LinkedList-Queue vs PriorityQueue",
      items: [
        { 
          name: "LinkedList-Queue (Hàng đợi tuần tự)", 
          detail: "✔ Cơ chế: Hàng đợi First-In First-Out (FIFO) chuẩn.\n✔ Hoạt động: Ai vào trước xử lý trước, ai vào sau xử lý sau. Thao tác offer/poll đạt O(1).\n✔ Null: Cho phép chứa phần tử null.", 
          color: "#E8F4FC" 
        },
        { 
          name: "PriorityQueue (Hàng đợi ưu tiên)", 
          detail: "✔ Cơ chế: Sử dụng cấu trúc dữ liệu Heap (mặc định là Min-Heap).\n✔ Hoạt động: Không tuân thủ FIFO. Khi poll(), phần tử có độ ưu tiên cao nhất (nhỏ nhất mặc định) sẽ ra trước bất kể vào lúc nào. offer/poll tốn O(log N).\n✔ Null: Nghiêm cấm chứa null.", 
          color: "#FFF9E6" 
        }
      ],
      verdict: "💡 PHÁN QUYẾT: Dùng LinkedList Queue khi cần xử lý tin nhắn, luồng công việc tuần tự theo thời gian thực tế. Dùng PriorityQueue khi các tiến trình cần độ ưu tiên (tác vụ khẩn cấp xử lý trước, giải thuật tìm đường Dijkstra)."
    },
    code: `import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<Integer> fifoQueue = new LinkedList<>();
        fifoQueue.offer(30);
        fifoQueue.offer(10);
        
        Queue<Integer> priorityQueue = new PriorityQueue<>();
        priorityQueue.offer(30);
        priorityQueue.offer(10);
        
        System.out.println("FIFO Queue poll: " + fifoQueue.poll());
        System.out.println("PriorityQueue poll (Min-Heap): " + priorityQueue.poll());
    }
}`,
    output: `FIFO Queue poll: 30\nPriorityQueue poll (Min-Heap): 10`
  },
  {
    id: 'map_hashmap_treemap',
    title: '5. Map – Cặp khóa–giá trị',
    type: 'Bản đồ Khóa - Giá trị',
    description: 'Cấu trúc Key-Value lưu trữ dữ liệu tra cứu siêu tốc, HashMap và TreeMap.',
    bulletSections: [
      {
        title: "Đặc điểm",
        items: [
          "Khóa duy nhất, giá trị có thể trùng.",
          "Không kế thừa từ `Collection`."
        ]
      },
      {
        title: "Triển khai chính",
        items: [
          "**HashMap**: Bảng băm, `put`/`get`/`remove` trung bình `O(1)`, không đảm bảo thứ tự, cho phép 1 khóa null.",
          "**TreeMap**: Cây đỏ–đen, khóa có thứ tự, thao tác `O(log n)`, không cho phép khóa null."
        ]
      }
    ],
    comparisonPair: {
      title: "⚔️ ĐỐI ĐẦU TRỰC DIỆN: HashMap vs TreeMap",
      items: [
        { 
          name: "HashMap (Dựa trên bảng băm)", 
          detail: "✔ Cơ chế: Sử dụng mảng các Buckets bảng băm để lưu trữ ánh xạ Key-Value.\n✔ Thứ tự: Không đảm bảo bất kỳ thứ tự nào của các khóa.\n✔ Tốc độ: put, get, containsKey đạt hiệu năng cực cao O(1) trung bình.\n✔ Null: Cho phép chứa 1 khóa null và nhiều giá trị null.", 
          color: "#EBF8EA" 
        },
        { 
          name: "TreeMap (Dựa trên cây Đỏ-Đen)", 
          detail: "✔ Cơ chế: Sử dụng cấu trúc cây Đỏ-Đen sắp xếp các Node.\n✔ Thứ tự: Luôn tự động sắp xếp các cặp Key-Value theo thứ tự tăng dần của Khóa.\n✔ Tốc độ: Mọi thao tác tốn chi phí O(log N).\n✔ Null: Nghiêm cấm khóa null (gây Exception), nhưng cho phép nhiều giá trị null.", 
          color: "#FFEBF0" 
        }
      ],
      verdict: "💡 PHÁN QUYẾT: Dùng HashMap cho mọi mục đích lưu trữ Cache, tra cứu nhanh thông tin từ ID người dùng. Chỉ dùng TreeMap khi cần kết xuất dữ liệu và khóa bắt buộc phải sắp xếp sẵn (ví dụ in từ điển, bảng kê hóa đơn theo ngày)."
    },
    code: `import java.util.HashMap;
import java.util.TreeMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, String> hashMap = new HashMap<>();
        hashMap.put("Z", "Cuối");
        hashMap.put("A", "Đầu");
        
        Map<String, String> treeMap = new TreeMap<>();
        treeMap.put("Z", "Cuối");
        treeMap.put("A", "Đầu");
        
        System.out.println("HashMap: " + hashMap);
        System.out.println("TreeMap: " + treeMap);
    }
}`,
    output: `HashMap: {A=Đầu, Z=Cuối}\nTreeMap: {A=Đầu, Z=Cuối}`
  },
  {
    id: 'stack_deque_arraydeque',
    title: '6. Stack & Deque (Ngăn xếp & Hàng đợi 2 đầu)',
    type: 'Cấu trúc LIFO & Double-Ended',
    description: 'Ngăn xếp hoạt động theo nguyên lý LIFO. Cách sử dụng ArrayDeque thay thế lớp Stack lỗi thời.',
    bulletSections: [
      {
        title: "Đặc điểm Ngăn xếp (Stack)",
        items: [
          "Hoạt động theo nguyên lý **LIFO** (Last-In First-Out - Vào sau Ra trước).",
          "Triển khai truyền thống `java.util.Stack` bị coi là lỗi thời và nghẽn hiệu năng do sử dụng đồng bộ hóa chậm."
        ]
      },
      {
        title: "Triển khai khuyên dùng (ArrayDeque)",
        items: [
          "Không đồng bộ hóa (Non-synchronized), chạy đơn luồng cực nhanh.",
          "Triển khai đầy đủ `Deque` interface làm ngăn xếp cực chuẩn.",
          "Hiệu năng tối ưu đạt `O(1)` cho thêm/xóa ở đỉnh ngăn xếp."
        ]
      }
    ],
    comparisonPair: {
      title: "⚔️ ĐỐI ĐẦU TRỰC DIỆN: ArrayDeque (Stack hiện đại) vs java.util.Stack (Lớp lỗi thời)",
      items: [
        { 
          name: "ArrayDeque (Hiện đại)", 
          detail: "✔ Cơ chế: Không đồng bộ hóa (Non-synchronized), chạy đơn luồng cực nhanh.\n✔ Thiết kế: Triển khai Deque interface chuẩn chỉnh, tập trung duy nhất vào hàng đợi 2 đầu.\n✔ Hiệu năng: Tốc độ thêm/xóa đạt O(1) tối ưu nhất, không phát sinh vùng nhớ thừa của con trỏ.", 
          color: "#EBF8EA" 
        },
        { 
          name: "java.util.Stack (Cổ điển lỗi thời)", 
          detail: "✔ Cơ chế: Đồng bộ hóa (Synchronized) trên mọi phương thức, gây lãng phí tài nguyên CPU ở môi trường đơn luồng.\n✔ Thiết kế: Kế thừa sai lớp Vector (làm lộ các hàm không hợp lệ như get(index) vi phạm nguyên tắc LIFO).\n✔ Hiệu năng: Rất chậm do chi phí locking khóa luồng.", 
          color: "#FFEBF0" 
        }
      ],
      verdict: "💡 PHÁN QUYẾT: Hãy nói KHÔNG với class java.util.Stack khi viết code Java thực tế. Luôn sử dụng Deque<T> stack = new ArrayDeque<>() để triển khai Ngăn xếp có hiệu năng tối đa và tuân thủ đúng nguyên lý thiết kế hướng đối tượng."
    },
    code: `import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static void main(String[] args) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(10);
        stack.push(20);
        
        System.out.println("Đỉnh Stack (peek): " + stack.peek());
        System.out.println("Lấy ra đỉnh (pop): " + stack.pop());
    }
}`,
    output: `Đỉnh Stack (peek): 20\nLấy ra đỉnh (pop): 20`
  },
  {
    id: 'collections_practice',
    title: '7. Ứng dụng thực tế',
    type: 'Bảng tra cứu thực hành',
    description: 'Bảng ánh xạ các lớp JCF phổ biến với các kịch bản thực tế tương ứng.',
    builtInMethods: [
      'ArrayList - Danh sách sản phẩm (thứ tự quan trọng, truy cập nhanh).',
      'LinkedList - Danh sách phát nhạc (thêm/xóa dễ).',
      'HashSet - Danh sách email duy nhất.',
      'TreeSet - Bảng xếp hạng điểm số.',
      'LinkedList-Queue - Hàng đợi in ấn.',
      'PriorityQueue - Lập lịch tác vụ theo ưu tiên.',
      'HashMap - Lưu hồ sơ người dùng theo ID.',
      'TreeMap - Từ điển sắp xếp theo chữ cái.'
    ],
    code: `// Tóm tắt nhanh cách chọn cấu trúc dữ liệu:
// 1. Chứa cặp Khóa-Giá trị? -> Dùng Map (HashMap/TreeMap).
// 2. Chứa đối tượng đơn độc nhất (không trùng)? -> Dùng Set (HashSet/TreeSet).
// 3. Chứa danh sách tuần tự cho phép trùng? -> Dùng List (ArrayList/LinkedList).
// 4. Xử lý tuần tự vào-ra? -> Dùng Queue (FIFO) hoặc Stack (LIFO - ArrayDeque).`,
    output: `JCF Selection Guide loaded.`
  },
  {
    id: 'collections_summary',
    title: '8. Tóm tắt nhanh',
    type: 'Bảng tổng hợp JCF',
    description: 'Bảng tổng hợp nhanh đặc điểm chính và các triển khai tiêu biểu của 4 Interface lớn.',
    summaryTable: {
      headers: ["Interface", "Đặc điểm chính", "Triển khai tiêu biểu"],
      rows: [
        ["List", "Có thứ tự, cho phép trùng", "ArrayList, LinkedList"],
        ["Set", "Không trùng", "HashSet, TreeSet"],
        ["Queue", "FIFO/Ưu tiên", "LinkedList, PriorityQueue"],
        ["Map", "Khóa–giá trị", "HashMap, TreeMap"]
      ]
    },
    code: `// Tóm tắt độ phức tạp thời gian trung bình:
// - ArrayList: get O(1), add O(1), remove O(N)
// - LinkedList: get O(N), add O(1), remove O(1)
// - HashSet/HashMap: add/contains/get O(1)
// - TreeSet/TreeMap: add/contains/get O(log n)`,
    output: `JCF Time Complexity loaded.`
  },
  {
    id: 'collections_quizzes',
    title: '9. Câu hỏi Ôn tập & Trắc nghiệm (Collections Quizzes)',
    type: 'Luyện tập & Tự kiểm tra',
    description: 'Tuyển tập 10 câu hỏi ngắn gọn tự luận kiểm tra kiến thức về các đặc trưng cốt lõi của List, Set, Queue, Map, so sánh hiệu năng và 5 câu tự luận tư duy sâu.',
    quizzes: [
      {
        q: "1. Mô tả sự khác biệt chính giữa ArrayList và LinkedList về hiệu suất cho các thao tác chèn/xóa ở giữa danh sách.",
        a: "ArrayList chậm hơn khi chèn/xóa ở giữa (O(n)) vì bắt buộc phải dịch chuyển các phần tử phía sau trong mảng bộ nhớ liền kề. LinkedList nhanh hơn (O(1)) vì chỉ cần cập nhật lại liên kết địa chỉ của các nút (nodes) kề cạnh mà không cần dịch chuyển dữ liệu vật lý."
      },
      {
        q: "2. Tại sao HashSet được ưa chuộng hơn TreeSet khi bạn cần hiệu suất nhanh nhất cho các thao tác cơ bản và thứ tự không quan trọng?",
        a: "Vì HashSet sử dụng Bảng băm (Hash Table), mang lại tốc độ add/remove/contains trung bình siêu tốc O(1). TreeSet sử dụng cấu trúc cây Đỏ-Đen tự cân bằng phức tạp hơn, có tốc độ O(log n) chậm hơn HashSet."
      },
      {
        q: "3. Giải thích mục đích chính của giao diện Queue trong Khung Bộ sưu tập Java và cung cấp một ví dụ về trường hợp sử dụng.",
        a: "Mục đích chính của Queue là lưu trữ các phần tử tạm thời trước khi xử lý theo một thứ tự xác định (thường là First-In, First-Out - FIFO). Ví dụ điển hình là hàng đợi in ấn (Print Spooler), tài liệu nào gửi đến máy in trước sẽ được in ra trước."
      },
      {
        q: "4. Giao diện Map khác với giao diện Collection như thế nào về cách lưu trữ dữ liệu?",
        a: "Map lưu trữ dữ liệu dưới dạng cặp khóa-giá trị (Key-Value) với các khóa là duy nhất và không kế thừa giao diện Collection. Trong khi đó, Collection lưu trữ một nhóm các đối tượng đơn lẻ và là cha trực tiếp của List, Set, Queue."
      },
      {
        q: "5. Giải thích khi nào nên sử dụng HashMap thay vì TreeMap và những ưu điểm mà HashMap mang lại trong trường hợp đó.",
        a: "Nên sử dụng HashMap khi bạn chỉ cần lưu trữ và tra cứu thông tin theo khóa với tốc độ tối đa O(1) và hoàn toàn không quan tâm đến thứ tự sắp xếp của các khóa. HashMap tối ưu hóa tốc độ nhờ bảng băm và cho phép chứa một khóa null."
      },
      {
        q: "6. Nếu bạn cần lưu trữ một tập hợp các số nguyên duy nhất và muốn chúng được tự động sắp xếp, bạn sẽ sử dụng triển khai Set nào và tại sao?",
        a: "Bạn nên sử dụng TreeSet. Vì TreeSet triển khai SortedSet, tự động loại bỏ các phần tử trùng lặp và liên tục duy trì thứ tự sắp xếp tự nhiên tăng dần (1, 2, 3...) của các phần tử nhờ cấu trúc cây nhị phân cân bằng bên dưới."
      },
      {
        q: "7. Mô tả cách PriorityQueue xác định phần tử nào là \"đầu\" của hàng đợi và tại sao nó không phải là hàng đợi FIFO nghiêm ngặt.",
        a: "PriorityQueue xác định phần tử đầu hàng đợi dựa trên độ ưu tiên (giá trị nhỏ nhất mặc định của Min-Heap hoặc qua Comparator tùy chọn). Nó không tuân thủ FIFO nghiêm ngặt vì phần tử được thêm vào sau nhưng có độ ưu tiên cao hơn vẫn sẽ được vọt lên đứng đầu và được xử lý trước."
      },
      {
        q: "8. Trình bày hai đặc điểm chính của Arrays khiến chúng khác biệt đáng kể so với ArrayList trong Java.",
        a: "1) Arrays có kích thước cố định cứng nhắc ngay khi tạo và không thể co giãn. ArrayList có thể tự động phình to kích thước khi đầy.\n2) Arrays có thể lưu trữ trực tiếp kiểu dữ liệu nguyên thủy (primitive như int, char). ArrayList chỉ có thể lưu trữ kiểu đối tượng tham chiếu (phải dùng Wrapper class như Integer, Character)."
      },
      {
        q: "9. Giao diện Collection trong Khung Bộ sưu tập Java đóng vai trò gì? Liệt kê hai giao diện con trực tiếp của nó.",
        a: "Collection đóng vai trò làm giao diện gốc chung, định nghĩa các phương thức thao tác tập hợp cơ bản nhất cho toàn bộ framework (ngoại trừ Map). Hai giao diện con trực tiếp của nó là List và Set (còn có Queue)."
      },
      {
        q: "10. Tại sao các bộ sưu tập (Collections) được coi là \"cấu trúc dữ liệu động\"?",
        a: "Vì chúng có khả năng tự động quản lý vùng nhớ và linh hoạt thay đổi kích thước sức chứa (tự cấp phát thêm RAM khi chèn thêm phần tử hoặc thu hẹp khi xóa đi) một cách tự động trong thời gian chạy mà không cần lập trình viên can thiệp thủ công."
      }
    ],
    essays: [
      {
        q: "1. So sánh và đối chiếu các trường hợp sử dụng, ưu điểm và nhược điểm của ArrayList và LinkedList. Hãy phân tích độ phức tạp thời gian cho các thao tác phổ biến.",
        hint: "ArrayList tối ưu get(index) O(1) nhưng kém ở add/remove ở giữa O(N). LinkedList tối ưu add/remove ở hai đầu O(1) nhưng kém ở truy xuất ngẫu nhiên get(index) O(N)."
      },
      {
        q: "2. Thảo luận sâu về vai trò của Set interface. So sánh chi tiết cấu trúc dữ liệu bên dưới và hiệu năng của HashSet (bảng băm) vs TreeSet (cây đỏ đen).",
        hint: "HashSet dùng HashMap bên dưới nên chứa phần tử không thứ tự, tốc độ trung bình O(1). TreeSet dùng TreeMap bên dưới duy trì thứ tự sắp xếp tăng dần, tốc độ O(log N) do liên tục phải cân bằng cây nhị phân."
      },
      {
        q: "3. Phân tích giao diện Map. So sánh chi tiết HashMap vs TreeMap về mặt thứ tự lưu trữ, hiệu năng truy xuất và khả năng chấp nhận phần tử null.",
        hint: "HashMap không thứ tự, tốc độ O(1), cho phép 1 khóa null. TreeMap sắp xếp khóa tăng dần, tốc độ O(log N), hoàn toàn cấm khóa null (gây NullPointerException do cần so sánh so khớp khóa)."
      },
      {
        q: "4. Phân tích tầm quan trọng của giao diện Queue trong thiết kế hệ thống. So sánh đặc trưng vận hành của LinkedList-Queue và PriorityQueue.",
        hint: "LinkedList-Queue tuân thủ FIFO nghiêm ngặt phù hợp cho hệ thống tin nhắn SMS, hàng đợi tác vụ. PriorityQueue sắp xếp theo độ ưu tiên phù hợp cho giải thuật Dijkstra tìm đường ngắn nhất, lập lịch CPU."
      },
      {
        q: "5. Trình bày triết lý thiết kế đằng sau Java Collections Framework. Khái niệm Generics giúp tăng tính an toàn kiểu dữ liệu (Type-Safety) như thế nào?",
        hint: "Generics ngăn chặn lỗi runtime ClassCastException bằng cách bắt buộc kiểm tra kiểu dữ liệu ngay tại thời điểm biên dịch (Compile-time), loại bỏ việc ép kiểu thủ công."
      }
    ]
  },
  {
    id: 'collections_faqs',
    title: '10. Câu hỏi thường gặp (Collections FAQs)',
    type: 'Kinh nghiệm Phỏng vấn',
    description: 'Tổng hợp 8 câu hỏi thường gặp (FAQ) chi tiết về Java Collections Framework giúp bạn nắm vững kiến thức phỏng vấn.',
    faqs: [
      {
        q: "1. Collections trong Java là gì và tại sao chúng ta nên sử dụng chúng?",
        a: "Collections trong Java là một framework cung cấp kiến trúc để lưu trữ và thao tác với một nhóm các đối tượng. Chúng là các cấu trúc dữ liệu động có thể tự động co giãn khi cần thiết.\nLợi ích: Hiệu quả (tối ưu cấu trúc phổ biến), khả năng tái sử dụng cao, linh hoạt nhờ Generics và dễ tương tác trao đổi dữ liệu."
      },
      {
        q: "2. Các giao diện chính trong Java Collections Framework là gì và mục đích của chúng?",
        a: "Hệ thống phân cấp chính:\n- Iterable: Giao diện gốc cho phép lặp.\n- Collection: Giao diện cơ sở.\n- List: Tập hợp có thứ tự, cho phép trùng (ArrayList, LinkedList).\n- Set: Tập hợp không thứ tự, không trùng (HashSet, TreeSet).\n- Queue: Hàng đợi xử lý tạm thời (FIFO - LinkedList, PriorityQueue).\n- Map: Ánh xạ cặp Khóa-Giá trị duy nhất (HashMap, TreeMap, không kế thừa Collection)."
      },
      {
        q: "3. Sự khác biệt chính giữa ArrayList và LinkedList là gì, và khi nào nên sử dụng từng loại?",
        a: "- ArrayList: Dùng mảng động, truy cập O(1) cực nhanh, chèn/xóa ở giữa O(N) chậm. Thích hợp khi đọc nhiều hơn ghi.\n- LinkedList: Danh sách liên kết đôi, chèn/xóa ở hai đầu O(1) rất nhanh, truy cập O(N) chậm. Thích hợp khi ghi/xóa thường xuyên."
      },
      {
        q: "4. Khi nào nên dùng HashSet thay vì TreeSet?",
        a: "- Dùng HashSet khi bạn chỉ cần lọc trùng lặp phần tử với tốc độ tối đa trung bình O(1) nhờ cơ chế bảng băm, không quan tâm thứ tự.\n- Dùng TreeSet khi bạn vừa muốn lọc trùng, vừa muốn các phần tử được tự động sắp xếp theo thứ tự tự nhiên (O(log n) do dùng cây Đỏ-Đen)."
      },
      {
        q: "5. Khái niệm hàng đợi (Queue) trong Java là gì và PriorityQueue khác với LinkedList (khi dùng làm Queue) như thế nào?",
        a: "Queue là hàng đợi giữ phần tử trước khi xử lý.\n- LinkedList Queue: FIFO nghiêm ngặt (ai vào trước xử lý trước), tốn O(1).\n- PriorityQueue: Min-heap, không FIFO. Phần tử có độ ưu tiên cao nhất (nhỏ nhất mặc định) sẽ được lấy ra trước, tốn O(log n)."
      },
      {
        q: "6. Sự khác biệt giữa HashMap và TreeMap là gì?",
        a: "- HashMap: Dùng bảng băm, tốc độ put/get/remove trung bình O(1) cực nhanh, không thứ tự, cho phép 1 khóa null.\n- TreeMap: Cây Đỏ-Đen, tự động sắp xếp tăng dần theo Khóa, tốc độ O(log n), cấm khóa null."
      },
      {
        q: "7. Bạn sẽ sử dụng loại Collections nào cho các kịch bản thực tế sau: Lưu trữ email duy nhất, hàng đợi ưu tiên, tra cứu nhanh hồ sơ người dùng?",
        a: "- Lưu trữ danh sách email duy nhất: Dùng HashSet để lọc trùng nhanh nhất.\n- Quản lý hàng đợi ưu tiên: Dùng PriorityQueue để tự động xếp mức ưu tiên.\n- Tra cứu nhanh hồ sơ người dùng theo ID: Dùng HashMap để đạt tốc độ tra cứu O(1)."
      },
      {
        q: "8. Tóm tắt những lợi ích chính của việc sử dụng Java Collections Framework và các loại phổ biến nhất của nó.",
        a: "JCF cung cấp các cấu trúc dữ liệu chuẩn hóa, tối ưu hiệu năng và cực kỳ linh hoạt cho lập trình viên. Các loại phổ biến:\n- Danh sách động: ArrayList, LinkedList\n- Lọc trùng: HashSet, TreeSet\n- Hàng đợi: LinkedList (Queue), PriorityQueue\n- Tra cứu nhanh: HashMap, TreeMap"
      }
    ]
  }
];
