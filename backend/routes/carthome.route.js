let express = require('express'),
  multer    = require('multer'),
  mongoose  = require('mongoose'),
  router    = express.Router();

// Multer File upload settings
const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});


// CartHome model
let CartHome = require('../models/CartHome');


// POST CartHome
router.post('/create-cart-home', upload.single('image'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const user = new CartHome({
    _id: new mongoose.Types.ObjectId(),
    titre: req.body.titre,
    description: req.body.description,
    image: url + '/public/' + req.file.filename
  });
  user.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "cart registered successfully!",
      cartCreated: {
        _id: result._id,
        titre: result.titre,
        description: result.description,
        Image: result.Image
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})

// GET All CartHomes
router.get("/", (req, res, next) => {
  CartHome.find().then(data => {
    res.status(200).json({
      message: "carts retrieved successfully!",
      CartHome: data
    });
  });
});


module.exports = router;
