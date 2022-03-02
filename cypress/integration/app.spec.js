describe("navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/");
    cy.get('a[href*="kurser"]').click();
    cy.url().should("include", "/kurser");
    cy.get("h1").should("contain", "About");
  });
});
