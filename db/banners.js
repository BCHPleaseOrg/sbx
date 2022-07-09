/* Simple Banner */
const simple = () => {
    console.log(`
  Smart Bitcoin Exchange
  Federation Database

  ███████╗ ██████╗  ██╗  ██╗      ██████╗  ██████╗
  ██╔════╝ ██╔══██╗ ╚██╗██╔╝      ██╔══██╗ ██╔══██╗
  ███████╗ ██████╔╝  ╚███╔╝       ██║  ██║ ██████╔╝
  ╚════██║ ██╔══██╗  ██╔██╗       ██║  ██║ ██╔══██╗
  ███████║ ██████╔╝ ██╔╝ ██╗      ██████╔╝ ██████╔╝
  ╚══════╝ ╚═════╝  ╚═╝  ╚═╝      ╚═════╝  ╚═════╝
                                        v${require('./package.json').version}
    `)
}

/* Big Banner */
const big = () => {
    console.log(`
  Smart Bitcoin Exchange
  Federation Database

     d888888o.   8 888888888o \`8.\`8888.      ,8'        8 888888888o.      8 888888888o
   .\`8888:' \`88. 8 8888    \`88.\`8.\`8888.    ,8'         8 8888    \`^888.   8 8888    \`88.
   8.\`8888.   Y8 8 8888     \`88 \`8.\`8888.  ,8'          8 8888        \`88. 8 8888     \`88
   \`8.\`8888.     8 8888     ,88  \`8.\`8888.,8'           8 8888         \`88 8 8888     ,88
    \`8.\`8888.    8 8888.   ,88'   \`8.\`88888'            8 8888          88 8 8888.   ,88'
     \`8.\`8888.   8 8888888888     .88.\`8888.            8 8888          88 8 8888888888
      \`8.\`8888.  8 8888    \`88.  .8'\`8.\`8888.           8 8888         ,88 8 8888    \`88.
  8b   \`8.\`8888. 8 8888      88 .8'  \`8.\`8888.          8 8888        ,88' 8 8888      88
  \`8b.  ;8.\`8888 8 8888    ,88'.8'    \`8.\`8888.         8 8888    ,o88P'   8 8888    ,88'
   \`Y8888P ,88P' 8 888888888P .8'      \`8.\`8888.        8 888888888P'      8 888888888P
                                                                      v${require('./package.json').version}
    `)
}

/* Export modules. */
module.exports = {
    simple,
    big,
}
