//Import
var http = require('http')
var url = require('url')
var queryString = require('querystring')
////Traitement 

var server = http.createServer(function (req, res) {
    // res.write("Bonjour node js")
    var params = queryString.parse(url.parse(req.url).query)
    console.log(params);
    var page = url.parse(req.url).pathname;
    console.log(page)
    res.writeHead(200, { "Context-Type": "text/html" })
    if ('id' in params && 'login' in params) {
        res.write('Votre id est ' + params['id'] + ' et login est ' + params['login'])
    }
    else {
        res.write("veuillez saisir id et login")
    }
    // if (page == '/') {
    //     res.write('Vous etes dans la page accueil')
    // }
    // else if (page == '/Contact') {
    //     res.write('Vous etes dans la page contact')
    // }
    // else if (page == '/Affichage/user/1') {
    //     res.write("page affichage user 1")
    // }
    // else {
    //     res.write("404 NOT FOUND")
    // }
    res.end()
})
//traitement



///////Config 
server.listen(8000)
