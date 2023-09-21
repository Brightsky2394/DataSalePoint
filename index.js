// importing all required modules
const http = require('http');
const app = require('./app');
const dbConnect = require('./db/dbConnect');
const path = require('path');
const express = require('express');

// invocation of dbConnect
dbConnect();
// Serve static files style, images and script
app.use(express.static(path.join(__dirname, 'style')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/script', express.static(path.join(__dirname, 'script')));

// Route for homePage
app.get('/homePage', (req, res) => {
    const filePath = path.join(__dirname, 'html', 'HomePage.html');
    res.sendFile(filePath)
})

// Route for login
app.get('/login', (req, res) => {
    const filePath = path.join(__dirname, 'html', 'LogPage.html');
    res.sendFile(filePath);
})

// Route for register
app.get('/register', (req, res) => {
    const filePath = path.join(__dirname, 'html', 'LogPage.html');
    res.sendFile(filePath);
})

// Route for buyData
app.get('/buyData', (req, res) => {
    const filePath = path.join(__dirname, 'html', 'buyData.html');
    res.sendFile(filePath);
})

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
