const app = require("./app")
require('dotenv').config() //importando dessa maneira a biblioteca fica disponivel nos outros arquivos

const PORT = process.env.PORT || 3333 //se a variavel ambient PORT não existir a porta padrão será
 
//inicinado o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`)
})
