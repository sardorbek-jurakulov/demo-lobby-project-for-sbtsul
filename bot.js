const Telegraf = require('telegraf');

const bot = new Telegraf('2083322429:AAF3iTILrFaa2Okzh-FhexVsCf-tB92kHIg');

// bot.on('message', ctx => {
//     console.log(ctx.message.photo);
// });

// bot.on("message", ctx => {
//     console.log(ctx.message.photo); // rasm fayli idsini bilib olish uchun ishlatildi.
// });

// bot.use((ctx, next) => {
//     console.log(ctx);
//     if(ctx.updateSubTypes[0] == 'text') {
//         bot.telegram.sendMessage(-722676570, ctx.from.first_name + " " + ctx.from.last_name + ": " + ctx.message.text);
//     } else if (ctx.updateSubTypes[0] == 'photo') {
//         bot.telegram.sendPhoto(-722676570, ctx.message.photo[0].file_id);
//     }
//     next();
// });

// bot.command('test', ctx => {
    // url
    // bot.telegram.sendPhoto(ctx.chat.id, "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg");
    // console.log(ctx.from);

    // file path
    // bot.telegram.sendPhoto(ctx.chat.id, {source: "./res/dubai.jpeg"});

    // file id
    // bot.telegram.sendPhoto(ctx.chat.id, "AgACAgIAAxkBAAM5YX-Cxcd6_4gY9qX71xUxQX0SLFYAAui1MRtpI_hLO4yn5oCq58wBAAMCAANzAAMhBA");

    // console.log(ctx.chat);
    // group chat id = -722676570
// });

// bot.hears("test", ctx => {
//     // console.log(ctx.from);
//     // console.log(ctx);
//     // console.log(ctx.chat);
// });

// bot.command('newyork', ctx => {
//     bot.telegram.sendPhoto(ctx.chat.id, {source: './res/newyork.jpeg'});
// });

// bot.command("dubai", ctx => {
//     bot.telegram.sendPhoto(ctx.chat.id, {source: './res/dubai.jpeg'});
// });
// bot.command("singapure", ctx => {
//     bot.telegram.sendPhoto(ctx.chat.id, {source: './res/singapure.jpeg'});
// });
// bot.command("hongkong", ctx => {
//     bot.telegram.sendPhoto(ctx.chat.id, {source: './res/hongkong.jpeg'});
// });
// bot.command("london", ctx => {
//     console.log(ctx);
//     bot.telegram.sendPhoto(
//         ctx.chat.id,
//         {
//             source: './res/london.jpeg'
//         },
//         {
//             reply_to_message_id: ctx.message.message_id
//         }
//     );
// });

bot.command('london', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
    bot.telegram.sendPhoto(
        ctx.chat.id, 
        {
            source: './res/london.jpeg'    
        },
        {
            reply_to_message_id: ctx.message.message_id
        }
    );
});

bot.command("dubai", ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_video");
    bot.telegram.sendAnimation(
        ctx.chat.id, 
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/274px-Rotating_earth_%28large%29.gif",
        {
            reply_to_message_id: ctx.message.message_id
        }
    );
});
// bot.command('cities', ctx => {
//     bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
//     let cities = ['./res/dubai.jpeg', './res/hongkong.jpeg', './res/london.jpeg', './res/newyork.jpeg', './res/singapure.jpeg'];
//     let result = cities.map(city => {
//         return {
//             type: 'photo',
//             media: {
//                 source: city
//             }
//         }
//     });

//     bot.telegram.sendMediaGroup(
//         ctx.chat.id, 
//         result
//     );
// });

bot.command("cities", ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
    let cities = ["./res/dubai.jpeg", "./res/hongkong.jpeg", "./res/london.jpeg", "./res/newyork.jpeg", "./res/singapure.jpeg"];
    let result = cities.map(city => {
        return {
            type: 'photo',
            media: { source: city }
        }
    });
    bot.telegram.sendMediaGroup(ctx.chat.id, result);
});

bot.command("citieslist", ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_document");
    bot.telegram.sendDocument(
        ctx.chat.id, 
        {source: "./res/citiesList.txt"},
        {thumb: { source: "./res/london.jpeg"}}
    );
});

bot.command("tashkent_location", ctx => {
    // bot.telegram.sendChatAction(ctx.chat.id, "upload_location");
    bot.telegram.sendLocation(ctx.chat.id, 41.311081, 69.240562);
})
bot.launch();