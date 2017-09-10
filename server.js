const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.use((req, res, next) => {
    if (req.header['x-forwarded-proto'] !== 'https') {
        res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
        next();
    }
  });


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);