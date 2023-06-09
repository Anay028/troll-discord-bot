require("dotenv").config()
const { Client, Events, GatewayIntentBits } = require("discord.js")

const client = new Client({intents: [GatewayIntentBits.Guilds,  GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent]})

client.on(Events.ClientReady, async e => {
    console.log(`Logged in as ${e.user.tag}`);
})

client.on(Events.GuildMemberAdd, async member => {
    const trollId = member.id;
    const general = await client.channels.cache.get(process.env.GENERAL_CHANNEL_ID)
    const channel = await client.channels.cache.get(process.env.CHANNEL_ID)
    const message = await channel.messages.fetch({limit: 1})
    const messageContent = message.first().content;
    const previousNumber = parseInt(messageContent.split(" ")[0].split("#")[1]);
    const currentNumber = previousNumber + 1;
    channel.send(`#${currentNumber} <@${trollId}>`)
    general.send(`Congrats <@${trollId}> for being trolled. You are #${currentNumber}! Enjoy your day!`)
})


client.login(process.env.TOKEN)