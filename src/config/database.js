require("dotenv").config({ path: ".env" });

module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || "jest_node_api",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DRIVE || "mysql",
  define: {
    timestamps: true,
    underscored: true,
  },
};
