class LoginPage {
	open() {
		browser.url('/auth/login/');
	}

	get usernameInput() {
		return $('//*[@id="root"]/div/form/div/div/div/div/div[1]/div/input');
	}

	get passwordInput() {
		return $('//*[@id="root"]/div/form/div/div/div/div/div[2]/div/input');
	}

	get loginButton() {
		return $('.btn.btn-primary.px-4');
	}

	login(username, password) {
		this.usernameInput.setValue(username);
		this.passwordInput.setValue(password);
		this.loginButton.click();
	}
}
module.exports = new LoginPage();