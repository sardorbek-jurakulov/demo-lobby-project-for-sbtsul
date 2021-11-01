const Telegraf = require('telegraf');

const bot = new Telegraf('2083322429:AAF3iTILrFaa2Okzh-FhexVsCf-tB92kHIg');

// bot.on('message', ctx => {
//     console.log(ctx.message.photo);
// });

// bot.on("message", ctx => {
//     console.log(ctx.message.photo); // rasm fayli idsini bilib olish uchun ishlatildi.
// });

bot.use((ctx, next) => {
    if(ctx.updateSubTypes[0] == 'text') {
        bot.telegram.sendMessage(-722676570, ctx.from.first_name + " " + ctx.from.last_name + ": " + ctx.message.text);
    } else if (ctx.updateSubTypes[0] == 'photo') {
        bot.telegram.sendPhoto(-722676570, ctx.message.photo[0].file_id);
    }
    next();
});

bot.command('test', ctx => {
    // url
    // bot.telegram.sendPhoto(ctx.chat.id, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg");
    // console.log(ctx.from);

    // file path
    // bot.telegram.sendPhoto(ctx.chat.id, {source: "./res/dubai.jpeg"});

    // file id
    // bot.telegram.sendPhoto(ctx.chat.id, "AgACAgIAAxkBAAM5YX-Cxcd6_4gY9qX71xUxQX0SLFYAAui1MRtpI_hLO4yn5oCq58wBAAMCAANzAAMhBA");

    // console.log(ctx.chat);
    // group chat id = -722676570
});

// bot.hears("test", ctx => {
//     // console.log(ctx.from);
//     // console.log(ctx);
//     // console.log(ctx.chat);
// });

bot.launch();