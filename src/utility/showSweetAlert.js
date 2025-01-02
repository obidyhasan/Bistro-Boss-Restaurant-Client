import Swal from "sweetalert2";

export function showSweetAlert(iconType, message) {
  Swal.fire({
    position: "top-end",
    icon: iconType,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
