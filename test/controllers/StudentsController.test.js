const StudentsController = require("./../../lib/controllers/StudentsController");

describe("Purebas unitarias de la clase 'StudentsController'", () => {
    
    test("Prueba del método 'allStudents'", () => {
        const allStudents = StudentsController.allStudents();
        expect(allStudents.length).toBe(51);
        expect(allStudents[allStudents.length - 1].id).toBe("6264d5d82eb0f4917bd0d332");
    });

    test("Prueba del método 'emailsStudents'", () => {
        const emailsStudents = StudentsController.emailsStudentsHasCertification(true);
        expect(emailsStudents).toContain("Hays@visualpartnership.xyz");
        expect(emailsStudents).toContain("Jewell@visualpartnership.xyz");
        expect(emailsStudents).toContain("Shields@visualpartnership.xyz");
        expect(emailsStudents).not.toContain("Sonia@visualpartnership.xyz");
        expect(emailsStudents).not.toContain("Kerri@visualpartnership.xyz");
    });

    test("Prueba del método 'studentsByCredits'", () => {
        const studentsByCredits = StudentsController.studentsByCredits(900);
        expect(studentsByCredits).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    "id": "6264d5d8dd1a0be4e249c662",
                    "name": "Phillips",
                    "email": "Camacho@visualpartnership.xyz",
                    "credits": 973,
                    "enrollments": [
                        "Visual Thinking Intermedio"
                    ],
                    "previousCourses": 8,
                    "haveCertification": false
                })
            ])
        );
        expect(studentsByCredits).not.toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    "id": "6264d5d8dd01ab97ddedbba5",
                    "name": "Taylor",
                    "email": "Haynes@visualpartnership.xyz",
                    "credits": 652,
                    "enrollments": [
                        "Visual Thinking Avanzado"
                    ],
                    "previousCourses": 5,
                    "haveCertification": true
                })
            ])
        );
    });
});