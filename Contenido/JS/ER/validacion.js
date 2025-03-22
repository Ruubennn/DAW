document.getElementById("miFormulario").addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
  
    const erNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,30}$/;
    const erTelefono = /^(\+34)?\d{9}$/;
  
    if (!erNombre.test(nombre)) {
      alert("Nombre no válido");
      e.preventDefault();
    }
  
    if (!erTelefono.test(telefono)) {
      alert("Teléfono no válido");
      e.preventDefault();
    }
  });
  