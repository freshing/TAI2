import snackbarNotification from "./snackbarNotification"

function showError(message) {
	snackbarNotification.message = message;
	snackbarNotification.isVisable = true;
	snackbarNotification.color = "error";
	snackbarNotification.type = "error";
}

function showSuccess(message) {
	snackbarNotification.message = message;
	snackbarNotification.isVisable = true;
	snackbarNotification.color = "success";
	snackbarNotification.type = "success";
}

function somethingWentWrong() {
	snackbarNotification.message = "Coś poszło nie tak. Skontaktuj się z administratorem.";
	snackbarNotification.isVisable = true;
	snackbarNotification.color = "success";
	snackbarNotification.type = "success";
}

export default {
	showError,
	showSuccess,
	somethingWentWrong
};