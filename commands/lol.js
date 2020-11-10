const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const user = args.join(' ')
  const carac = new Discord.MessageEmbed()
    .setAuthor(`O nome não pode ter mais de 16 caracteres.`)
    .setTimestamp()
  if (user.length > 16) return message.channel.send(carac);
  const user_url = user.replace(' ', '_');
  if()
  request(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user_url}?api_key=''`, function(error, response, body) { //add your api key
    let nome = user;
    if (response.statusCode == 200) {
      const dispo = new Discord.MessageEmbed()
        .setAuthor(`O nome ${user} não está disponível.`)
        .setDescription(`Nome -> ${nome}.`)
        .setFooter(`Requisitado por ${message.author.username} | LOL`)
        .setTimestamp()
      console.log(`UNA: ${user} | LOL`)
      message.channel.send(dispo);
    }
    else if (response.statusCode == 404) {
      const indispo = new Discord.MessageEmbed()
        .setAuthor(`O nome ${user} está disponível!`)
        .setDescription(`Nome -> ${nome}.`)
        .setFooter(`Requisitado por ${message.author.username} | LOL`)
        .setTimestamp()
      console.log(`AV: ${user} | LOL`)
      message.channel.send(indispo);
    }
    if (!response.statusCode === 401) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 400) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 403) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 405) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 415) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 429) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 500) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 502) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 502) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
    if (!response.statusCode === 504) {
      const unknown = new Discord.MessageEmbed()
        .setAuthor(`Erro desconhecido.`)
        .addField('Tipo de erro:', `${response.statusCode}`)
        .setTimestamp()
      message.channel.send(unknown);
    }
  })
}
