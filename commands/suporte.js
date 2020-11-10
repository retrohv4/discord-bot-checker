const Discord = require('discord.js');

exports.run = async (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor('Plataformas suportadas:')
    .addFields( 
		{ name: 'Minecraft ', value: 'rc!minecraft (nick)' }, 
		{ name: 'LOL', value: `rc!lol (nick)`, inline: true }, 
		{ name: 'Steam ID', value: 'rc!steam (id)', inline: true }, 
    { name: 'We<3', value: 'rc!we<3 (id)', inline: true },
    { name: 'GitHub', value: 'rc!github (id)', inline: true },
    { name: 'Spotify', value: 'rc!spotify (id)', inline: true }
    )

    .setFooter(`Requisitado por ${message.author.username}.`)
    .setTimestamp()

message.channel.send(embed)
.then(message =>{
		message.delete({timeout: 8000})
    })
}
