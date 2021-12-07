
const generatePage = (Fabiola, Fabskickass) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  <h1>${Fabiola}</h1>
  <h2><a href = 'httpd://github.com/${Fabskickass}'>Github</a></h2>
    
  </body>
  </html>
        `;
  };
  
  module.exports = generatePage;