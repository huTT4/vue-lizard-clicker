import { Telegraf, Markup } from 'telegraf'

const token = '7217188404:AAGV1toNaZF-AvbesVvKJm1-jGjUh_ZdD4U'
const webAppUrl = 'https://lizard-clicker-pro-4.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply('Hello! Press to start the app', Markup.inlineKeyboard([
    Markup.button.webApp('Open miniapp', `${webAppUrl}?ref=${ctx.payload}`)
  ]))
})

bot.launch()