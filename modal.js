/* js code */
'use strict';

const cancelBtn = document.querySelector('.button');
const actionEl = document.querySelector('.action');
const modalText = document.querySelector('.modal-text');
const btnContainer = document.querySelector('.btn-container');
const btnNo = document.querySelector('.btn-no');
const btnYes = document.querySelector('.btn-yes');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = () => {
	overlay.setAttribute('data-visible', true);
	modal.setAttribute('data-visible', true);
};

const closeModal = () => {
	overlay.setAttribute('data-visible', false);
	modal.setAttribute('data-visible', false);
};

const cancelSubscription = () => {
	btnContainer.setAttribute('data-visible', false);
	modalText.innerHTML = 'Subscription successfully cancelled!';
	cancelBtn.setAttribute('data-visible', false);
	actionEl.innerHTML = 'Cancelled';
};

cancelBtn.addEventListener('click', openModal);

btnNo.addEventListener('click', closeModal);

btnYes.addEventListener('click', () => {
	cancelSubscription();
	setTimeout(closeModal, 2000);
});

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('overlay')) {
		closeModal();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const visibility = modal.getAttribute('data-visible');
		if (visibility === 'true') {
			closeModal();
		}
	}
});
