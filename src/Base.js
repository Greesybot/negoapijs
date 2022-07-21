/*
*
*   Author : Nego
*
*/

const os = require("node:os");
class Base_UTIL{

gateway(){
return "https://gateway.nego-dev.com && https://gateway.nego.gg"
}

networkInterface(){
return os.networkInterfaces()
}

}


module.exports = Base_UTIL;
