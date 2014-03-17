describe('Testing Select library methods', function() {
  describe('Testing Select #val()', function() {
    var formElem = document;

    it('Should output the value of the "main" p tag', function() {
      var main = new Select("p", "main").val();

      expect(main).to.equal("test");
    });

  });

  describe('Testing Select #el', function() {
    it('Should select the "main" element and grab innerHTML', function() {
      var main = new Select("p", "main").el

      expect(main.innerHTML).to.equal("Hello world! This is HTML5 Boilerplate.");
    });
   
    it('Should select the footer element', function() {
      var footer = new Select("footer")

      expect(typeof footer.el).to.equal("object");
    });

    it('Should select an object', function() {
      var footer = new Select({
        main: "main",
        footer: "footer"
      })

      expect(footer.el).to.not.equal(null);
    });
  });
});