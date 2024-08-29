describe('Проверка контактной информации на сайте Byndyusoft', () => {
  it('Проверка ссылки на телеграмм', () => {
      cy.visit('https://byndyusoft.com/about');
      cy.contains('Заказать презентацию').click();
      cy.contains('в Телеграм').click();
      cy.get('a[href="http://t.me/alexanderbyndyu"]').should('have.attr', 'href', 'http://t.me/alexanderbyndyu');
  });
});
