const Discord = require('discord.js');

exports.run = async (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor('Comando de ajuda.')
    .setDescription('Olá, eu sou o retro chk, um bot focado em checar usuários dispóniveis em diversas plataformas, como minecraft, twitter, twitch, etc. Digite **c!suporte** para uma lista completa das plataformas suportadas.👏 ')
    .setFooter(`Requisitado por ${message.author.username}`)
    .setTimestamp()
    .setTitle('Desenvolvido pelo retro#0008.')
    .setThumbnail('https://cdn.discordapp.com/attachments/766827629235535882/766899620710055946/original.jpg')
  message.channel.send(embed)
    .then(message => {
      message.delete({ timeout: 8000 })
    })
}
