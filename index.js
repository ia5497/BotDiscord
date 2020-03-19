const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('Njg3OTI2MTAwMzY1ODAzNTIw.Xms4Vg.eIAIUJNzQmm-zyRinbjHs8Rg-hc')

bot.on('message', message => {
  if (message.content === '!hymne') {
    message.channel.send(" Hymne de Guilde :notes: : \n ``` Poulpo-gang, poulpo-gang \n Poulpo-gang, poulpo-gang \n J'lui ais mis un coup de razielle \n parcequ'elle était pas belle \n Poulpo-gang, poulpo-gang \n Poulpo-gang, poulpo-gang \n On dj tous les jours \n Mais on chall pas toujours \n Poulpo-gang, poulpo-gang \n Poulpo-gang, poulpo-gang \n J'avoue j'ai merdé \n Il avait pas à me précipité \n Poulpo-gang, poulpo-gang \n Poulpo-gang, poulpo-gang \n J'me fais parfois pl \n Mais c'est pour financer ma razielle \n Poulpo-gang, poulpo-gang \n Poulpo-gang, poulpo-gang \n J'lui ai mis un coup d'martelo \n J'me suis instant fait k.o \n Poulpo-gang, poulpo-gang \n Poulpo-gang, poulpo-gang ``` ")
  }
})

