'use strict';
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const messages = [];
        const bodyContent = [
            "Congrats! You'll never be able to open this message again.",
            "Your mission, should you choose to accept it... is to read the next message.",
            "5... 4... 3... 2... 1...",
            "I need to write down my secret password somewhere safe: secretpassword.",
            "Who let the dogs out?",
            "I bet you didn't see the secret easter egg in the browser console.",
            "Thanks, come again!"
        ];
        for (let i = 0; i < 7; i++) {
            messages.push({
                subject: `Test Message ${i + 1}`,
                content: `${bodyContent[i]}`
            })
        }

        return queryInterface.bulkInsert('Messages', messages);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Messages", {
            subject: {
                [Op.in]: [
                    "Test Message 1",
                    "Test Message 2",
                    "Test Message 3",
                    "Test Message 4",
                    "Test Message 5",
                    "Test Message 6",
                    "Test Message 7",
                ]
            }
        });
    }
};
