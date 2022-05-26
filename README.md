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

- Mensaje de bienvenida    
![image](https://user-images.githubusercontent.com/97483147/170563373-c25704ec-2415-4087-9be7-e6fe3111f8ce.png)

- Obtener la lista de todos los estudiantes, ingresar a http://localhost:3000/v1/students   
![image](https://user-images.githubusercontent.com/97483147/170563854-e10f000d-1004-40d6-b704-97c4953a90a9.png)

- Obtener un arreglo con los emails de los estudiantes que tienen o no certificación.   
  Entrando a http://localhost:3000/v1/students/emails/true se extraen los correos de los estudiantes con certificación.
  ![image](https://user-images.githubusercontent.com/97483147/170565245-3d49c4cd-2658-4280-af58-99a2914a0c08.png)
  A http://localhost:3000/v1/students/emails/false los que no tienen certificación.   
  ![image](https://user-images.githubusercontent.com/97483147/170565356-bba5953d-e032-4c40-aa26-256f39dfad19.png)

- Obtener la lista de estudiantes que tengan arriba de cierto numero de créditos, entrando a http://localhost:3000/v1/students/credits/:creditos donde ':creditos' se modifica por el numero por el que se desea filtrar.   Ejemplo:   
![image](https://user-images.githubusercontent.com/97483147/170566523-9fe0df38-a1df-4628-9e84-8d0362e86c43.png)

  


