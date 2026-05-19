export const multithreading = [
  {
    id: 'thread-concepts',
    title: 'Khái niệm Cốt lõi',
    type: 'Core',
    description: 'Tìm hiểu về sự khác biệt giữa Process và Thread, cũng như phân biệt giữa Concurrency và Parallelism.',
    bulletSections: [
      {
        title: '1. Process vs Thread',
        items: [
          '**So sánh trực quan:**',
          '- **Process (Tiến trình)**: Ngôi nhà – có tài nguyên riêng (đất, địa chỉ, tiện ích).',
          '- **Thread (Luồng)**: Người công nhân trong nhà – chia sẻ tài nguyên chung (bộ nhớ, tệp), nhưng mỗi người có công việc riêng.',
          '**Kỹ thuật:**',
          '- **Process**: Thể hiện một chương trình đang chạy, có **heap** và **stack** riêng, nặng và độc lập.',
          '- **Thread**: "Tiến trình nhẹ", chia sẻ **heap** với các luồng khác nhưng có **stack** riêng.'
        ]
      },
      {
        title: '2. Tại sao cần Đa luồng?',
        items: [
          '- **Tăng khả năng phản hồi**: Giao diện vẫn mượt khi chạy tác vụ nền (Ví dụ: UI không bị đơ khi lưu tệp).',
          '- **Tận dụng CPU đa lõi**: Thực hiện nhiều tác vụ đồng thời để tăng hiệu suất.',
          '- **Ứng dụng thực tế**: Máy chủ web (xử lý nhiều request), Game (render, âm thanh, AI), Xử lý dữ liệu song song.'
        ]
      },
      {
        title: '3. Concurrency vs Parallelism',
        items: [
          '- **Concurrency (Đồng thời)**: Nhiều tác vụ xen kẽ nhau, ngay cả trên 1 lõi CPU (Ví dụ: Đầu bếp tung hứng nhiều món ăn).',
          '- **Parallelism (Song song)**: Nhiều tác vụ chạy thật sự đồng thời trên nhiều lõi (Ví dụ: Hai đầu bếp nấu hai bếp khác nhau).'
        ]
      }
    ]
  },
  {
    id: 'create-thread',
    title: 'Tạo và Chạy Luồng',
    type: 'Core',
    description: 'Cách triển khai đa luồng bằng cách kế thừa Thread, implement Runnable, và sử dụng Lambda. Quan trọng nhất là hiểu quy tắc vàng giữa start() và run().',
    memoryTrick: '🧠 Gọi start() giống như thuê công nhân mới đi làm việc. Gọi run() giống như bạn tự mình chạy đi làm thay vì giao cho công nhân (vẫn chạy trên luồng chính).',
    bulletSections: [
      {
        title: 'Quy tắc vàng – start() vs run()',
        items: [
          '- `start()` → Tạo luồng OS bản địa mới, đưa vào trạng thái RUNNABLE, rồi JVM tự gọi `run()` trong luồng đó. ✅',
          '- `run()` → Chạy trên luồng hiện tại như một hàm bình thường, **không** tạo luồng mới. ❌'
        ]
      },
      {
        title: 'Implement Runnable (Ưu tiên dùng)',
        items: [
          '- **Ưu điểm**: Tách biệt "tác vụ" và "người thực thi luồng".',
          '- Hỗ trợ đa kế thừa (vì một lớp chỉ có thể extends một class cha duy nhất, nhưng có thể implements nhiều interface).',
          '- Dễ tái sử dụng với ExecutorService.'
        ]
      }
    ],
    code: `// 1. Kế thừa Thread
class MyWorker extends Thread {
    @Override
    public void run() {
        System.out.println("Hello from new thread!");
    }
}
MyWorker worker = new MyWorker();
worker.start();

// 2. Implement Runnable (Ưu tiên)
class MyTask implements Runnable {
    @Override
    public void run() {
        System.out.println("Task in separate thread.");
    }
}
Thread thread = new Thread(new MyTask());
thread.start();

// 3. Lambda (Java 8+)
new Thread(() -> System.out.println("Via Lambda")).start();`
  },
  {
    id: 'thread-lifecycle',
    title: 'Vòng đời của Luồng',
    type: 'Core',
    description: 'Một luồng trong Java sẽ trải qua 6 trạng thái khác nhau từ lúc khởi tạo cho đến khi kết thúc (TERMINATED).',
    builtInMethods: [
      'Thread.sleep(ms) - Tạm dừng có thời hạn (vào trạng thái TIMED_WAITING).',
      'thread.join() - Tạm dừng luồng hiện tại chờ luồng khác kết thúc (vào WAITING/TIMED_WAITING).',
      'thread.isAlive() - Kiểm tra luồng còn đang hoạt động hay không.'
    ],
    summaryTable: {
      headers: ['Trạng thái', 'Mô tả'],
      rows: [
        ['NEW', 'Tạo đối tượng nhưng chưa gọi `start()`'],
        ['RUNNABLE', 'Sẵn sàng chạy, đang chờ CPU (OS Scheduler) cấp phát thời gian'],
        ['BLOCKED', 'Đang chờ khóa (monitor lock) để vào một vùng synchronized'],
        ['WAITING', 'Chờ vô thời hạn một tín hiệu từ luồng khác (ví dụ: qua wait(), join())'],
        ['TIMED_WAITING', 'Chờ có thời hạn (ví dụ: sleep(ms), wait(ms))'],
        ['TERMINATED', 'Đã kết thúc thực thi hàm run()']
      ]
    }
  },
  {
    id: 'race-condition',
    title: 'Race Condition & Synchronization',
    type: 'Core',
    description: 'Điều kiện tranh chấp (Race condition) xảy ra khi nhiều luồng cùng thay đổi chung một biến, gây sai lệch hoặc mất dữ liệu.',
    interviewSignals: 'Thường xuyên xuất hiện trong các bài toán yêu cầu cập nhật bộ đếm (Counter) đồng thời, hoặc thao tác đa luồng trên dữ liệu chia sẻ.',
    memoryTrick: '🧠 Synchronized giống như một nhà vệ sinh chỉ có 1 chìa khóa. Thằng nào cầm chìa (monitor lock) thì được vào, các luồng khác phải đợi (bị BLOCKED) ở ngoài.',
    code: `// UNSAFE: Dễ bị Race Condition
class UnsafeCounter {
    private int count = 0;
    public void increment() {
        // Hoạt động này KHÔNG nguyên tử (bao gồm 3 bước: đọc -> tăng -> ghi)
        count++; 
    }
}

// SAFE: Dùng từ khóa synchronized
class SafeCounter {
    private int count = 0;
    public synchronized void increment() {
        // Chỉ 1 luồng được cầm "khóa" vào thực hiện tại 1 thời điểm
        count++;
    }
}`,
    bulletSections: [
      {
        title: 'Cách hoạt động của synchronized',
        items: [
          '- Mỗi đối tượng (object) có một khóa nội tại (**monitor lock**).',
          '- Chỉ một luồng giữ khóa mới được vào phương thức hoặc khối lệnh synchronized.',
          '- Ngăn chặn các luồng khác truy cập đồng thời vào dữ liệu đang được bảo vệ, do đó tránh được Race Condition.'
        ]
      }
    ]
  },
  {
    id: 'thread-summary',
    title: 'Tóm tắt Nhanh',
    type: 'Core',
    description: 'Các điểm mấu chốt quan trọng nhất cần ghi nhớ về Đa luồng trong Java.',
    bulletSections: [
      {
        title: '5. Tóm tắt Nhanh',
        items: [
          '- **Thread** = Công nhân trong tiến trình.',
          '- **Runnable** → Cách tạo luồng linh hoạt hơn `Thread`.',
          '- **Luôn** dùng `start()`, không dùng `run()` trực tiếp.',
          '- Khi chia sẻ dữ liệu mutable → cần **synchronization** để tránh **race condition**.'
        ]
      }
    ]
  },
  {
    id: 'thread-glossary',
    title: 'Thuật ngữ cốt lõi',
    type: 'Theory',
    description: 'Các thuật ngữ thường gặp khi làm việc với lập trình Đa luồng trong Java được trích xuất từ bảng chú giải thuật ngữ.',
    bulletSections: [
      {
        title: 'Tiến trình và Luồng (Process & Thread)',
        items: [
          '- **Process**: Một phiên bản của một chương trình đang thực thi, có không gian bộ nhớ chuyên dụng và các tài nguyên của riêng nó; nó là một thực thể độc lập, nặng ký.',
          '- **Thread**: Một "tiến trình nhẹ" hoặc một đường dẫn thực thi duy nhất trong một tiến trình. Các luồng trong cùng một tiến trình chia sẻ tài nguyên bộ nhớ (heap) của tiến trình đó.',
          '- **Multithreading**: Khả năng của một chương trình hoặc một hệ điều hành để thực thi nhiều phần của mã (luồng) đồng thời hoặc song song để cải thiện hiệu suất hoặc khả năng phản hồi.',
          '- **Runnable**: Một giao diện trong Java đại diện cho một tác vụ có thể được thực thi bởi một luồng. Đó là cách tiếp cận được ưu tiên để định nghĩa logic của luồng.',
          '- **Thread Lifecycle**: Các giai đoạn hoặc trạng thái khác nhau mà một luồng trải qua từ khi được tạo cho đến khi kết thúc.'
        ]
      },
      {
        title: 'Các trạng thái của Luồng (Thread States)',
        items: [
          '- **NEW**: Trạng thái của một luồng vừa được tạo nhưng chưa bắt đầu thực thi (chưa gọi start()).',
          '- **RUNNABLE**: Trạng thái của một luồng đã sẵn sàng chạy và đang chờ bộ lập lịch của hệ điều hành gán thời gian CPU cho nó.',
          '- **Blocked**: Trạng thái của một luồng đang hoạt động nhưng tạm thời không hoạt động, chờ khóa để tiếp tục thực thi.',
          '- **WAITING**: Trạng thái của một luồng đang tạm thời không hoạt động, chờ đợi vô thời hạn cho một hành động cụ thể từ một luồng khác (ví dụ: sử dụng wait()).',
          '- **TIMED_WAITING**: Trạng thái của một luồng đang tạm thời không hoạt động trong một khoảng thời gian được chỉ định (ví dụ: trong khi gọi sleep()).',
          '- **TERMINATED**: Trạng thái của một luồng đã hoàn thành việc thực thi phương thức run() của nó và không còn hoạt động nữa.'
        ]
      },
      {
        title: 'Các phương thức cốt lõi',
        items: [
          '- **Start()**: Phương thức được sử dụng để khởi chạy một luồng mới. Nó hướng dẫn JVM tạo một luồng hệ điều hành gốc và bắt đầu thực thi phương thức run() của nó.',
          '- **Run() Method**: Phương thức chứa logic thực tế sẽ được thực thi bởi một luồng. Không bao giờ được gọi trực tiếp để bắt đầu một luồng mới.',
          '- **Sleep()**: Một phương thức tĩnh của lớp Thread được sử dụng để tạm dừng thực thi của luồng hiện tại trong một khoảng thời gian được chỉ định.',
          '- **Join()**: Một phương thức luồng được sử dụng để tạm dừng luồng hiện tại cho đến khi luồng được gọi join() kết thúc quá trình thực thi của nó.'
        ]
      },
      {
        title: 'Đồng bộ hóa & Bộ nhớ (Synchronization & Memory)',
        items: [
          '- **Race Condition**: Một tình huống trong đó nhiều luồng truy cập và cố gắng sửa đổi dữ liệu được chia sẻ đồng thời, dẫn đến kết quả không thể đoán trước hoặc không chính xác.',
          '- **Synchronized**: Từ khóa trong Java được sử dụng để kiểm soát quyền truy cập vào các tài nguyên được chia sẻ bằng cách đảm bảo rằng chỉ một luồng có thể thực thi một phần mã cụ thể tại một thời điểm.',
          '- **Monitor Lock (Intrinsic Lock)**: Một khóa nội tại mà mỗi đối tượng Java sở hữu. Khi một luồng vào một phương thức được synchronized, nó sẽ có được khóa này.',
          '- **Heap Memory**: Khu vực bộ nhớ được chia sẻ trong một tiến trình Java, nơi các đối tượng được phân bổ và được tất cả các luồng truy cập.',
          '- **Stack Memory**: Khu vực bộ nhớ dành riêng cho mỗi luồng, được sử dụng để lưu trữ các biến cục bộ và khung lệnh gọi phương thức.'
        ]
      },
      {
        title: 'Các khái niệm bổ sung',
        items: [
          '- **Concurrency**: Khả năng xử lý nhiều tác vụ cùng một lúc, thường bằng cách xen kẽ thực thi trên một lõi CPU duy nhất để tạo ảo giác song song.',
          '- **Parallelism**: Khả năng thực hiện nhiều tác vụ thực sự đồng thời, yêu cầu bộ xử lý đa lõi để thực thi đồng thời thực sự.',
          '- **Responsiveness (Improved)**: Khả năng của một ứng dụng vẫn tương tác và không bị đóng băng trong khi thực hiện các tác vụ dài.',
          '- **Lambda Expression**: Một cú pháp ngắn gọn (từ Java 8 trở đi) để triển khai các giao diện chức năng, thường được sử dụng với Runnable để tạo các tác vụ luồng nhanh chóng.',
          '- **JDBC (Java Database Connectivity)**: Một API Java để kết nối và thực thi các truy vấn với cơ sở dữ liệu.'
        ]
      }
    ]
  },
  {
    id: 'thread-faq',
    title: 'Câu hỏi thường gặp (FAQ)',
    type: 'FAQ',
    description: 'Các câu hỏi phỏng vấn Đa luồng phổ biến nhất và câu trả lời chi tiết.',
    faqs: [
      {
        q: '1. Sự khác biệt cốt lõi giữa "process" (tiến trình) và "thread" (luồng) là gì, và tại sao việc hiểu được chúng lại quan trọng trong Java?',
        a: 'Trong Java, hãy hình dung ứng dụng của bạn như một ngôi nhà.\n\n- **Process (Tiến trình):** Là toàn bộ ngôi nhà. Đó là một môi trường khép kín với các tài nguyên riêng (đất đai, địa chỉ, tiện ích). Về mặt kỹ thuật, một tiến trình là một thể hiện đang chạy của một chương trình (ví dụ: Chrome, IntelliJ) và có không gian bộ nhớ riêng (Heap, Stack), khiến chúng trở nên nặng nề và cách ly với nhau.\n- **Thread (Luồng):** Là một công nhân làm việc bên trong ngôi nhà. Nhiều công nhân (luồng) có thể hoạt động trong cùng một ngôi nhà (tiến trình). Họ chia sẻ tài nguyên của ngôi nhà như bếp và công cụ (bộ nhớ, tệp). Mỗi công nhân có thể thực hiện một nhiệm vụ khác nhau một cách độc lập. Về mặt kỹ thuật, một luồng là một "tiến trình nhẹ", một đường dẫn thực thi duy nhất trong một tiến trình. Nó có ngăn xếp riêng nhưng chia sẻ bộ nhớ heap với tất cả các luồng khác trong cùng một tiến trình.\n\nViệc hiểu sự khác biệt này là rất quan trọng vì nó làm nền tảng cho lý do và cách chúng ta sử dụng đa luồng để cải thiện hiệu suất và khả năng đáp ứng của phần mềm.'
      },
      {
        q: '2. Tại sao đa luồng lại cần thiết cho phần mềm hiện đại và nó giải quyết được những vấn đề gì?',
        a: 'Đa luồng là yếu tố cần thiết cho phần mềm hiện đại vì nó cho phép ứng dụng thực hiện nhiều việc cùng một lúc, mang lại những lợi ích chính sau:\n\n- **Cải thiện khả năng đáp ứng:** Ngăn giao diện người dùng bị đơ khi một tác vụ dài đang chạy ở chế độ nền. Ví dụ, một ứng dụng máy tính để bàn vẫn có thể sử dụng được trong khi đang lưu một tệp lớn.\n- **Sử dụng CPU đa lõi hiệu quả:** Các bộ xử lý hiện đại có nhiều lõi. Các ứng dụng đơn luồng chỉ sử dụng một lõi, bỏ phí tài nguyên. Song song hóa cho phép thực thi các tác vụ đồng thời, tăng tốc đáng kể các phép tính.\n- **Các trường hợp sử dụng phổ biến:** Máy chủ web xử lý nhiều yêu cầu của khách hàng cùng lúc, trò chơi hiển thị đồ họa, phát âm thanh và chạy logic AI đồng thời, và xử lý dữ liệu thực hiện các phép tính quy mô lớn song song.\n\nNó giải quyết vấn đề về việc ứng dụng không phản hồi và tận dụng triệt để sức mạnh của phần cứng máy tính hiện đại.'
      },
      {
        q: '3. "Concurrency" (đồng thời) và "Parallelism" (song song) khác nhau như thế nào?',
        a: 'Đây là một sự khác biệt tinh tế nhưng quan trọng trong bối cảnh đa luồng:\n\n- **Concurrency (Đồng thời):** Liên quan đến việc xử lý nhiều tác vụ cùng một lúc. Các tác vụ có thể được xen kẽ, tạo ra ảo giác thực thi đồng thời trên một lõi CPU duy nhất. Hãy nghĩ về một đầu bếp tung hứng nhiều công thức trong một nhà bếp. Nó tập trung vào việc quản lý nhiều tác vụ sao cho chúng có thể tiến triển.\n- **Parallelism (Song song):** Thực hiện nhiều tác vụ cùng một lúc. Điều này yêu cầu một bộ xử lý đa lõi để thực thi các tác vụ thực sự đồng thời. Hãy nghĩ về hai đầu bếp, mỗi người trong nhà bếp riêng của mình, nấu một công thức mỗi người. Nó tập trung vào việc thực hiện các tác vụ cùng một lúc để tăng tốc độ.\n\nTóm lại, đồng thời là về cấu trúc ứng dụng của bạn để xử lý nhiều thứ, trong khi song song là về việc thực sự thực hiện nhiều thứ cùng một lúc.'
      },
      {
        q: '4. Có những cách nào để tạo và chạy luồng trong Java, và cách nào được ưu tiên hơn?',
        a: 'Có ba cách chính để tạo và chạy luồng trong Java:\n\n1. **Mở rộng lớp Thread:** Tạo một lớp kế thừa từ Thread và ghi đè phương thức public void run(). Sau đó, khởi tạo lớp của bạn và gọi phương thức .start() để bắt đầu thực thi.\n2. **Triển khai giao diện Runnable (Ưu tiên):** Tạo một lớp triển khai giao diện Runnable và triển khai phương thức public void run(). Để chạy, bạn tạo một thể hiện của lớp Runnable của mình, truyền thể hiện đó vào hàm tạo của một đối tượng Thread mới, và sau đó gọi .start() trên đối tượng Thread.\n3. **Cách tiếp cận hiện đại: Biểu thức Lambda (Java 8+):** Vì Runnable là một giao diện chức năng, bạn có thể sử dụng biểu thức lambda để triển khai một cách gọn gàng, nội tuyến. Điều này tránh cần tạo một lớp riêng biệt cho tác vụ của bạn.\n\n**Cách ưu tiên là triển khai Runnable (hoặc sử dụng biểu thức Lambda với Runnable).** Lý do là nó thúc đẩy thiết kế tốt hơn bằng cách tách biệt "tác vụ" (Runnable) khỏi "công nhân" (Thread). Java chỉ cho phép một lớp kế thừa từ một lớp cha, nhưng có thể triển khai nhiều giao diện. Do đó, nếu lớp của bạn đã kế thừa một lớp khác, bạn vẫn có thể thực hiện đa luồng bằng cách triển khai Runnable. Ngoài ra, cùng một tác vụ Runnable có thể được truyền cho các đối tượng Thread khác nhau hoặc cho các framework ExecutorService nâng cao hơn, giúp tăng khả năng tái sử dụng mã.'
      },
      {
        q: '5. "Quy tắc vàng" khi khởi động luồng là gì và tại sao việc gọi start() lại quan trọng hơn run()?',
        a: '**Quy tắc vàng:** Luôn luôn gọi myThread.start(), không bao giờ gọi myThread.run().\n\n- **myThread.start():** Đây là cách đúng để khởi chạy một luồng. Nó ra lệnh cho Máy ảo Java (JVM) tạo một luồng OS bản địa mới, đặt nó vào trạng thái RUNNABLE. Sau đó, bộ lập lịch luồng sẽ gọi phương thức run() cho bạn một cách độc lập trên luồng mới đó. Điều này cho phép thực hiện đa luồng thực sự.\n- **myThread.run():** Đây là một **lỗi!** Nó KHÔNG tạo một luồng mới. Nó đơn giản là thực thi phương thức run() trên luồng hiện tại, giống như bất kỳ lệnh gọi phương thức bình thường nào khác. Bạn sẽ không nhận được bất kỳ lợi ích đa luồng nào.\n\nSự khác biệt rất quan trọng vì start() là điểm khởi đầu cho một luồng thực sự mới trong hệ thống, trong khi run() chỉ là một lệnh gọi phương thức thông thường trong luồng hiện tại.'
      },
      {
        q: '6. Các trạng thái cơ bản của một luồng trong vòng đời của nó là gì?',
        a: 'Một luồng Java trải qua các trạng thái sau trong vòng đời của nó:\n\n- **NEW:** Đối tượng luồng đã được tạo (ví dụ: Thread t = new Thread();), nhưng phương thức .start() chưa được gọi. Luồng chưa bắt đầu thực thi.\n- **RUNNABLE:** Sau khi .start() được gọi, luồng đã sẵn sàng để chạy. Nó đang chờ bộ lập lịch hệ điều hành cấp phát thời gian CPU cho nó. Nó có thể đang chạy hoặc chờ để chạy.\n- **BLOCKED / WAITING / TIMED_WAITING:** Luồng còn sống nhưng tạm thời không hoạt động. Nó không sử dụng thời gian CPU.\n  - **BLOCKED:** Luồng đang chờ một khóa giám sát (ví dụ: để vào một phương thức synchronized).\n  - **WAITING:** Luồng đang chờ vô thời hạn một luồng khác thực hiện một hành động cụ thể (ví dụ: thông qua Object.wait(), Thread.join()).\n  - **TIMED_WAITING:** Luồng đang chờ một khoảng thời gian cụ thể (ví dụ: thông qua Thread.sleep(long millis), Object.wait(long millis)).\n- **TERMINATED:** Phương thức run() đã hoàn thành và luồng đã kết thúc thực thi. Nó đã "chết" và không thể được khởi động lại.'
      },
      {
        q: '7. Vấn đề "race condition" (điều kiện tranh chấp) là gì trong đa luồng và tại sao nó lại nguy hiểm?',
        a: '**Race condition** là một lỗi xảy ra trong các hệ thống đa luồng khi nhiều luồng cố gắng truy cập và sửa đổi cùng một dữ liệu chia sẻ đồng thời, và kết quả cuối cùng phụ thuộc vào trình tự thực hiện của các luồng.\n\nVí dụ được cung cấp minh họa điều này bằng một bộ đếm đơn giản mà hai luồng cố gắng tăng giá trị. Hoạt động count++ không phải là một bước duy nhất mà gồm ba bước:\n1. Đọc giá trị hiện tại của count.\n2. Thêm một vào giá trị đó.\n3. Ghi giá trị mới trở lại count.\n\nNếu hai luồng cố gắng thực hiện điều này cùng một lúc, luồng A có thể đọc count (ví dụ: 0), sau đó luồng B cũng đọc count (cũng là 0). Sau đó, cả hai luồng tăng giá trị của chúng lên 1 và ghi lại 1. Kết quả cuối cùng là 1, chứ không phải 2 như mong đợi, dẫn đến mất một lần tăng.\n\nĐiều kiện tranh chấp nguy hiểm vì chúng dẫn đến kết quả không chính xác, không thể đoán trước và thường khó gỡ lỗi, đặc biệt là khi chúng không xảy ra thường xuyên.'
      },
      {
        q: '8. Làm thế nào để giải quyết vấn đề race condition bằng từ khóa synchronized trong Java?',
        a: 'Để giải quyết vấn đề race condition và đảm bảo tính đúng đắn khi nhiều luồng truy cập dữ liệu chia sẻ có thể sửa đổi được, chúng ta sử dụng từ khóa synchronized.\n\nTrong ví dụ về bộ đếm, chúng ta có thể làm cho phương thức increment() được synchronized:\n\n```java\nclass SafeCounter {\n    private int count = 0;\n    public synchronized void increment() {\n        count++; // Bây giờ hoạt động này là nguyên tử\n    }\n    public int getCount() { return count; }\n}\n```\n\n**synchronized hoạt động như thế nào (Khái niệm về "Khóa giám sát"):**\n\n- Mỗi đối tượng trong Java đều có một khóa nội tại (hay còn gọi là "giám sát").\n- Khi một luồng vào một phương thức synchronized, nó sẽ lấy được khóa của đối tượng.\n- Khi khóa được giữ, không có luồng nào khác có thể vào bất kỳ phương thức synchronized nào khác trên CÙNG đối tượng đó.\n- Các luồng khác sẽ bị BLOCKED (bị chặn) cho đến khi luồng đầu tiên thoát khỏi phương thức và nhả khóa.\n- Điều này ngăn chặn điều kiện tranh chấp bằng cách đảm bảo quyền truy cập độc quyền vào dữ liệu chia sẻ trong thời gian quan trọng, đảm bảo rằng chỉ có một luồng thực hiện thao tác đó tại một thời điểm.'
      }
    ]
  },
  {
    id: 'thread-quizzes',
    title: 'Câu hỏi ôn tập (Quizzes)',
    type: 'Quiz',
    description: 'Luyện tập trả lời các câu hỏi ngắn để nắm vững cơ chế vòng đời và đồng bộ hóa.',
    quizzes: [
      {
        q: '1. Hãy giải thích sự khác biệt cơ bản giữa tiến trình và luồng bằng cách sử dụng phép ẩn dụ Ngôi nhà được cung cấp.',
        hints: ['Tiến trình là môi trường khép kín có tài nguyên riêng.', 'Luồng giống như công nhân dùng chung tài nguyên trong nhà.'],
        a: 'Tiến trình giống như toàn bộ Ngôi nhà – một môi trường khép kín với các tài nguyên riêng. Luồng giống như một Công nhân bên trong Ngôi nhà; nhiều công nhân có thể hoạt động trong cùng một ngôi nhà, chia sẻ tài nguyên như nhà bếp và công cụ (bộ nhớ, tệp), và mỗi công nhân có thể thực hiện một nhiệm vụ khác nhau.'
      },
      {
        q: '2. Theo quan điểm kỹ thuật, luồng khác với tiến trình như thế nào về không gian bộ nhớ?',
        hints: ['Tiến trình có Heap và Stack riêng.', 'Luồng chia sẻ Heap nhưng có Stack riêng.'],
        a: 'Về mặt kỹ thuật, một tiến trình là một phiên bản của một chương trình đang thực thi và có không gian bộ nhớ riêng (Heap, Stack). Ngược lại, một luồng là một "tiến trình nhẹ" và là một đường dẫn thực thi duy nhất trong một tiến trình; nó có stack riêng nhưng chia sẻ bộ nhớ heap với tất cả các luồng khác trong cùng một tiến trình.'
      },
      {
        q: '3. Tại sao đa luồng lại quan trọng để cải thiện khả năng phản hồi của ứng dụng? Nêu một ví dụ.',
        hints: ['Giúp giao diện không bị đơ khi xử lý tác vụ nặng.', 'Giao việc nặng cho luồng phụ (background thread).'],
        a: 'Đa luồng rất quan trọng để cải thiện khả năng phản hồi bằng cách cho phép các tác vụ dài chạy ở chế độ nền mà không làm đóng băng giao diện người dùng. Ví dụ, một ứng dụng máy tính để bàn vẫn có thể sử dụng được trong khi lưu một tệp lớn.'
      },
      {
        q: '4. Điểm khác biệt chính giữa tính đồng thời (Concurrency) và tính song song (Parallelism) là gì?',
        hints: ['Đồng thời: xử lý xen kẽ trên 1 lõi.', 'Song song: làm cùng lúc trên nhiều lõi.'],
        a: 'Tính đồng thời là việc xử lý nhiều tác vụ cùng một lúc, có thể lồng vào nhau trên một lõi CPU duy nhất, tạo ảo giác thực thi đồng thời. Tính song song là việc thực hiện nhiều tác vụ cùng một lúc, đòi hỏi bộ xử lý đa lõi để thực sự thực hiện các tác vụ đồng thời.'
      },
      {
        q: '5. Giải thích tại sao việc gọi myThread.start() là bắt buộc để khởi chạy một luồng mới, trong khi gọi myThread.run() lại là một lỗi.',
        hints: ['start() sẽ yêu cầu OS tạo luồng mới.', 'run() chỉ là gọi một hàm bình thường.'],
        a: 'Việc gọi myThread.start() là cần thiết vì nó hướng dẫn JVM tạo một luồng OS gốc mới, đặt nó vào trạng thái RUNNABLE và để bộ lập lịch luồng gọi phương thức run(). Ngược lại, gọi myThread.run() chỉ đơn giản là thực thi phương thức run() trên luồng hiện tại như một lệnh gọi phương thức thông thường, không tạo ra luồng mới và không cung cấp lợi ích đa luồng.'
      },
      {
        q: '6. Tại sao việc triển khai giao diện Runnable lại được ưu tiên hơn so với việc mở rộng lớp Thread khi tạo luồng?',
        hints: ['Tránh giới hạn đa kế thừa.', 'Tách biệt giữa công việc (task) và người làm (thread).'],
        a: 'Việc triển khai Runnable được ưu tiên hơn vì nó thúc đẩy thiết kế tốt hơn bằng cách tách tác vụ khỏi người thực thi luồng, cho phép đa kế thừa hành vi (vì một lớp chỉ có thể mở rộng một lớp cha) và tăng khả năng tái sử dụng mã (cùng một tác vụ Runnable có thể được sử dụng với các đối tượng Thread khác nhau hoặc các khung ExecutorService nâng cao hơn).'
      },
      {
        q: '7. Mô tả trạng thái RUNNABLE của một luồng trong vòng đời của nó.',
        hints: ['Đã sẵn sàng chạy nhưng chưa chắc đã chạy.', 'Chờ hệ điều hành (OS Scheduler) cấp phát CPU.'],
        a: 'Trong vòng đời của một luồng, trạng thái RUNNABLE có nghĩa là luồng đã sẵn sàng chạy và đang chờ bộ lập lịch của hệ điều hành gán thời gian CPU cho nó. Trạng thái này xảy ra sau khi phương thức start() được gọi.'
      },
      {
        q: '8. Khi nào bạn nên sử dụng phương thức thread.join()?',
        hints: ['Chờ đợi luồng khác.', 'Ví dụ: chờ lấy kết quả tính toán trước khi đi tiếp.'],
        a: 'Bạn nên sử dụng phương thức thread.join() khi luồng hiện tại cần tạm dừng và chờ một luồng khác kết thúc quá trình thực thi của nó (chết) trước khi tiếp tục. Điều này rất cần thiết để đảm bảo rằng một tác vụ hoàn thành trước khi tác vụ khác bắt đầu.'
      },
      {
        q: '9. Vấn đề về tình huống chạy đua (race condition) là gì khi hai luồng cố gắng tăng một biến đếm được chia sẻ đồng thời?',
        hints: ['Nhiều luồng cùng truy cập và sửa dữ liệu.', 'Việc tăng biến (count++) không phải thao tác nguyên tử.'],
        a: 'Vấn đề của một tình huống chạy đua là khi nhiều luồng cố gắng sửa đổi dữ liệu được chia sẻ (như tăng một biến đếm) đồng thời. Vì hoạt động tăng (ví dụ: count++) bao gồm nhiều bước (đọc, tăng, ghi), các luồng có thể xen kẽ theo cách mà một số bản cập nhật bị mất, dẫn đến kết quả không chính xác.'
      },
      {
        q: '10. Lợi ích chính của việc sử dụng từ khóa synchronized trong Java là gì để giải quyết các tình huống chạy đua?',
        hints: ['Đảm bảo tính độc quyền.', 'Khóa màn hình (Monitor Lock) chặn các luồng khác.'],
        a: 'Lợi ích chính của việc sử dụng từ khóa synchronized là nó đảm bảo rằng chỉ một luồng có thể thực thi một phương thức hoặc khối mã được đồng bộ hóa tại một thời điểm. Điều này được thực hiện bằng cách yêu cầu luồng phải có được khóa của đối tượng (màn hình) trước khi vào, ngăn chặn các luồng khác truy cập cùng một mã được đồng bộ hóa và do đó ngăn chặn các tình huống chạy đua.'
      }
    ],
    essays: [
      {
        q: 'Thảo luận chi tiết về vòng đời của một luồng Java, giải thích các sự kiện và phương thức chính gây ra sự chuyển đổi giữa các trạng thái khác nhau (NEW, RUNNABLE, BLOCKED/WAITING/TIMED_WAITING, TERMINATED).',
        a: 'Gợi ý: Hãy vẽ lại luồng đi từ khi tạo đối tượng (NEW) -> gọi start() (RUNNABLE) -> tranh chấp khóa (BLOCKED) hoặc gọi sleep/wait (TIMED_WAITING/WAITING) -> và cuối cùng khi hàm run() chạy xong (TERMINATED). Nêu rõ sự khác biệt giữa WAITING (cần luồng khác gọi notify/notifyAll) và TIMED_WAITING (sẽ tự động tỉnh lại sau khoảng thời gian đếm ngược).'
      },
      {
        q: 'Phân tích tầm quan trọng của đa luồng trong các ứng dụng phần mềm hiện đại, đặc biệt là liên quan đến việc sử dụng CPU đa lõi hiệu quả và cải thiện khả năng phản hồi của giao diện người dùng. Đưa ra ít nhất ba trường hợp sử dụng cụ thể mà đa luồng mang lại lợi ích đáng kể.',
        a: 'Gợi ý: Nhấn mạnh vào xu hướng phần cứng hiện tại (nhiều nhân thay vì xung nhịp cao). 3 trường hợp thực tế: 1. Web Server (Tomcat) phục vụ hàng ngàn request đồng thời. 2. UI Desktop/Mobile (JavaFX, Android) - luồng chính vẽ giao diện, luồng phụ call API/tải file. 3. Game engine - một luồng vật lý (physics), một luồng render hình ảnh, một luồng AI.'
      },
      {
        q: 'So sánh và đối chiếu hai phương pháp chính để tạo và chạy các luồng trong Java: mở rộng lớp Thread và triển khai giao diện Runnable. Giải thích những lợi thế của việc triển khai Runnable và tại sao nó thường được coi là cách tiếp cận tốt hơn.',
        a: 'Gợi ý: Điểm then chốt là "Đa kế thừa". Trong Java, một class chỉ có thể extends 1 class duy nhất, nhưng có thể implements nhiều interface. Nếu extends Thread, class của bạn không thể kế thừa class nào khác. Runnable tách bạch hoàn toàn giữa "Công việc cần làm (Task)" và "Người thực thi công việc (Thread)", đây là nền tảng cốt lõi của Design Pattern và giúp dễ dàng chuyển đổi sang sử dụng Executor Framework (Thread Pool).'
      },
      {
        q: 'Giải thích vấn đề của các tình huống chạy đua (Race Condition) trong đa luồng và minh họa cách một tình huống chạy đua có thể dẫn đến kết quả không chính xác với một ví dụ cụ thể (như ví dụ bộ đếm). Sau đó, mô tả cách từ khóa synchronized giải quyết vấn đề này, thảo luận về khái niệm khóa màn hình và cách nó đảm bảo truy cập độc quyền.',
        a: 'Gợi ý: Ví dụ kinh điển: count++ thực chất là 3 lệnh (Đọc, Tăng, Ghi). Nếu Thread A và B cùng đọc giá trị 0, cả 2 cùng tăng lên 1 và cùng ghi 1 -> Mất đi một phép tính. Giải pháp: Khóa "Monitor Lock". Mỗi object có 1 chìa khóa nội tại. Khi thêm synchronized, chỉ luồng nào cầm khóa mới được vào thao tác 3 lệnh đó một cách trọn vẹn (Nguyên tử - Atomic), luồng khác phải chờ ở cửa (BLOCKED).'
      },
      {
        q: 'Thảo luận về sự khác biệt sắc thái giữa tính đồng thời (Concurrency) và tính song song (Parallelism), cung cấp các ví dụ để làm rõ từng khái niệm. Giải thích cách đa luồng trong Java có thể hỗ trợ cả tính đồng thời và tính song song tùy thuộc vào môi trường thực thi cơ bản.',
        a: 'Gợi ý: Concurrency = "Dealing with a lot of things at once" (Quản lý nhiều việc). Parallelism = "Doing a lot of things at once" (Làm nhiều việc). Ví dụ: 1 đầu bếp luân phiên nấu 2 món ăn trên 1 bếp (Concurrency). 2 đầu bếp nấu 2 món ăn cùng lúc trên 2 bếp (Parallelism). Java Thread trên máy 1 nhân CPU sẽ chạy xen kẽ (Concurrency), nhưng nếu chạy trên máy nhiều nhân CPU, hệ điều hành sẽ phân bổ chúng chạy song song thực sự (Parallelism).'
      }
    ]
  }
];
