const Discord = require('discord.js')
const MojangAPI = require('mojang-api');
exports.run = async (client, message, args) => {


  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`Especifique um username a ser consultado.`)
  const user = args[0]
  if (!user) return message.channel.send(embed);

  const deze = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`Usernames só podem ter até 16 caracteres.`)

  if (user.length >= 16) return message.channel.send(deze);

  const char = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`Não são permitidas caracteres inválidas.`)

  if (user.length <= 2 || user.includes('@', ',', '.', ';', '~', "<", ">", "ç", " ", ":")) return message.channel.send(char);



  MojangAPI.nameToUuid(user, function(err, res) {

    if (!res[0]) {
      const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setFooter(`Requisitado por ${message.author.username} | Minecraft`)
        .setAuthor(`O nome ${user} está disponível!`)
      message.channel.send(embed)
      console.log(`AV: ${user} | MINE`)
    }


    else {
      const embed = new Discord.MessageEmbed()
        .setTitle(`https://pt.namemc.com/profile/${user}`)
        .setTimestamp()
        .setDescription(`UUID: ${res[0].id}`)
        .setFooter(`Requisitado por ${message.author.username} | Minecraft`)
        .setAuthor(`O nome ${user} está indisponível.`)
      message.channel.send(embed)
      console.log(`UNA: ${user} | MINE`)
    }
  });
}
