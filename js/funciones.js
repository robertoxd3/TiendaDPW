//Mostrar sidebar
document.getElementById('sidebar').addEventListener('click', () => {
    const slide = document.getElementById('slide-out');
    slide.classList.remove('side-close');
    slide.classList.add('side-open');
    slide.classList.add('fixed');
    const inicio = document.getElementById('navInicio');
    const carrito = document.getElementById('navCarrito');
    const nosotros = document.getElementById('navNosotros');
    const cerrar = document.getElementById('navSesion');
    const logo = document.getElementById('navLogo');
    addAnimation(inicio);
    addAnimation(carrito);
    addAnimation(nosotros);
    addAnimation(cerrar);
    addAnimation(logo);
});

//Esconder Sidebar
document.getElementById('closeNav').addEventListener('click', () => {
    const slide = document.getElementById('slide-out');
    slide.classList.add('side-close');
    slide.classList.remove('side-open');
    // Después de 0.5s se elimina la clase fixed
    setTimeout(() => {
        slide.classList.remove('fixed');
        const inicio = document.getElementById('navInicio');
        const carrito = document.getElementById('navCarrito');
        const nosotros = document.getElementById('navNosotros');
        const cerrar = document.getElementById('navSesion');
        const logo = document.getElementById('navLogo');
        removeAnimation(inicio);
        removeAnimation(carrito);
        removeAnimation(nosotros);
        removeAnimation(cerrar);
        removeAnimation(logo);
    }, 490);

});

function addAnimation(el) {
    el.classList.add('animated');
    el.classList.add('wow');
    el.classList.add('slideInLeft');
}

function removeAnimation(el) {
    el.classList.remove('animated');
    el.classList.remove('wow');
    el.classList.remove('slideInLeft');
}