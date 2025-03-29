class Student {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduceSelf() {
    console.log(`私の名前は${this.name}です。${this.age}歳です。`);
  }
}

class SeniorStudent extends Student {
  major;

  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  researchQuestion = () => {
    console.log(`私の専攻は${this.major}です。`);
  };

  introduceSelf = () => {
    super.introduceSelf();
    this.researchQuestion();
  };
}

const tanaka = new SeniorStudent("田中", 18, "システム");
tanaka.introduceSelf();
