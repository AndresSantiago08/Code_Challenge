# Code Challenge 

Diagrama del proyecto:
```mermaid
classDiagram
    JSON_File -- Class_Reader
    Class_Reader -- Class_StudentsController
    Class_Reader..Class_StudentService
    Class_StudentService -- Class_StudentsController
    Class_StudentsController<-->`EXPRESS Server (API)`
    JSON_File : visualpartners.json
    Class_Reader : +visualpartners.json
    Class_Reader : +readerJSONFile()
    Class_StudentService : +students
    Class_StudentService : +hasCertification
    Class_StudentService : +credits
    Class_StudentService : +allStudents()
    Class_StudentService : +emailsStudentsWithCertification()
    Class_StudentService : +studentsByCredits()
    Class_StudentsController : +hasCertificaction
    Class_StudentsController : +credits
    Class_StudentsController : +allStudents()
    Class_StudentsController : +emailsStudentsHasCertification()
    Class_StudentsController : +studentsByCredits()
    `EXPRESS Server (API)` : +hasCertification
    `EXPRESS Server (API)` : +credits
    `EXPRESS Server (API)` -- `localhost:3000/v1/students`
    `EXPRESS Server (API)` -- `localhost:3000/v1/students/emails/:hasCertification`
    `EXPRESS Server (API)` -- `localhost:3000/v1/students/credits/:numberCredits`
```
Uso de dependencias:

![npm](https://img.shields.io/npm/v/npm) - Gestor de paquetes  
![jest](https://img.shields.io/badge/jest-v28.1.0-blue) - Framework para pruebas para JavaScript   
![express](https://img.shields.io/badge/express-v4.18.1-blue) - Framework de desarrollo para Node.js  
![eslint](https://img.shields.io/badge/eslint-v8.16.0-blue) - Herramienta para cuidar la legibilidad del código

Uso de la API:

-Mensaje de bienvenida


