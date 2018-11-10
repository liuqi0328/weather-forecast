require('module-alias/register');

// const path = require('path');
const fs = require('fs');

module.exports = (app) => {
  // require all API endpoints
  fs.readdirSync('routes/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};
