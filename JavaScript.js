document.getElementById("botonDespliegue").addEventListener('change', function() {
    const ruta = this.value;
    if (ruta) {
        window.location.href = ruta;
    }
});