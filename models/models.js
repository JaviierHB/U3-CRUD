const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
    //Conexión a la base de datos
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/u3', { useNewUrlParser: true });

    wagner.factory('db', ()=> mongoose);

    const Product = require('./product.model');
    const User = require('./user.model');
    const Brands = require('./brand.model');

    const models = {
        Product,
        User,
        Brands
    }
    _.each(models, (v, k)=> {
        wagner.factory(k, ()=>v);
    });
}