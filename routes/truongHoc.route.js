const express = require('express');
const router = express.Router();
const truongHocController = require('../controllers/truongHoc.controller')

const multer = require('multer')

const storage= multer.diskStorage({
     destination: function(req, file, callback) {
        callback(null, './public/images')
    },
    
    filename: function(req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({storage})

router.get('/create', truongHocController.create)
router.post('/store', upload.single('image'), truongHocController.store)
router.get('/:id/edit', truongHocController.edit)
router.put('/:id', upload.single('image'), truongHocController.updateSchools)
router.delete('/:id', truongHocController.deleteSchools)
router.get('/search', truongHocController.searchSchools)
router.get('/:slug', truongHocController.detailsSchool)
router.get('/', truongHocController.show)


module.exports = router