var express = require('express');

var app = express();
app.use(express.static('./dist/kinnect-front'));

app.get('/*', function(req, res){
  res.sendFile('index.html', {root: 'dist/kinnect-front/'});
});

app.listen(process.env.PORT || 8080);
