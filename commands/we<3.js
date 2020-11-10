const Discord = require('discord.js');
const request = require('request');

exports.run = async (client, message, args) => {
  const user = args[0];

  const Embed = new Discord.MessageEmbed()
    .setAuthor('O id precisa ter menos de 25 caracteres.')
    .setFooter(`Requisitado por ${message.author.username}`)
    .setTimestamp()

  if (!user) {
    const Embed2 = new Discord.MessageEmbed()
      .setAuthor('Especifique um id a ser validado.')
      .setTimestamp()
    return message.channel.send(Embed2)
  }

  if (user.length >= 25) return message.channel.send(Embed);

  request(`https://api.weheartit.com/${user}`, function(error, response, body) {

    console.log(response.statusCode)

    console.log(error);

    if (response.statusCode == 200) {
      const Embed3 = new Discord.MessageEmbed()
        .setAuthor(`O id ${user} está indisponível.`)
        .setFooter(`Requisitado por ${message.author.username}.`)
        .setDescription(`https://api.weheartit.com/${user}`)
        .setTimestamp()
      console.log(`UNA: ${user} | WE<3`)
      return message.channel.send(Embed3)
    }

    else if (response.statusCode == 404) {
      const Embed4 = new Discord.MessageEmbed()
        .setAuthor(`O id ${user} está disponível!`)
        .setFooter(`Requisitado por ${message.author.username}.`)
        .setTimestamp()
      console.log(`AV: ${user} | WE<3`)
      return message.channel.send(Embed4)

    }

    else {
      const Embed5 = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .setFooter(`Status error: ${response.statusCode}`)
        .setTimestamp()
      return message.channel.send(Embed5)
    }
  })

}
