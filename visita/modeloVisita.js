const Clientes = require('../cliente/modeloCliente');
const Imovel = require('../imovel/modeloImovel');
const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');

const Visita = conexao.define('visitas', {
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
            model: Clientes,
            key: 'codCliente'
        },
        onDelete: 'CASCADE'   
    },
    codImovel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
            model: Imovel,
            key: 'codImovel'
        },
        onDelete: 'CASCADE'   
    },
    dataVisita:{
        type: Sequelize.DATE,
        allowNull: false
    },
    visitaRealizada: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
});

Visita.sync(
    { force: false });

module.exports = Visita;