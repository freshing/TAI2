import snackbarHandler from "@/layout/component/Notification/snackbarHandler";

function handleApiError(message) {
	if (message) {
		snackbarHandler.showError(message);
	} else {
		snackbarHandler.somethingWentWrong();
	}
}

function handleApiInfo(message) {
	snackbarHandler.showSuccess(message);
}

export {
	handleApiError,
	handleApiInfo
}