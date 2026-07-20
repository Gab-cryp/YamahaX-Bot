import fs from 'fs';
import { watchFile, unwatchFile } from 'fs'
import { fileURLToPath } from 'url'

global.owner = ['595992111568']

global.api = {
  url: 'https://api.stellarwa.xyz',
  key: 'proyectsV2' 
}

global.msgglobal = 'Ocurrió un problema, contacte al creador'
global.dev = 'Gabryelxp`

global.mess = {
  socket: 'Este comando solo puede ser ejecutado por un Socket.',
  admin: ' Este comando solo puede ser ejecutado por los Administradores del Grupo.',
  botAdmin: ' Este comando solo puede ser ejecutado si el Socket es Administrador del Grupo.',
  nsfw: ' Los comandos de *NSFW* están desactivados en este grupo.',
  comandooff: 'Estos comandos estan desactivados en este grupo.'
}

global.my = {
ch: "120363407128588763@newsletter"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  import(`${file}?update=${Date.now()}`)
})
