export function testFunction() {
  if (document.readyState === 'complete') {
    console.log('done loading');
  }
}
testFunction();
