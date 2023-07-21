describe("Login Page", function() {
    it("should allow users to login with valid credentials", function() {
      //Arrange
      var username = "johndoe";
      var password = "password123";
  
      //Act
      element(by.id("username")).clear();
      element(by.id("username")).sendKeys(username);
      element(by.id("password")).clear();
      element(by.id("password")).sendKeys(password);
      element(by.id("loginButton")).click();
  
      //Assert
      expect(element(by.id("appTitle")).isDisplayed()).toBe(true);
    });
  
    it("should not allow users to login with invalid credentials", function() {
      //Arrange
      var username = "johndoe";
      var password = "wrongpassword";
  
      //Act
      element(by.id("username")).clear();
      element(by.id("username")).sendKeys(username);
      element(by.id("password")).clear();
      element(by.id("password")).sendKeys(password);
      element(by.id("loginButton")).click();
  
      //Assert
      expect(element(by.id("errorMsg")).isDisplayed()).toBe(true);
    });
  });