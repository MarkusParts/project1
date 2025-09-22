const http = require("http");
const dateEt = require("./src/TimeET");
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\t<meta charset="utf-8"><title>Eepilime veebisait</title></head><body>';
const pageBody = '<h1>minu domeen</h1><p>Sa ei kujuta ette maailma, ilma minuta, sest <a href="https://www.imdb.com/title/tt7335184/">sina</a> ei ole maailm ilma minuta<p><p>Ava oma silmad ja võta maailm vastu</p><hr>';
const pageFoot = '</body></html>';

http.createServer(function(req, res){
	res.writeHead(200, {"content-type": "text/html"});
	//res.write("Ongi nii!");
	res.write(pageHead);
	res.write(pageBody);
	res.write(pageFoot);
	return res.end();
}).listen(5121);
