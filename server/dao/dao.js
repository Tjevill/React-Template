module.exports = class Dao {
    constructor(pool) {
        // Dependency injection
        this.pool = pool;
    }

    query(sql, params, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) {
                console.log("dao: connected to database");
                callback(500, { error: "Error connecting!" });
            } else {
                connection.query(sql, params, (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        callback(500, { error: "Error querying" });
                    } else {
                        // Returning rows.
                        callback(200, rows);
                    }
                });
            }
        });
    }
};
