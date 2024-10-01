const connectDB = require("../config/db.js");

exports.create = async (address) => {
    const { logradouro, numero, cep, bairro, cidade, uf } = address;
    const db = await connectDB();
    return await db.query(`
        INSERT INTO tb_endereco (logradouro, numero, cep, bairro, cidade, uf)
        VALUES (?, ?, ?, ?, ?, ?)`, [logradouro, numero, cep, bairro, cidade, uf]);
}