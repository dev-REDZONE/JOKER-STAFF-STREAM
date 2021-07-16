const Discord = require("discord.js");
const redzone = new Discord.Client();
//////// playing or dnd  streaming ////////
redzone.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `JOKER STAFF UP`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    redzone.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
redzone.on("ready", () => {
    var join = redzone.channels.get(""); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
redzone.login("");
