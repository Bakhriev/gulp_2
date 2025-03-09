/* <div class="modal" data-modal>
		<button data-destroyer>X</button>
</div> */

function initModal(modalSelector, triggersSelector) {
	const modal = document.querySelector(modalSelector);
	const triggers = document.querySelectorAll(triggersSelector);
	let lastTrigger = null;

	if (!modal | !triggers.length) return;

	const destroyer = modal.querySelector("[data-destroyer]");

	function show() {
		modal.classList.add("show");

		focusTrap(modal);

		window.addEventListener("keydown", onPressEscape);
	}

	function hide() {
		modal.classList.remove("show");

		console.log(lastTrigger);

		lastTrigger.focus();
	}

	function onPressEscape(e) {
		if (e.key === "Escape") hide();

		window.removeEventListener("keydown", onPressEscape);
	}

	function init() {
		destroyer?.addEventListener("click", hide);

		modal.addEventListener("click", e => {
			if (e.target === modal) hide();
		});

		triggers.forEach(trigger => {
			trigger.addEventListener("click", () => {
				show();
				lastTrigger = trigger;
			});
		});
	}

	init();

	return { show, hide };
}

const focusTrap = parent => {
	if (!parent) return;

	const focusableElements = parent.querySelectorAll(
		"a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])"
	);

	if (focusableElements.length === 0) return;

	const firstElement = focusableElements[0];
	const lastElement = focusableElements[focusableElements.length - 1];

	// Фокусируем первый элемент при инициализации
	firstElement.focus();

	parent.addEventListener("keydown", e => {
		if (e.key === "Tab") {
			if (e.shiftKey) {
				// Shift + Tab
				if (document.activeElement === firstElement) {
					e.preventDefault();
					lastElement.focus();
				}
			} else {
				// Tab
				if (document.activeElement === lastElement) {
					e.preventDefault();
					firstElement.focus();
				}
			}
		}
	});
};

const modal = initModal("[data-modal]", ".modal-trigger");
