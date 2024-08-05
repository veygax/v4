const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the discord.txt file when the URL is /.well-known/discord
app.get('/.well-known/discord', (req, res) => {
  const filePath = path.join(__dirname, 'discord.txt');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`Error sending file: ${err}`);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
