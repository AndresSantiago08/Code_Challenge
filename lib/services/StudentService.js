class StudentService{

    static allStudents(students){
        return students;
    }

    static studentsHasCertification(students){
        const studentsByFilter = students.filter((student) => student.haveCertification === true);
        return studentsByFilter;
    }

    static studentsByCredits(students){
        const studentsWithCredits = students.filter((student) => student.credits > 500);
        return studentsWithCredits;
    }
}

module.exports = StudentService;