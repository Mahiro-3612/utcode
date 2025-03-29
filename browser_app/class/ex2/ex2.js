class Student {
  name;
  age;

  introduceSelf() {
    console.log(`私の名前は${this.name}です。${this.age}歳です。`);
  }
  incrementAge() {
    this.age += 1;
  }
}

newStudent = new Student();
newStudent.name = "tanaka";
newStudent.age = 34;
newStudent.introduceSelf();
newStudent.incrementAge();
newStudent.introduceSelf();
