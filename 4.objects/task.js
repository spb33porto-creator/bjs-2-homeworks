function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.hasOwnProperty('marks')) return console.error('Студент отчислен');
  this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function() {
  if (!this.hasOwnProperty('marks') || !this.marks.length) return 0;
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

const vasilyisa = new Student("Василиса", "женский", 19);
vasilyisa.setSubject("Алгебра");
console.log(vasilyisa.getAverage());
vasilyisa.addMarks(4, 5, 4, 5);
console.log(vasilyisa.getAverage());
console.log(vasilyisa);

const artyom = new Student("Артём", "мужской", 25);
artyom.setSubject("Геометрия");
artyom.exclude('низкая успеваемость');
console.log(artyom);