function easterEgg() {
    console.log(`
        enjoy this "easter egg":

                                ████████
                              ██        ██
                            ██▒▒▒▒        ██
                          ██▒▒▒▒▒▒      ▒▒▒▒██
                          ██▒▒▒▒▒▒      ▒▒▒▒██
                        ██  ▒▒▒▒        ▒▒▒▒▒▒██
                        ██                ▒▒▒▒██
                      ██▒▒      ▒▒▒▒▒▒          ██
                      ██      ▒▒▒▒▒▒▒▒▒▒        ██
                      ██      ▒▒▒▒▒▒▒▒▒▒    ▒▒▒▒██
                      ██▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒██
                        ██▒▒▒▒  ▒▒▒▒▒▒    ▒▒▒▒██
                        ██▒▒▒▒            ▒▒▒▒██
                          ██▒▒              ██
                            ████        ████
                                ████████
    `);
}

function createMsgNotification() {
    const subjectTitle = document.querySelector(".form-msg-subject");
    const msgContent = document.querySelector(".form-msg-content");
    console.log(subjectTitle.value);
    if (subjectTitle.value.length > 0 && msgContent.value.length > 0) window.alert("Message has been successfully created!");
}
