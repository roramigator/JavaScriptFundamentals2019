const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  TeacherGradeBook
} = require("../../exercises/12-Module-Pattern/Module-Pattern");

describe("Module Pattern", () => {
  it("should return a list of passing students", () => {
    const passingStudents = TeacherGradeBook.getPassingStudents();
    const students = passingStudents.map(student => student.firstName);
    expect(students).to.be.equalTo(["John", "Bill", "Joe", "Billy"]);
  });
  it("should return a failing list of students", () => {
    const failingStudents = TeacherGradeBook.getFailingStudents();
    const students = failingStudents.map(student => student.firstName);
    expect(students).to.be.equalTo(["Jane", "Michael"]);
  });
});
