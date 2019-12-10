const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  TeacherGradeBook
} = require("../../exercises/12-Module-Pattern/Module-Pattern");

describe.only("Module Pattern", () => {
  it("should return a list of passing students", () => {
    const passingStudents = TeacherGradeBook.getPassingStudents();
    console.log(passingStudents);
    expect(passingStudents).to.be.equalTo([
      { average: 98.33333333333333 },
      { average: 75 },
      { average: 75 },
      { average: 85 }
    ]);
  });
  it("should return a failing list of students", () => {
    const failingStudents = TeacherGradeBook.getFailingStudents();

    expect(failingStudents).to.be.equalTo({
      failingStudents: [{ average: 38.333333333333336 }, { average: 30 }]
    });
  });
});
