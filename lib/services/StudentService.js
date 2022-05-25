class StudentService{

    static allStudents(students){
        return students;
    }

    static emailsStudentsWithCertification(students){
        const studentsByFilter = students.filter((student) => student.haveCertification === true);
        const emailsStudents = studentsByFilter.map((student) => student.email);
        return emailsStudents;
    }

    static studentsByCredits(students){
        const studentsWithCredits = students.filter((student) => student.credits > 500);
        return studentsWithCredits;
    }
}

module.exports = StudentService;