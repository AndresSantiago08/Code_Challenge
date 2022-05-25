const Reader = require("./../../lib/utils/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Pruebas unitarias de la clase StudentService", () => {
    
    test("Prueba del método 'allStudents'", () => {
        const studentsRead = Reader.readJsonFile("./test/utils/TestBase.json");
        const allStudents = StudentService.allStudents(studentsRead);
        expect(allStudents.length).toBe(5);
    });

    test("Prueba del método 'studentsHasCertification'", () => {
        const studentsRead = Reader.readJsonFile("./test/utils/TestBase.json");
        const studentsWithCertification = StudentService.studentsHasCertification(studentsRead);
        expect(studentsWithCertification.length).toBe(4);
    });

    test("Prueba del método 'studentsByCredits'", () => {
        const studentsRead = Reader.readJsonFile("./test/utils/TestBase.json");
        const studentsCredits = StudentService.studentsByCredits(studentsRead);
        expect(studentsCredits.length).toBe(3);
    });
});