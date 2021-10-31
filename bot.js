const Telegraf = require('telegraf');

const bot = new Telegraf('2083322429:AAF3iTILrFaa2Okzh-FhexVsCf-tB92kHIg');

bot.command('test', ctx => {
    // url
    bot.telegram.sendPhoto(ctx.chat.id, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg");

    // file path
});

bot.launch();