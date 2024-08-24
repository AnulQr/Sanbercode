const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

doFirstTask((err, result1) => {
    if (err) {
      handleError(err);
      return;
    }
    doSecondTask(result1, (err, result2) => {
      if (err) {
        handleError(err);
        return;
      }
      doThirdTask(result2, (err, result3) => {
        if (err) {
          handleError(err);
          return;
        }
        console.log(result3);
      });
    });
  });
  