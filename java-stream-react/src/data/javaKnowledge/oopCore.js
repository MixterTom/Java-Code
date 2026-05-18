export const oopCore = [
  {
    id: 'oop_principles',
    title: '4 Pillars of OOP',
    type: 'Architecture',
    description: '4 tính chất cốt lõi của Lập trình hướng đối tượng trong Java: Đóng gói (Encapsulation), Kế thừa (Inheritance), Đa hình (Polymorphism), Trừu tượng (Abstraction).',
    interviewSignals: 'Câu hỏi phỏng vấn System Design, thiết kế class. Phân biệt Abstract Class và Interface. Overloading vs Overriding.',
    practiceProblems: 'Design Parking Lot, Design LRU Cache (Sử dụng OOP).',
    builtInMethods: [
      'Đóng gói: private field + public getter/setter',
      'Kế thừa: extends / implements',
      'Đa hình: Overriding (Run-time) / Overloading (Compile-time)',
      'Trừu tượng: abstract class / interface'
    ],
    memoryTrick: '🧠 Đóng gói là hộp thuốc (che giấu hóa chất), Kế thừa là con cái giống cha mẹ, Đa hình là 1 nút bấm nhiều tác dụng, Trừu tượng là lái xe không cần hiểu cấu tạo động cơ.',
    code: `abstract class Animal { abstract void speak(); }\nclass Dog extends Animal {\n    @Override\n    void speak() { System.out.println("Woof!"); }\n}\nAnimal a = new Dog(); // Đa hình\na.speak();`,
    output: `Woof!`
  }
];
