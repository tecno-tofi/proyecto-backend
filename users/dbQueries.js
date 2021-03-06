//Importamos conexion a DataBase
const knex = require('../db/connection');

//Exportamos queries
module.exports = {
    //Queries de usuarios
    users: {
        getUsers: function(){
            return knex.select().table('User').where('deleted', null);
        },
        getAll: function(){
            return knex.select().table('User');
        },
        getDeleted: function(){
            return knex.select().table('User').whereNot('deleted', null);
        },
        getByType: function(id){
            return knex.select().table('User').where('typeId', id);
        },
        getByCompany: function(id){
            return knex.select().table('User').where('companyId', id).first();
        },
        getOneById: function(id){
            console.log(`Enviando Query SELECT a User con id: ${id}`);
            return knex.select().table('User').where('id', id).first();
        },
        getOneByEmail: function(email){
            console.log(`Enviando Query SELECT a User con email: ${email}`);
            return knex.select().table('User').where('email', email).first();
        },
        getOneByDocument: function(documento){
            console.log(`Enviando Query SELECT a User con documento: ${documento}`);
            return knex.select().table('User').where('document', documento).first();
        },
        getByName: function(name){
            console.log(`Enviando Query SELECT a User con nombre: ${name}`);
            return knex.select().table('User').where('name', name);
        },
        getByPhone: function(phone){
            console.log(`Enviando Query SELECT a User con telefono: ${phone}`);
            return knex.select().table('User').where('phone', phone);
        },
        getByRol: function(typeId){
            console.log(`Enviando Query SELECT a User con tipo: ${typeId}`);
            return knex.select().table('User').where('typeId', typeId);
        },
        insert: function(user){
            console.log(`Enviando Query INSERT a User`);
            return knex('User').insert(user).returning('id');
        },
        update: function(id, user){
            console.log(`Enviando Query UPDATE a User`);
            return knex('User').where('id', id).update(user);
        },
        delete: function(id, date){
            console.log(`Enviando Query DELETE a User`);
            return knex('User').where('id', id).update('deleted', date);
        },
        rollback: function(id){
            console.log(`Enviando Query DELETE a User`);
            return knex('User').where('id', id).del();
        }
    }
};