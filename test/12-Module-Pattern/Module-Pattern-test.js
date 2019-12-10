const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-arrays"));

const {
  TeacherGradeBook
} = require("../../exercises/12-Module-Pattern/Module-Pattern");

describe("Module Pattern", () => {
  it("should return a list of passing students", () => {
    const passingStudents = TeacherGradeBook.getPassingStudents();

    expect(passingStudents).to.be.equalTo([
      { average: 98 },
      { average: 75 },
      { average: 75 },
      { average: 85 }
    ]);
  });
  it("should return a failing list of students", () => {
    const failingStudents = TeacherGradeBook.getFailingStudents();

    expect(failingStudents).to.be.equalTo({
      failingStudents: [{ average: 38 }, { average: 30 }]
    });
  });
});
