describe('Testing Select library', function() {
  var formElem = document;
  var main = document.querySelector('main');
 
  it('Should select the "main" element', function() {
    expect(formElem).to.not.equal(null);
  });
 
  it('Check that the Main element exists', function() {
    expect(main.innerHTML).to.equal('Signup');
  });
});