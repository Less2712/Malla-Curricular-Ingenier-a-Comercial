// script.js
fetch("malla_plan11.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("malla");

    data.forEach(sem => {
      const semDiv = document.createElement("div");
      semDiv.className = "semestre";
      semDiv.innerHTML = `<h2>Semestre ${sem.semestre}</h2>`;

      sem.ramos.forEach(ramo => {
        const ramoDiv = document.createElement("div");
        ramoDiv.className = "ramo";
        ramoDiv.style.borderLeft = getColorByArea(ramo.area);
        ramoDiv.innerHTML = `
          <strong>${ramo.nombre}</strong><br>
          <em>${ramo.area}</em><br>
          Créditos: ${ramo.creditos}<br>
          ${ramo.prerrequisitos.length > 0 ? `Prerrequisitos: ${ramo.prerrequisitos.join(", ")}` : ""}
        `;
        semDiv.appendChild(ramoDiv);
      });

      container.appendChild(semDiv);
    });
  });

function getColorByArea(area) {
  const colors = {
    "Estrategia y Gestión Empresarial": "5px solid #7e57c2",
    "Innovación y Emprendimiento": "5px solid #9575cd",
    "Análisis de Datos": "5px solid #b39ddb",
    "Economía y Finanzas": "5px solid #d1c4e9",
    "Formación General": "5px solid #ede7f6",
    "Electivos": "5px solid #ce93d8"
  };
  return colors[area] || "5px solid #aaa";
}

