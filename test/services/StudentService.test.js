const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Pruebas unitarias de la clase StudentService", () => {
    
    test("Prueba del método 'allStudents'", () => {
        const studentsRead = Reader.readJsonFile("./test/utils/TestBase.json");
        const allStudents = StudentService.allStudents(studentsRead);
        expect(allStudents.length).toBe(5);
    });

    test("Prueba del método 'emailsStudentsWithCertification'", () => {
        const studentsRead = Reader.readJsonFile("./test/utils/TestBase.json");
        const emailsStudents = StudentService.emailsStudentsWithCertification(studentsRead, true);
        expect(emailsStudents).toContain("Todd@visualpartnership.xyz");
        expect(emailsStudents).toContain("Howell@visualpartnership.xyz");
    });

    test("Prueba del método 'studentsByCredits'", () => {
        const studentsRead = Reader.readJsonFile("./test/utils/TestBase.json");
        const studentsCredits = StudentService.studentsByCredits(studentsRead, 500);
        expect(studentsCredits.length).toBe(3);
    });
});