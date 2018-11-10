export function testFunction () {
  console.log(Number("1")-1 === 0)
  console.log('test fail?')

  for (var i = 0; i < 5; i++) {
    function a(){
      var p =i;
      (function b(p) {
        console.log ('first' + p)
      })(p);
    }

    setTimeout(a, 2000)
  }
}
