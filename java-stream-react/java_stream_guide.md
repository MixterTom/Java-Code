# Java Stream API — Tài liệu chi tiết

---

## 1. Khái niệm

**Stream** là một luồng xử lý dữ liệu tuần tự hoặc song song trên một tập hợp (Collection, Array, I/O).

Stream **không phải** là cấu trúc dữ liệu — nó không lưu trữ dữ liệu. Stream chỉ mô tả **cách xử lý** dữ liệu từ nguồn (source) đến kết quả (terminal).

```java
import java.util.stream.*;
import java.util.*;
```

---

## 2. Bản chất

### Pipeline (Chuỗi xử lý)

Mọi Stream đều hoạt động theo mô hình:

```
Source → Intermediate Operations → Terminal Operation
```

Ví dụ:

```java
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);

int result = list.stream()           // Source
        .filter(n -> n % 2 == 0)    // Intermediate
        .mapToInt(n -> n * n)        // Intermediate
        .sum();                      // Terminal

// result = 4 + 16 + 36 = 56
```

### Lazy Evaluation (Tính lười biếng)

Intermediate Operations **không chạy ngay** — chỉ chạy khi có Terminal Operation.

```java
Stream<Integer> stream = list.stream()
        .filter(n -> {
            System.out.println("Checking: " + n);
            return n % 2 == 0;
        });
// Không in gì cả — chưa có terminal operation

stream.count(); // Lúc này mới chạy filter
```

### One-time use (Dùng một lần)

Một Stream chỉ dùng được một lần. Dùng lại sẽ throw `IllegalStateException`.

```java
Stream<Integer> s = list.stream();
s.count();  // OK
s.count();  // ❌ IllegalStateException: stream has already been operated upon
```

---

## 3. Các loại Stream

| Loại | Mô tả | Ví dụ tạo |
|------|-------|-----------|
| `Stream<T>` | Stream object tổng quát | `list.stream()` |
| `IntStream` | Stream kiểu int (tránh boxing) | `IntStream.range(0, 10)` |
| `LongStream` | Stream kiểu long | `LongStream.of(1L, 2L)` |
| `DoubleStream` | Stream kiểu double | `DoubleStream.of(1.5, 2.5)` |

---

## 4. Cách tạo Stream

```java
// Từ Collection
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> s1 = list.stream();

// Từ Array
String[] arr = {"x", "y", "z"};
Stream<String> s2 = Arrays.stream(arr);

// Từ giá trị cố định
Stream<String> s3 = Stream.of("hello", "world");

// IntStream từ range
IntStream s4 = IntStream.range(1, 6);    // 1, 2, 3, 4, 5
IntStream s5 = IntStream.rangeClosed(1, 5); // 1, 2, 3, 4, 5

// Stream vô hạn (kết hợp với limit)
Stream<Integer> s6 = Stream.iterate(0, n -> n + 2).limit(5); // 0,2,4,6,8
Stream<Double> s7 = Stream.generate(Math::random).limit(3);
```

---

## 5. Intermediate Operations (Trung gian — trả về Stream)

Các method này **trả về Stream** → có thể chain tiếp.

### filter(Predicate)
Lọc phần tử thỏa điều kiện.

```java
list.stream()
    .filter(n -> n > 3)
    // [4, 5, 6]
```

### map(Function)
Biến đổi mỗi phần tử thành kiểu khác.

```java
list.stream()
    .map(n -> n * 2)
    // [2, 4, 6, 8, 10, 12]

List<String> words = Arrays.asList("hello", "world");
words.stream()
     .map(String::toUpperCase)
     // ["HELLO", "WORLD"]
```

### mapToInt / mapToLong / mapToDouble
Map sang primitive stream (tránh auto-boxing, hiệu suất tốt hơn).

```java
List<String> words = Arrays.asList("hi", "hello", "hey");
int total = words.stream()
                 .mapToInt(String::length)
                 .sum(); // 2 + 5 + 3 = 10
```

### flatMap(Function)
Map mỗi phần tử thành Stream, rồi flatten thành 1 Stream duy nhất.

```java
List<List<Integer>> nested = Arrays.asList(
    Arrays.asList(1, 2),
    Arrays.asList(3, 4),
    Arrays.asList(5, 6)
);

List<Integer> flat = nested.stream()
        .flatMap(Collection::stream)
        .collect(Collectors.toList());
// [1, 2, 3, 4, 5, 6]
```

### sorted()
Sắp xếp tăng dần (natural order) hoặc theo Comparator.

```java
list.stream().sorted()                          // tăng dần
list.stream().sorted(Comparator.reverseOrder()) // giảm dần
words.stream().sorted(Comparator.comparingInt(String::length)) // theo độ dài
```

### distinct()
Loại bỏ phần tử trùng lặp.

```java
Arrays.asList(1, 2, 2, 3, 3, 3).stream()
      .distinct()
      // [1, 2, 3]
```

### limit(n)
Chỉ lấy n phần tử đầu tiên.

```java
list.stream().limit(3) // [1, 2, 3]
```

### skip(n)
Bỏ qua n phần tử đầu.

```java
list.stream().skip(2) // [3, 4, 5, 6]
```

### peek(Consumer)
Xem qua từng phần tử mà không thay đổi — thường dùng để debug.

```java
list.stream()
    .filter(n -> n % 2 == 0)
    .peek(n -> System.out.println("After filter: " + n))
    .map(n -> n * 10)
    .collect(Collectors.toList());
```

---

## 6. Terminal Operations (Kết thúc — kích hoạt pipeline)

### collect(Collector)
Thu kết quả về Collection hoặc dạng khác.

```java
// Thành List
List<Integer> result = stream.collect(Collectors.toList());

// Thành Set
Set<Integer> result = stream.collect(Collectors.toSet());

// Nối String
String joined = stream.collect(Collectors.joining(", "));

// Group by
Map<Integer, List<String>> grouped = words.stream()
        .collect(Collectors.groupingBy(String::length));

// Sum by group
Map<String, Integer> totalByKey = list.stream()
        .collect(Collectors.groupingBy(
            item -> item.getKey(),
            Collectors.summingInt(item -> item.getValue())
        ));
```

### forEach(Consumer)
Duyệt qua từng phần tử, không trả về giá trị.

```java
list.stream().forEach(System.out::println);
```

### count()
Đếm số phần tử.

```java
long count = list.stream().filter(n -> n > 3).count(); // 3
```

### sum() / average() / min() / max()
Chỉ có trên IntStream / LongStream / DoubleStream.

```java
int sum = IntStream.of(1, 2, 3, 4, 5).sum();              // 15
OptionalDouble avg = IntStream.of(1, 2, 3).average();     // 2.0
OptionalInt max = IntStream.of(1, 2, 3).max();            // 3
```

### findFirst() / findAny()
Lấy phần tử đầu tiên (trả về Optional).

```java
Optional<Integer> first = list.stream()
        .filter(n -> n > 3)
        .findFirst(); // Optional[4]

first.ifPresent(System.out::println); // 4
```

### anyMatch / allMatch / noneMatch
Kiểm tra điều kiện, trả về boolean.

```java
boolean hasEven = list.stream().anyMatch(n -> n % 2 == 0);  // true
boolean allPos  = list.stream().allMatch(n -> n > 0);        // true
boolean noNeg   = list.stream().noneMatch(n -> n < 0);       // true
```

### reduce(identity, BinaryOperator)
Gộp tất cả phần tử lại thành 1 giá trị.

```java
int sum = list.stream().reduce(0, Integer::sum);    // 21
int product = list.stream().reduce(1, (a, b) -> a * b); // 720
```

### toArray()
Chuyển về array.

```java
Integer[] arr = list.stream().toArray(Integer[]::new);
```

---

## 7. Collectors chi tiết

```java
// toList, toSet, toMap
Collectors.toList()
Collectors.toSet()
Collectors.toMap(String::length, s -> s)

// joining
Collectors.joining()          // "abcde"
Collectors.joining(", ")      // "a, b, c"
Collectors.joining(", ", "[", "]") // "[a, b, c]"

// counting
Collectors.counting()

// groupingBy
Collectors.groupingBy(String::length)
Collectors.groupingBy(String::length, Collectors.counting())

// partitioningBy (chia 2 nhóm true/false)
Collectors.partitioningBy(n -> n % 2 == 0)
// {true=[2,4,6], false=[1,3,5]}

// summingInt
Collectors.summingInt(String::length)

// averagingInt
Collectors.averagingInt(String::length)
```

---

## 8. Parallel Stream

Xử lý song song trên nhiều CPU core.

```java
list.parallelStream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Hoặc chuyển từ stream thường
list.stream().parallel().map(...)
```

⚠️ Thứ tự kết quả không đảm bảo. Chỉ nên dùng khi tập dữ liệu lớn và phép tính nặng.

---

## 9. Ưu điểm

| Ưu điểm | Giải thích |
|---------|-----------|
| Code ngắn gọn | Thay thế vòng for lồng nhau bằng chain method |
| Lazy evaluation | Không xử lý thừa — dừng sớm khi đủ điều kiện |
| Parallel dễ | Chỉ cần `.parallelStream()` thay vì tự quản lý thread |
| Functional style | Dễ đọc, dễ test từng bước |
| Tích hợp tốt | Hoạt động với mọi Collection, Array, I/O |

---

## 10. Nhược điểm

| Nhược điểm | Giải thích |
|-----------|-----------|
| Khó debug | Lỗi trong lambda khó trace hơn vòng for thường |
| Overhead | Với tập nhỏ (<100 phần tử), vòng for thường nhanh hơn |
| One-time use | Không tái sử dụng được Stream |
| Parallel không luôn nhanh hơn | Context switching có chi phí riêng |
| Khó đọc với người mới | Chain dài có thể gây khó hiểu |

---

## 11. So sánh: For loop vs Stream

```java
// For loop
List<String> result = new ArrayList<>();
for (String s : words) {
    if (s.contains("a")) {
        result.add(s.toUpperCase());
    }
}

// Stream — tương đương
List<String> result = words.stream()
        .filter(s -> s.contains("a"))
        .map(String::toUpperCase)
        .collect(Collectors.toList());
```

---

## 12. Tổng hợp nhanh

```
Intermediate (trả về Stream):
  filter, map, mapToInt, flatMap, sorted, distinct, limit, skip, peek

Terminal (kết thúc pipeline):
  collect, forEach, count, sum, average, min, max,
  findFirst, findAny, anyMatch, allMatch, noneMatch, reduce, toArray
```
