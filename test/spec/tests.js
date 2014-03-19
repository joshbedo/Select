describe('Testing Select library methods', function() {
  describe('Testing Select #val()', function() {

    it('Should output the value of the "main" p tag', function() {
      var main = new Select("p", "main").val();

      expect(main).to.equal("test");
    });

    it('Should grab element and return the updated value', function() {
      var main = new Select("p", "main").val("boom");

      expect(main.val).to.equal("boom")
    });

    it('Should grab parent object and values', function() {
      var product = new Select({
        title: ".title",
        image: ".image",
        buy: ".btn-purchase"
      }, ".product");


      expect(product.title.val()).to.not.equal(null)

      product.title.val("New Product Name");
      expect(product.title.val).to.equal("New Product Name");
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

    it('should select a parent element and change attributes', function() {
      var image = new Select({
        title: ".title",
        titleImage: ".image",
        submitButton: ".btn-submit"
      }, ".product");

      image.title = "test";
      image.titleImage.src = "fake_image";

      expect(typeof image).to.be.equal("object");
      expect(image.title).to.be.equal("test");
      expect(image.titleImage.src).to.not.equal(null);
    });

  });
});