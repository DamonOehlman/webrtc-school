var workshopper = require('browser-workshopper');
var path = require('path');

var browserifyBuiltins = require('browser-workshopper/node_modules/browserify/lib/builtins')
// browserifyBuiltins.http = require.resolve('http-browserify')

workshopper({
  port: 0,
  exercises: require('./exercises.json'),
  exercisesDir: path.resolve(__dirname, 'exercises'),
  title: 'WebRTC Workshopper',
  bundlerOpts: {
    builtins: browserifyBuiltins
  },
  mainBundler: require('./bundler')
});

process.on('exit', exit)
process.on('SIGINT', function () {
  process.exit()
});

function exit() {
  console.log(
    '\nSad to see you go!\n\n' +
    'To run the workshop again, type `view-school` in this directory.\n' +
    'Don\'t worry, your answers will not be overwritten!'
  )
}
