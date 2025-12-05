function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "ojo.png"; // Cambia a la imagen de ojo cerrado
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "ojo2.png"; // Cambia de nuevo a la imagen de ojo abierto
    }
}

// Datos de usuarios y calificaciones combinados
const studentsData = {
    //1RO PRIMARIA
    "YAMILE": { //Usuario
        password: "15505305",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "92", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "FALTA PRESENTAR Y CALIFICAR AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "HEYDAN KALEB": { //Usuario
        password: "17614196",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "52", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO JUEVES 28/08/25" },
            { trimestre: "3er Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "MARISOL": { //Usuario
        password: "15325697",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "80", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO JUEVES 28/08/25" },
            { trimestre: "3er Trim.", calificacion: "76", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "DANIEL LUIS": { //Usuario
        password: "15735347",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "FALTA PRESENTAR Y CALIFICAR AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "CARMEN VIRGINIA": { //Usuario
        password: "16372545",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "66", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO JUEVES 28/08/25" },
            { trimestre: "3er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "MATIAS CALEB": { //Usuario
        password: "15538197",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: "FALTA AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "98", estado: "", observacion: "" },
        ],
    },
    "YESSENIA SARAHY": { //Usuario
        password: "15574544",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "60", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "83", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/08/25" },
            { trimestre: "3er Trim.", calificacion: "82", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "CAMILA": { //Usuario
        password: "16217781",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "72", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "58", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/08/25" },
            { trimestre: "3er Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "MARIAN VALERIA": { //Usuario
        password: "1234567",  // Contraseña
        curso: "1ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "", estado: "", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/08/25" },
            { trimestre: "3er Trim.", calificacion: "74", estado: "APROBADO(A)", observacion: "" },
        ],
    },
//2DO DE PRIMARIA
    "FRANCO GAEL": { //Usuario
        password: "15383976",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: "FALTA AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SEBASTIAN ZABDIEL": { //Usuario
        password: "15098838",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "92", estado: "APROBADO(A)", observacion: "FALTA AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "DIEGO": { //Usuario
        password: "15200288",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "79", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "79", estado: "APROBADO(A)", observacion: "FALTA AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "80", estado: "", observacion: "" },
        ],
    },
    "EDYLSON": { //Usuario
        password: "16916466",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "67", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "54", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "52", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SHIOMARA": { //Usuario
        password: "16789062",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "54", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "68", estado: "APROBADO(A)", observacion: "" },
        ],
    },  
    "DANITS JHANE": { //Usuario
        password: "16782741",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "79", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "82", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "IKER ASAD": { //Usuario
        password: "15099063",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "85", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "APROBADO(A", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "85", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "JUAN MATEO": { //Usuario
        password: "16787132",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "72", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 29/08/25" },
            { trimestre: "2do Trim.", calificacion: "57", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "LEILA SCARLETT": { //Usuario
        password: "15310814",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "95", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "NATALY": { //Usuario
        password: "17389914",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "60", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "LUZ EVELIN": { //Usuario
        password: "17310778",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "69", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "66", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SHIRLEY GABRIELA": { //Usuario
        password: "16733005",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "YARELY LUZ": { //Usuario
        password: "15041299",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "82", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "82", estado: "APROBADO(A)", observacion: "FALTA AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "76", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "DANIELA": { //Usuario
        password: "15041299",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "ASTRID ZOE": { //Usuario
        password: "15171572",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "71", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "65", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "BIANCA MAYTE": { //Usuario
        password: "16786439",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "95", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: "FALTA AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "92", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "DIEGO ALEXANDER": { //Usuario
        password: "15530203",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "60", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "EMILY KEYLY": { //Usuario
        password: "15275310",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "CANDY": { //Usuario
        password: "1234567",  // Contraseña
        curso: "2do de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "", estado: "", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "69", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 29/08/25" },
            { trimestre: "3er Trim.", calificacion: "73", estado: "APROBADO(A)", observacion: "" },
        ],
    },
//TERCERO DE PRIMARIA
    "THAIS DANIELA": { //Usuario
        password: "17259685",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "81", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: "FALTA AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SHARELA": { //Usuario
        password: "16297349",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 28/08/25" },
            { trimestre: "3er Trim.", calificacion: "76", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ABNER ZENON": { //Usuario
        password: "16653592",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: "FALTA AUTOEVALUACIÓN" },
            { trimestre: "3er Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "NADIA WARA": { //Usuario
        password: "16689391",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "87", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "MICAELA": { //Usuario
        password: "16972434",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "DANNA AVRIL": { //Usuario
        password: "17414259",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SAMI VALERIA": { //Usuario
        password: "17118554",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "57", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "EUSEBIA": { //Usuario
        password: "16959941",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "58", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "63", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "84", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "HANS ANTHONY": { //Usuario
        password: "15790869",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "92", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "RUZENA ESDENKA": { //Usuario
        password: "15027286",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "64", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "LUZ CAMILA": { //Usuario
        password: "17310758",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "DANY JAIL": { //Usuario
        password: "17272587",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "64", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "60", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "65", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "YUAN EDUARDO": { //Usuario
        password: "15680683",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "87", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "80", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SHEYLA LUCIANA": { //Usuario
        password: "15960112",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ISAAC MAYER": { //Usuario
        password: "16351233",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "JOSE ANTONY": { //Usuario
        password: "16885668",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ISMAEL": { //Usuario
        password: "16911786",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "58", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "83", estado: "APROBADO(A)", observacion: "" },
        ],

    },
    "ADRIAN": { //Usuario
        password: "1234567",  // Contraseña
        curso: "3ro de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "", estado: "", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: "" },
        ],

    },
    //CUARTO DE PRIMARIA
    "GUSTAVO ANTHONY": { //Usuario
        password: "16176647",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ARIANA ALESSANDRA": { //Usuario
        password: "14427120",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "99", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ANDERSON VLADIMIR": { //Usuario
        password: "15605576",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SIMON SANTIAGO": { //Usuario
        password: "17265383",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SAHARA SHAYA": { //Usuario
        password: "17118549",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "69", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "YASIT MILAN": { //Usuario
        password: "16160305",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "71", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "95", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "87", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "CARLOS GAEL": { //Usuario
        password: "15642783",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "35", estado: "REPROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "GAEL OMAR": { //Usuario
        password: "14480516",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "81", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "68", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "KENDRA GUITSEL": { //Usuario
        password: "16363584",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "82", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "LILIANA ITCEL": { //Usuario
        password: "16324027",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "52", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "83", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "DAMIAN NOEL": { //Usuario
        password: "15141072",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "81", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "85", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "77", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "JOHAN ALDAIR": { //Usuario
        password: "16786700",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "BEYMAR ANGEL": { //Usuario
        password: "17173764",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "CORALAIN AYDEE": { //Usuario
        password: "14802040",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "87", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "78", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "DANIELA.": { //Usuario
        password: "16217837",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "64", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "JACIEL": { //Usuario
        password: "16700337",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "64", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "86", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "NEYMAR": { //Usuario
        password: "15204952",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "89", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "81", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "84", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "URIEL": { //Usuario
        password: "1234567",  // Contraseña
        curso: "4to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "", estado: "", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: "" },
        ],
    },
//QUINTO DE PRIMARIA
    "SHARAI": { //Usuario
        password: "16297336",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "76", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "YADIEL": { //Usuario
        password: "15645677",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "99", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "100", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "99", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "JHOSTIN": { //Usuario
        password: "16789053",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "66", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "MAIRYN ZULAMI": { //Usuario
        password: "17451940",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "87", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ANYHELO MATEO": { //Usuario
        password: "17414278",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "53", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "MARY LUZ": { //Usuario
        password: "16789847",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "69", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "MAXIMILIANO": { //Usuario
        password: "16883745",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "65", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "VIANKA KAREN": { //Usuario
        password: "15306099",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "57", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ALEJANDRO": { //Usuario
        password: "14047775",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "92", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ISABELLA ANABEL": { //Usuario
        password: "14304209",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "77", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ANDREI GEMIO": { //Usuario
        password: "14801125",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "53", estado: "REPROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "76", estado: "", observacion: "" },
        ],
    },
    "HAROL JHONNATAN": { //Usuario
        password: "15333051",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "100", estado: "", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "95", estado: "", observacion: "" },
        ],
    },
    "SERGIO ANDREW": { //Usuario
        password: "15960084",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ALDAIR WALTER": { //Usuario
        password: "16885708",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "57", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "THIAGO ZHAIR": { //Usuario
        password: "16166926",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "82", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "61", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "NOEMI YESICA": { //Usuario
        password: "16220469",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "55", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "CAMILA SHELLY": { //Usuario
        password: "17184594",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "95", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "MAGALI": { //Usuario
        password: "16960822",  // Contraseña
        curso: "5to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "62", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO LUNES 28/04/25" },
            { trimestre: "2do Trim.", calificacion: "59", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "80", estado: "APROBADO(A)", observacion: "" },
        ],
    },
//SEXTO DE PRIMARIA
    "MARIA GUADALUPE": { //Usuario
        password: "16557920",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "JORGE": { //Usuario
        password: "17260874",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "52", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "79", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "BEYMAR": { //Usuario
        password: "16916432",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "56", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "90", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "66", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "LEONARDO JOAQUIN": { //Usuario
        password: "13344413",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "JOSE": { //Usuario
        password: "16883286",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "63", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "93", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "LEONOR LUDWIKA": { //Usuario
        password: "16198986",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "CHARLY DANIEL": { //Usuario
        password: "17465602",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "83", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "", estado: "", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "RAUMYR OMAR": { //Usuario
        password: "13551461",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "94", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "SANDRA ALEXIA": { //Usuario
        password: "15224708",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "67", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "84", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "81", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "ARELIZ": { //Usuario
        password: "15215312",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "51", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "", estado: "", observacion: "" },
        ],
    },
    "YERALDIN ROCIO": { //Usuario
        password: "16699943",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "70", estado: "APROBADO(A)", observacion: "PRESENTAR LAS TAREAS QUE NO REALIZO VIERNES 02/05/25" },
            { trimestre: "2do Trim.", calificacion: "95", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "75", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "DANIELA AILYN": { //Usuario
        password: "14915429",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "98", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "99", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "100", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "JENNY LIZETH": { //Usuario
        password: "16326100",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "92", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "97", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "95", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "JASMIN ABIGAIL": { //Usuario
        password: "1234567",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "", estado: "", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "88", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "96", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    "LIMBERT": { //Usuario
        password: "1234567",  // Contraseña
        curso: "6to de Primaria", 
        calificaciones: [
            { trimestre: "1er Trim.", calificacion: "", estado: "", observacion: "" },
            { trimestre: "2do Trim.", calificacion: "60", estado: "APROBADO(A)", observacion: "" },
            { trimestre: "3er Trim.", calificacion: "91", estado: "APROBADO(A)", observacion: "" },
        ],
    },
    
    

    // Agregar más estudiantes aquí siguiendo el mismo formato
};

// Función para calcular el promedio anual sin decimales
function calculateAnnualAverage(grades) {
    let total = 0;
    let count = 0;

    // Sumamos las calificaciones de los tres trimestres
    grades.forEach(grade => {
        if (grade.calificacion !== "") {
            // Convertimos la calificación a número
            const calificacion = parseFloat(grade.calificacion);
            if (!isNaN(calificacion)) {
                total += calificacion;
                count++;
            }
        }
    });

    // Calculamos el promedio solo si hay al menos una calificación
    if (count > 0) {
        const average = total / count;
        // Redondeamos el promedio a un número entero
        const roundedAverage = Math.round(average);
        // Asignamos el promedio anual y el estado
        const averageGrade = (roundedAverage >= 51) ? "APROBADO(A)" : "REPROBADO(A)";
        return { average: roundedAverage, status: averageGrade };
    }

    return null; // Si no tiene ninguna calificación, no podemos calcular el promedio
}

// Función de inicio de sesión
function login(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si el usuario existe y la contraseña es correcta
    if (studentsData[username] && studentsData[username].password === password) {
        // Guardar el usuario en el almacenamiento local
        localStorage.setItem("loggedUser", username);
        // Redireccionar a la página de plataforma
        window.location.href = "plataforma.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}

// Función para cargar las calificaciones del estudiante
function loadGrades() {
    const username = localStorage.getItem("loggedUser");
    if (!username || !studentsData[username]) {
        alert("No hay datos de usuario. Redirigiendo a inicio de sesión.");
        window.location.href = "index.html";
        return;
    }

    // Mostrar nombre del estudiante
    document.getElementById("student-name").textContent = username;

    // Mostrar el curso del estudiante
    const student = studentsData[username];
    document.getElementById("course-name").textContent = student.curso;

    // Obtener la tabla y llenar las calificaciones
    const gradesTable = document.getElementById("grades-table");
    student.calificaciones.forEach(grade => {
        const row = document.createElement("tr");
        row.innerHTML = `  
            <td>${grade.trimestre}</td>
            <td>${grade.calificacion}</td>
            <td>${grade.estado}</td>
            <td>${grade.observacion}</td>
        `;
        gradesTable.appendChild(row);
    });

    // Calcular el promedio anual y asignar el estado
    const averageData = calculateAnnualAverage(student.calificaciones);
    if (averageData) {
        const averageRow = document.createElement("tr");
        averageRow.classList.add("promedio-anual"); // Clase para estilo especial
        averageRow.innerHTML = `
            <td>Promedio Anual</td>
            <td>${averageData.average}</td>
            <td>${averageData.status}</td>
            <td></td>
        `;
        gradesTable.appendChild(averageRow);
    }
}


// Función para descargar las notas
function downloadGrades() {
    const username = localStorage.getItem("loggedUser");
    if (!username) {
        alert("No se encontró el usuario en sesión.");
        return;
    }

    const notesFilePath = `notas/${username}.pdf`; // Ruta donde guardaste los PDFs

    const link = document.createElement('a');
    link.href = notesFilePath;
    link.download = `${username}_notas.pdf`;
    document.body.appendChild(link); // Necesario para Firefox
    link.click();
    document.body.removeChild(link);
}

// Función para cerrar sesión location.replace()	El historial no permite volver a plataforma
function logout() {
    // Elimina la sesión
    localStorage.removeItem("loggedUser");

    // Redirige reemplazando la historia (impide volver con "Atrás")
    location.replace("index.html");
}

// Llama a loadGrades solo si estamos en plataforma.html
if (window.location.pathname.includes("plataforma.html")) {
    loadGrades();
}

//PARA PIBLICIDAD
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".publicidad img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    let index = 0;
    let interval = setInterval(showNext, 4000); // cambio automático cada 4s
  
    function showSlide(n) {
      slides.forEach((img, i) => {
        img.classList.remove("active");
        if (i === n) img.classList.add("active");
      });
    }
  
    function showNext() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }
  
    function showPrev() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    }
  
    nextBtn.addEventListener("click", () => {
      showNext();
      resetTimer();
    });
  
    prevBtn.addEventListener("click", () => {
      showPrev();
      resetTimer();
    });
  
    function resetTimer() {
      clearInterval(interval);
      interval = setInterval(showNext, 4000);
    }
  });
  
