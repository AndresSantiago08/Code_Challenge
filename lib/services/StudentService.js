class StudentService{

    static allStudents(students){
        return students;
    }

    static emailsStudentsWithCertification(students, haveCertification){
        const studentsByFilter = students.filter((student) => student.haveCertification === haveCertification);
        const emailsStudents = studentsByFilter.map((student) => student.email);
        return emailsStudents;
    }

    static studentsByCredits(students, credits){
        const studentsWithCredits = students.filter((student) => student.credits > credits);
        return studentsWithCredits;
    }
}

module.exports = StudentService;