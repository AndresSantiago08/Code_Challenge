const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api welcome!"});
});

app.get("/v1/students", (request, response) => {
    const allStudents = StudentsController.allStudents();

    response.json(allStudents);
});

app.get("/v1/students/emails/:cerification", (request, response) => {
    const cerification = request.params.cerification;
    let boolean;

    if (cerification == "true"){
        boolean = true;
    }else if (cerification == "false"){
        boolean = false;
    }
    const emailsStudents = StudentsController.emailsStudentsHasCertification(boolean);

    response.json(emailsStudents);
});

app.get("/v1/students/credits/:numCredits", (request, response) => {
    const credits = request.params.numCredits;
    const studentsByCredits = StudentsController.studentsByCredits(credits);

    response.json(studentsByCredits);
});

app.listen(port, () => {
    console.log(`Code challenge API in localhost:${port}`);
});