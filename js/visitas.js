document.addEventListener('DOMContentLoaded', () => {
    let visitasAnterior = localStorage.getItem('visitas');
    if (visitasAnterior == null) {
        localStorage.setItem('visitas', 1)
    } else {
        localStorage.setItem('visitas', parseInt(visitasAnterior) + 1);

    }

    let visitas = localStorage.getItem('visitas');
    document.getElementById('idVisitas').innerHTML = ' ' + visitas;
});