const express = require('express');
const router = express.Router();

const { Message } = require('../sequelize/models');


// MESSAGE DETAILS BY ID:
router.get('/messages/:id', async function (req, res) {
    const id = req.params.id;
    const message = await Message.findByPk(id);

    if (message) {
        res.render("messages/msg", { message });
        await message.destroy();
    } else {
        res.render("messages/not-found");
    }
});


// HOME PAGE:
router.get('/', async function (req, res) {
    const messages = await Message.findAll();
    res.render("messages/index", { messages });
});


// CREATE AND STORE NEW MESSAGE:
router.post('/messages', async function (req, res) {
    let { msgSubject, msgContent } = req.body;
    if (!msgSubject || !msgSubject.trim().length) msgSubject = "(No Subject)";
    else if (msgSubject.length > 35) msgSubject = "Submitted Subject Was Too Long";

    await Message.create({ subject: msgSubject, content: msgContent });
    res.redirect("/");
});


// DEFAULT ROUTE FOR EVERYTHING ELSE (ERRORS):
router.get('*', async function (req, res) {
    res.render("messages/not-found");
});


module.exports = router
