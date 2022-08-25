document.getElementById("discordCopy").addEventListener("click", (function(){
    navigator.clipboard
        .writeText(document.getElementById("discord-id").textContent)
        .then(() => {
            document.getElementById("discordCopy").classList.add("copied");
            clearTimeout(window.discordCopyTimeout);
            window.discordCopyTimeout=setTimeout((function(){discordCopy.classList.remove("copied")}),1000);
        })
        .catch(() => {
            //do nothing lol
        });
}));