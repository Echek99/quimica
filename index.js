const correct = () => {
    Swal.fire({
        icon: 'success',
        title: 'Correcto!',
        timer: 2500
    })
}
const incorrect = () => {
    Swal.fire({
        icon: 'error',
        title: 'Incorrecto',
        text: 'Mira el Paso a Paso',
        footer: '<a href="#slide2">Paso a Paso</a>',
        timer: 4000
    })
}