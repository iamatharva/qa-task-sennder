class cardPage {

  get cardTitleText() {
    return $('#add-card-modal')
  }

  get addTitle() {
    return $('//p[2]/input')
  }

  get addDescription() {
    return $('//p[2]/textarea')
  }

  get greenPlusButton() {
    return $('.btn-link.border-success.empty-card.text-success')
  }

  get addGreenCard() {
    return $('.btn.text-white.btn-success')
  }

  get greenCardTitle() {
    return $('.border-success.bg-success.px-2')
  }

  get greenCardDesc() {
    return $('.border-success.text-center > div.react-contextmenu-wrapper > div >p')
  }

  get redPlusButton() {
    return $('.btn-link.border-danger.empty-card.text-danger')
  }

  get addRedCard() {
    return $('.btn.text-white.btn-danger')
  }

  get redCardTitle() {
    return $('.border-danger.bg-danger.px-2')
  }

  get redCardDesc() {
    return $('.border-danger.text-center > div.react-contextmenu-wrapper > div >p')
  }

  get thumbsUpIcon() {
    return $('div:nth-child(1) > div > div > div > div > div:nth-child(3) > ul > li.ml-3')
  }

  get thumbsUpIconCount() {
    return $('.btn.btn-link.disabled.pointer-events.text-success.mb-0.p-0')
  }

  get deleteRedCardButton() {
    return $('div:nth-child(2) > div > div > div > div > div:nth-child(3) > ul > li:nth-child(2) > button')
  }

  get deletePopUpTitleText() {
    return $('.modal-title.h4')
  }

  get deletePopUpStmtText() {
    return $('.modal-body > p.mb-0')
  }

  get confirmDelete() {
    return $('.btn.btn-danger')
  }

  cardTitle() {
    return this.cardTitleText.getText();
  }

  invokeGreenPlusButton() {
    this.greenPlusButton.click();
  }

  createGreenCard(cardTitle, cardDescription) {
    this.addTitle.setValue(cardTitle);
    this.addDescription.setValue(cardDescription);
    this.addGreenCard.click();
  }

  greenCardTitleText() {
    return this.greenCardTitle.getText();
  }

  greenCardDescText() {
    return this.greenCardDesc.getText();
  }

  invokeRedPlusButton() {
    this.redPlusButton.click();
  }

  createRedCard(cardTitle, cardDescription) {
    this.addTitle.setValue(cardTitle);
    this.addDescription.setValue(cardDescription);
    this.addRedCard.click();
  }

  redCardTitleText() {
    return this.redCardTitle.getText();
  }

  redCardDescText() {
    return this.redCardDesc.getText();
  }

  invokeThumbsUpIcon() {
    this.thumbsUpIcon.click();
  }

  thumbsUpCount() {
    return this.thumbsUpIconCount.getText();
  }

  deleteRedCard() {
    this.deleteRedCardButton.click();
  }

  deletePopUpTitle() {
    return this.deletePopUpTitleText.getText();
  }

  deletePopUpStmt() {
    return this.deletePopUpStmtText.getText();
  }

  confirmDeleteButton() {
    this.confirmDelete.click();
    let elem = $('.card.m-1.no-highlighting.animated.border-danger.text-center')
    let successMessage = $('.toast-message')
    browser.waitUntil(() => elem.isExisting() == false);
    browser.waitUntil(() => successMessage.isExisting() == false);
  }

}
module.exports = new cardPage();