const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../endereco/modeloEndereco')

const Cliente = conexao.define('clientes', {
    codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    cnpj:{
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true
    },
    cnpj:{
        type: Sequelize.STRING(11),
        allowNull: false
    },
    dataNascimento:{
        type: Sequelize.DATE,
        allowNull: false
    },
    codEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Endereco,
            key: 'codEndereco',
        },
        onDelete: 'CASCADE'   
    }
}, {
    timestamps: false
});

Cliente.sync({ force: false });

module.exports = Cliente;