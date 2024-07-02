document.addEventListener('DOMContentLoaded', (event) => {
    function setupModal(openBtnId, closeBtnSelector, modalSelector) {
        const openBtn = document.getElementById(openBtnId);
        const closeBtn = document.querySelector(closeBtnSelector);
        const modal = document.querySelector(modalSelector);

        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex'; // Display the modal
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'; // Hide the modal
        });
    }

    setupModal('openModalBtn', '#closeModalBtn', '#modal');
    setupModal('openModalBtntwo', '.close-modal2 a', '.modal-body2');
    setupModal('openModalBtnThree', '.close-modal3 a', '.modal-body3'); // Add setup for modal-body3
});
