import { pool } from "./index.js";

export const find = async () => {
    const QUERY = "SELECT * FROM products";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        return result[0];
    } catch(error){
        console.log("Ocorreu um erro ao buscar todos os produtos!");
        throw error;
    }
};

export const findByID = async (id) => {
    const QUERY = "SELECT * FROM products WHERE id = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[id]);
        return result[0];
    } catch(error){
        console.log("Ocorreu um erro ao buscar o produto!");
        throw error;
    }
};

export const create = async (title, description, price, image) => {
    const QUERY = `INSERT INTO products (title, description, price, image) VALUES (?,?,?,?) `;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[title, description, price, image]);
        return result;
    } catch(error){
        console.log("Ocorreu um erro ao cadastrar o produto!");
        throw error;
    }
};

export const update = async (title, description, price, image, id) => {
    const QUERY = `UPDATE products SET title = ?, description = ?, price = ?, image = ? WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[title, description, price, image, id]);
        return result[0];
    } catch(error){
        console.log("Ocorreu um erro ao cadastrar o produto!");
        throw error;
    }
};

export const deleteProd = async (id) => {
    const QUERY = `DELETE FROM products WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        return result[0];
    } catch(error){
        console.log("Ocorreu um erro ao cadastrar o produto!");
        throw error;
    }
};