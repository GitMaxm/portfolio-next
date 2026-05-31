import Swal from 'sweetalert2';

export const swalConfirm = (title, text = '', confirmText = 'Да') => {
  return Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    reverseButtons: true,
    confirmButtonText: confirmText,
    cancelButtonText: 'Отмена',
    confirmButtonColor: '#28a745',
    cancelButtonColor: '#d33',
  });
};

export const swalSaveConfirm = (title = 'Сохранить?') => {
  return Swal.fire({
    title,
    showCancelButton: true,
    confirmButtonText: "Сохранить",
    cancelButtonText: 'Отмена',
    confirmButtonColor: '#28a745',
  });
};

export const swalSuccess = (title = 'Успешно!', text = '') => {
  return Swal.fire({
    title,
    text,
    icon: 'success',
    timer: 1500,
    showConfirmButton: false,
  });
};

export const swalError = (title = 'Ошибка', text = 'Что-то пошло не так') => {
  return Swal.fire({
    title,
    text,
    icon: 'error',
    confirmButtonColor: '#d33',
  });
};

export default Swal;