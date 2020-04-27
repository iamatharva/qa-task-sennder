class boardPage {

  get newBoard() {
    return $('//*[@id="navbar"]/ul/li[1]/a')
  }

  get title() {
    return $('.font-weight-normal.mb-0')
  }

  get sessionNameInput() {
    return $('//*[@id="wrapper-inner"]/div/form/div[1]/div/div[1]/input');
  }

  get chooseOwner() {
    return $('//*[@id="wrapper-inner"]/div/form/div[1]/div/div[2]/select/option[2]');
  }

  get createBoardButton() {
    return $('.btn.btn-primary.shadow-sm.px-3');
  }

  get confirmationPopup() {
    return $('div.swal-title');
  }

  getTitle() {
    return this.title.getText();
  }

  newBoardInvoke() {
    this.newBoard.click();
  }

  getConfirmationText() {
    // $$('div.swal-modal').isDisplayed();
    return this.confirmationPopup.getText();
  }

  createBoard(sesessionName) {
    this.sessionNameInput.setValue(sesessionName);
    this.chooseOwner.click();
    this.createBoardButton.click();
  }
}
module.exports = new boardPage();