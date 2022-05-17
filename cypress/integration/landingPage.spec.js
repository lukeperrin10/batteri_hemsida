describe("Visitor is able to see and navigate landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("desktop view", () => {
    it("should show the navigation bar", () => {
      cy.get("[data-cy=navbar]").within(() => {
        cy.get("[data-cy=navbar-logo]").should("be.visible");
        cy.get("[navbar-menu-item-1]")
          .should("be.visible")
          .should("contain", "Kurser");
        cy.get("[navbar-menu-item-2]")
          .should("be.visible")
          .should("contain", "Event");
        cy.get("[navbar-menu-item-3]")
          .should("be.visible")
          .should("contain", "Kontakt");
        cy.get("[navbar-menu-item-4]")
          .should("be.visible")
          .should("contain", "Hitta hit");
      });
    });
  });

  describe("mobile view", () => {
    it("should show hamburger menu", () => {
      cy.viewport("iphone-x");
      cy.get("[data-cy=navbar-hamburger]").should("be.visible").click();
      cy.get("[navbar-menu-item-1]")
        .should("be.visible")
        .should("contain", "Kurser");
      cy.get("[navbar-menu-item-2]")
        .should("be.visible")
        .should("contain", "Event");
      cy.get("[navbar-menu-item-3]")
        .should("be.visible")
        .should("contain", "Kontakt");
      cy.get("[navbar-menu-item-4]")
        .should("be.visible")
        .should("contain", "Hitta hit");
    });
  });
});
