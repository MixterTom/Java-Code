export const dataTypesConversions = [
  {
    id: 'primitives',
    title: 'Primitive Data Types',
    type: 'Memory',
    description: 'Các kiểu dữ liệu nguyên thủy trong Java và kích thước bộ nhớ tương ứng. int là kiểu phổ biến nhất.',
    interviewSignals: 'Câu hỏi lý thuyết về tràn số (overflow), tối ưu bộ nhớ, kích thước biến.',
    practiceProblems: 'Reverse Integer, String to Integer (atoi).',
    builtInMethods: [
      '1 byte = 8 bits',
      'int = 4 bytes (32 bits): -2^31 đến 2^31-1',
      'long = 8 bytes (64 bits)',
      'boolean = thường là 1 bit'
    ],
    memoryTrick: '🧠 Int là cái hộp giày (vừa vặn đa số đồ), Long là cái vali to (đựng số siêu lớn), Byte là cái ví tiền nhỏ.',
    code: `int maxInt = Integer.MAX_VALUE; // 2147483647\nint minInt = Integer.MIN_VALUE; // -2147483648\nSystem.out.println("Max int + 1 = " + (maxInt + 1)); // Bị tràn số (Overflow)`,
    output: `Max int + 1 = -2147483648`
  },
  {
    id: 'base_conversions',
    title: 'Number Base Conversions',
    type: 'Utility',
    description: 'Cách biểu diễn và chuyển đổi giữa các hệ cơ số: Thập phân (10), Nhị phân (2), Bát phân (8), Thập lục phân (16).',
    interviewSignals: 'Bài toán xử lý bitwise (Bit Manipulation), chuyển đổi hệ đếm.',
    practiceProblems: 'Number of 1 Bits, Reverse Bits, Single Number.',
    builtInMethods: [
      'Integer.toBinaryString(n) - Đổi sang chuỗi nhị phân',
      'Integer.toHexString(n) - Đổi sang chuỗi Hex',
      'Integer.parseInt("11", 2) - Phân tích chuỗi nhị phân thành int nguyên thủy'
    ],
    memoryTrick: '🧠 Prefix để nhận diện hệ cơ số: 0b (Binary/Nhị phân), 0 (Octal/Bát phân), 0x (Hex/Thập lục phân).',
    code: `int binary = 0b1111; // 15\nint hex = 0xF;       // 15\nString binStr = Integer.toBinaryString(binary);\nSystem.out.println(binary == hex); // true\nSystem.out.println("Binary string: " + binStr);`,
    output: `true\nBinary string: 1111`
  }
];
