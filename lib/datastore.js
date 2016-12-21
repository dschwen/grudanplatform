function exitHandler(options, err) {
  if (options.cleanup)
  {
    // save database here
    console.log('clean');
  }

  if (err) console.log(err.stack);
  if (options.exit) process.exit();
}

datastore = {
  /**
   * Set termination handlers
   */
  registerExitHandler: function()
  {
    //do something when app is closing
    process.on('exit', exitHandler.bind(null, {cleanup: true}));

    //catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(null, {exit: true}));

    //catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, {exit: true}));
  }
};

module.exports = datastore;
