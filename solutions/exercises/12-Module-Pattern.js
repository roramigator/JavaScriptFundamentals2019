/*** 
 As a teacher, I would like to be able to be see which of my students are passing or failing, 
  so I can have a better understanding on how my students are preforming.
 *  Complete the Teacher Grade book by a creating three methods and using the module pattern:

 *  1 Create the first method TeacherGradeBook.getFailingStudents returns an array of objects of all the students that have failed the course.
 *  //TeacherGradeBook.getFailingStudents() --> [{FirstName:'Billy',lastName:'Joel',grades:[20,30,40,50]},{FirstName:'Luke',lastName:'Skywalker', grades:[0,0,0,100]}]
 *
 *  2)Create second method TeachersGradeBook.getPassingStudents() which will return an array of objects of all the students that have passed.
 *   i.e TeachersGradeBook.getPassingStudents() --> [{FirstName:'jane',lastName:'doe',grades:[100,100,100,100]},{FirstName:'James',lastName:'Bond', grades:[90,90,90,90]}]
 *
 *  3)Create third method is used to debug and will return a list of all the students.Useful for debugging purposes
 *   TeachersGradeBook.debug() --> list of all students
 *
 *
 *
 *
 */

const { studentGrades } = require("../12-Module-Pattern/students");

const TeacherGradeBook = (() => {
  const gradeToPass = 65;

  const averages = studentGrades.map(student => {
    return {
      average:
        student.grades.reduce((acc, grade) => {
          return acc + grade;
        }, 0) / student.grades.length
    };
  });

  return {
    getFailingStudents: () => {
      return averages.filter(student => student.average < gradeToPass);
    },
    getPassingStudents: () => {
      return averages.filter(student => student.average > gradeToPass);
    }
  };
})();

module.exports = {
  TeacherGradeBook
};
