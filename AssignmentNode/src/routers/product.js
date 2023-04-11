const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController')

router.get('/create', productController.create_get); //get create
router.post('/create', productController.create_post); //post create
router.get('/listproduct', productController.show_listproduct); //post create
router.get('/edit/:id', productController.edit_get); //get edit
router.put('/edit/:id', productController.edit_put); //put edit
router.delete('/delete/:id', productController.delete_put); //put delete

module.exports = router;