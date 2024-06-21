import mysql from 'mysql';

const connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'billionaire20',
    database: 'rivernews',
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapeedValues) =>
        new Promise((resolve, reject) =>{
            connection.query(queryString, escapeedValues, (error, results, fields) =>{
                if (error) reject(error);
                resolve({results, fields});
            })
            
        }),
        end: () => connection.end(),
}