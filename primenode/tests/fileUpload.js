var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//...
app.use(bodyParser({ uploadDir: path.join(__dirname, 'files'), keepExtensions: true }));
app.use(methodOverride());
//...
app.post('/fileupload', function(req, res) {
    console.log(req.files);
    res.send('ok');
});

form(name = "uploader", action = "/fileupload", method = "post", enctype = "multipart/form-data");
input(type = "file", name = "file", id = "file");
input(type = "submit", value = "Upload");

var fs = require('fs');
var busboy = require('connect-busboy');
//...
app.use(busboy());
//...
app.post('/fileupload', function(req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function(fieldname, file, filename) {
        console.log("Uploading: " + filename);
        fstream = fs.createWriteStream(__dirname + '/files/' + filename);
        file.pipe(fstream);
        fstream.on('close', function() {
            res.redirect('back');
        });
    });
});