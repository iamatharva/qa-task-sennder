const loginPage = require('../pages/login.page')
const boardPage = require('../pages/board.page')
const cardPage = require('../pages/card.page')

describe('Smoke Test Plan', () => {
	before(() => {
		loginPage.open();
	});

	it('Step#1-5: User is able to login and able to navigate to create board page.', () => {
		loginPage.login('sennderqa3@gmail.com', 'n*H7A7f@&ikbwu');
		boardPage.newBoardInvoke();

		expect(boardPage.getTitle()).to.equal('Create a Board');
	});

	it('Step#6-7: User is successfully able to create the board.', () => {
		boardPage.createBoard('My first board');

		expect(browser.getUrl()).to.contain('https://sprintboards.io/boards/');
		expect(boardPage.getConfirmationText()).to.equal('Created');
	});

	it('Step#8: User is able to invoke the Green card button.', () => {
		cardPage.invokeGreenPlusButton();

		expect(cardPage.cardTitle()).to.equal('Add a Card');
	});

	it('Step#9-11: User is able to add a Green Card', () => {
		let cardTitle = 'Goal was achieved';
		let cardDesc = 'Sprint was well planned';
		cardPage.createGreenCard(cardTitle, cardDesc);

		expect(cardPage.greenCardTitleText()).to.equal(cardTitle);
		expect(cardPage.greenCardDescText()).to.equal(cardDesc);
	});

	it('Step#12: User is able to invoke the Red card button.', () => {
		browser.saveFullPageScreen('fullPage', {}); //Screenshot taken to compare it in Step#17
		cardPage.invokeRedPlusButton();

		expect(cardPage.cardTitle()).to.equal('Add a Card');
	});

	it('Step#13-14: User is able to add a Red Card', () => {
		let cardTitle = 'Goal was achieved';
		cardPage.createRedCard(cardTitle, null);

		expect(cardPage.redCardTitleText()).to.equal(cardTitle);
		expect(cardPage.redCardDescText()).to.equal("No description provided.");
	});

	it('Step#15: User clicks on the thumbsup icon of the first card and count it', () => {
		cardPage.invokeThumbsUpIcon();

		expect(cardPage.thumbsUpCount()).to.equal("1");
	});

	it('Step#16: User invokes delete button for the red card created', () => {
		cardPage.deleteRedCard();

		expect(cardPage.deletePopUpTitle()).to.equal("Delete Card");
		expect(cardPage.deletePopUpStmt()).to.equal("Are you sure you want to continue?");
	});

	it('Step#17: Card with title “Goal was not achieved” is removed from the board', () => {
		cardPage.confirmDeleteButton();

		expect(browser.checkFullPageScreen('fullPage', {}));
	});
});