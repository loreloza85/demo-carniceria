// Datos de la clínica que usan index.html y reservar.html. Se cambian solo aquí.
window.CLINICA = {
  // Horario único (el de su web, 31/10/2026). Tramos [desde, hasta].
  horario: {
    lun: [["12:00", "20:30"]],
    mar: [["12:00", "20:30"]],
    mie: [["10:00", "18:30"]],
    jue: [["12:00", "20:30"]],
    vie: [["10:30", "14:00"]]
  },
  // DÍAS DE EJEMPLO: cambiar por los reales cuando la clínica los diga.
  doctores: [
    { id: "macarena", nombre: "Dra. Macarena Heranz", corto: "Dra. Heranz", trato: "la Dra. Heranz", foto: "img/eq_macarena.jpg",
      cargo: "Directora médica. Especialista en ortodoncia y odontopediatría.", dias: ["lun", "mie"] },
    { id: "lucia", nombre: "Dra. Lucía Estepa", corto: "Dra. Estepa", trato: "la Dra. Estepa", foto: "img/eq_lucia.jpg",
      cargo: "Estética dental, odontología conservadora y endodoncia.", dias: ["mar", "jue"] },
    { id: "pablo", nombre: "Dr. Pablo Marín", corto: "Dr. Marín", trato: "el Dr. Marín", foto: "img/eq_pablo.jpg",
      cargo: "Especialista en odontopediatría.", dias: ["lun", "jue"] },
    { id: "andrea", nombre: "Dra. Andrea Domínguez", corto: "Dra. Domínguez", trato: "la Dra. Domínguez", foto: "img/eq_andrea.jpg",
      cargo: "Cirugía bucal, implantología e implantoprótesis.", dias: ["mie", "vie"] },
    { id: "daniela", nombre: "Dra. Daniela Cristians", corto: "Dra. Cristians", trato: "la Dra. Cristians", foto: "img/eq_daniela.jpg",
      cargo: "Cirugía bucal, implantología y ortodoncia.", dias: ["mar", "vie"] }
  ],
  // Motivos de cita, con su duración en minutos y qué doctores los atienden.
  motivos: [
    { id: "revision", nombre: "Revisión de ortodoncia", dura: 30, doctores: ["macarena", "daniela"] },
    { id: "primera", nombre: "Primera visita infantil", dura: 45, doctores: ["macarena", "pablo"] },
    { id: "urgencia", nombre: "Urgencia", dura: 30, doctores: ["macarena", "lucia", "pablo", "andrea", "daniela"] },
    { id: "otros", nombre: "Estética u otros tratamientos", dura: 45, doctores: ["lucia", "andrea", "daniela"] }
  ]
};
