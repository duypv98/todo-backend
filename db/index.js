const JSONdb = require("simple-json-db");
const fs = require("fs");

const todoListDBPath = `${__dirname}/data/todos.json`;

function initDB() {
  [
    todoListDBPath
  ].forEach((dbPath) => {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, "{}");
    }
  })
}

const todos = new JSONdb(todoListDBPath);

module.exports = {
  initDB,
  todos
}
