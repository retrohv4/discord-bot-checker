const Discord = require('discord.js');
const request = require('request');

exports.run = async (client, message, args) => {
  const user = args[0];

  if (user.length < 3 || user.length > 32) {
    const len = new Discord.MessageEmbed()
      .setAuthor('O id não pode possuir menos de 3 caracteres e mais de 32.')
      .setTimestamp()
    return message.channel.send(len);
  }
  request(`https://soundcloud.com/${user}`, function(error, response, body) {
    if (response.statusCode == 200) {
      const invali = new Discord.MessageEmbed()
      .setAuthor(`O id ${user} está indisponível.`)
      .setTimestamp()
      .setDescription(`https://soundcloud.com/${user}`)
      .setFooter(`Requisitado por ${message.author.username} | SC`)
      return message.channel.send(invali);
    }
    else if (response.statusCode == 404) {
      const vali = new Discord.MessageEmbed()
      .setAuthor(`O id ${user} está disponível!`)
      .setTimestamp()
      .setFooter(`Requisitado por ${message.author.username} | SC`)
      return message.channel.send(vali); 
    }
    else {
      const err = new Discord.MessageEmbed()
      .setAuthor('Unknown error')
      .setTimestamp()
    return message.channel.send(err);
    }
}
);
