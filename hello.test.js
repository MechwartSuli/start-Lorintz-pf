const hello = require('./hello');
test('outputs the correct str', () => {
    expect(hello()).toBe('Hello World!');
});