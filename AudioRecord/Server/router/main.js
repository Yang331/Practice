var multer = require('multer');
//var upload = multer({dest:'/home/yang/Major/Project/2-2/Server/uploads'})
var _storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({ storage: _storage })

//var upload = multer({dest:'/home/yang/Major/Project/2-2/Server/uploads'})
module.exports = function(app){
  app.get('/',function(req,res){
    res.sendFile('/home/yang/Major/Project/AudioRecord/Server/views/index.html');
  });
  app.post('/upload', upload.single('userfile'), function(req, res){
    console.log(req.file);
    res.send('Uploaded : '+req.file.filename);
  });
  app.get('/download/:id',function(req,res){
    var filename = req.params.id;
    filepath = "/home/yang/Major/Project/AudioRecord/uploads/" +filename;
    res.download(filepath);
  });
}
