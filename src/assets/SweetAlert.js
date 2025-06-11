import Swal from 'sweetalert2'

export const Alerta = async () => {
  const result = await Swal.fire({
    title: "Confirmar la compra?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Comprar"
});

  if (result.isConfirmed) {
    await Swal.fire({
      title: "¡Compra Realizada!",
      text: "Muchas gracias por tu compra.",
      icon: "success"
    });
    return true;
  }

  return false;

}

export const AlertaAgregado = (producto) => {
  Swal.fire({
    title: `"${producto.nombre}" agregado al carrito`,
    icon: "success",
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });
};

export const AlertaEliminar = async () => {
  const result = await Swal.fire({
    title: "¿Vaciar carrito?",
    text: "Se eliminarán todos los productos del carrito.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, vaciar"
  });

  if (result.isConfirmed) {
    await Swal.fire({
      title: "¡Carrito vaciado!",
      text: "Tu carrito ahora está vacío.",
      icon: "success"
    });
    return true;
  }

  return false;
};
