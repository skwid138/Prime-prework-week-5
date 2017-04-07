var logSpy;
var alertSpy;

beforeEach(function() {
  logSpy = sinon.spy(window.console, "log");
});

afterEach(function() {
  logSpy.restore();
});
