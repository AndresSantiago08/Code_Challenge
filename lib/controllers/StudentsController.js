const Reader = require("./../utils/Reader");
const StudentService = require("./../services/StudentService");

class StudentsController{

    static allStudents(){
        const allStudents = Reader.readJsonFile("./visualpartners.json");
        return StudentService.allStudents(allStudents);
    }

    static emailsStudentsHasCertification(hasCertification){
        const allStudents = Reader.readJsonFile("./visualpartners.json");
        return StudentService.emailsStudentsWithCertification(allStudents, hasCertification);
    }

    static studentsByCredits(credits){
        const allStudents = Reader.readJsonFile("./visualpartners.json");
        return StudentService.studentsByCredits(allStudents, credits);
    }
}

module.exports = StudentsController;