export default function ModalHandler(cb, data) {
    const modalData = {
        show: true,
        objective: data
    }
    cb(modalData);
}