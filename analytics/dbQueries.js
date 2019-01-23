const knex = require('../db/connection');

module.exports = {
    usuarios: {
        getLoginsPorFecha: function(dateTo, dateFrom){
            return knex.raw('select count(*) from "User" where created >= ? and created <= ?',
            [dateTo, dateFrom])
        },
        getSignUpsPorFecha: function(dateTo, dateFrom){
            return knex.raw('select count(*) from "User" where "lastLogin" >= ? and "lastLogin" <= ?',
            [dateTo, dateFrom])
        },
    },
    productos: {
        getRegistrosPorFecha: function(dateTo, dateFrom){
            return knex.raw('select count(*) from "Product" where created >= ? and created <= ?',
            [dateTo, dateFrom])
        },
    },
    paquetes: {
        getRegistrosPorFecha: function(dateTo, dateFrom){
            return knex.raw('select count(*) from "Package" where created >= ? and created <= ?',
            [dateTo, dateFrom])
        },
    },
    pedidos: {
        getPedidosPorFecha: function(dateTo, dateFrom){
            return knex.raw('select count(*) from "Pedido" where "timestamp" >= ? and "timestamp" <= ?',
            [dateTo, dateFrom])
        },
        getTransactionsPorFecha: function(dateTo, dateFrom){
            return knex.raw('select count(*) from "Transaction" where "timestamp" >= ? and "timestamp" <= ?',
            [dateTo, dateFrom])
        },
        getProductsPorFecha: function(dateTo, dateFrom){
            return knex.raw('select sum(quantity) from "TransactionProduct" where "transactionId" in (select id from "Transaction" where "timestamp" >= ? and "timestamp" <= ?)',
            [dateTo, dateFrom])
        },
        getPackagesPorFecha: function(dateTo, dateFrom){
            return knex.raw('select sum(quantity) from "TransactionPackage" where "transactionId" in (select id from "Transaction" where "timestamp" >= ? and "timestamp" <= ?)',
            [dateTo, dateFrom])
        },
    }
}