const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = require('../endereco/modeloEndereco')

const Proprietario = conexao.define('proprietario', {
    codProprietario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    CPF:{
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true
    },
    CNPJ:{
        type: Sequelize.STRING(14),
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
    },
    dataNascimento:{
        type: Sequelize.DATE,
        allowNull: false
    }
    
}, {
    timestamps: false
});

Proprietario.sync({ force: false });

module.exports = Proprietario;