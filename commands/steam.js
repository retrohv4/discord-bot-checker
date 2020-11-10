const SteamApi = require("steamapi");
const Discord = require('discord.js');

const apiuser = new SteamApi(""); // add your api key
exports.run = (client, message, args) => {
  const line = args[0];
  const ters = new Discord.MessageEmbed()
    .setAuthor(`O id não pode conter mais de 32 caracteres.`)
    .setTimestamp()
  if (line.length > 32) return message.channel.send(ters);
  const dois = new Discord.MessageEmbed()
    .setAuthor(`O id não pode conter menos de 3 caracteres.`)
    .setTimestamp()
  if (line.length < 3) return message.channel.send(dois);
  const char = new Discord.MessageEmbed()
    .setAuthor(`Não é permitada caracteres inválidas.`)
    .setTimestamp()
  if (line.includes('@', ',', '.', ';', '~', "<", ">", "ç", " ", ":")) return message.channel.send(char)

  apiuser.resolve(line).then(id => {
    const taken = new Discord.MessageEmbed()
      .setAuthor(`O id ${line} está indisponível.`)
      .setDescription(`https://steamcommunity.com/id/${line}`)
      .setTimestamp()
      .setFooter(`Requisitado por ${message.author.username}`)
    console.log(`UNA: ${line} | STEAMID`)
    message.channel.send(taken);
  }).catch(err => {
    const untaken = new Discord.MessageEmbed()
      .setAuthor(`O id ${line} está disponível.`)
      .setTimestamp()
      .setFooter(`Requisitado por ${message.author.username}`)
    console.log(`AV: ${line} | STEAMID`)
    message.channel.send(untaken)
  });
};

