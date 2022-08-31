const db = require("../db");

const todosService = {
  /**
   * 
   * @param {{
   *  piority?: "low" | "medium" | "high"
   * }} args
   */
  getList: (args) => {
    const list = db.todos.JSON();
    let data = Object.keys(list).map((id) => ({
      id,
      ...list[id]
    }));
    if (["low", "medium", "high"].includes(args.piority)) {
      data = [...data].filter((value) => value.piority === args.piority);
    }
    return data;
  },

  /**
   * 
   * @param {{
   *  content: string;
   *  piority?: "low" | "medium" | "high"
   * }} args 
   */
  create: (args) => {
    const { content, piority = "medium" } = args;
    const list = db.todos.JSON();
    const id = Object.keys(list).length + 1;
    db.todos.set(id, { content, piority });
    return {
      id, content, piority
    }
  },
  /**
   * 
   * @param {{
   *  id: string;
   *  content?: string;
   *  piority?: "low" | "medium" | "high"
   * }} args
   */
  update: (args) => {
    const { id, content, piority } = args;
    const item = db.todos.get(id);
    if (!item) return null;
    const update = {};
    if (typeof content !== "undefined") update.content = content;
    if (["low", "medium", "high"].includes(args.piority)) update.piority = piority;
    const newItem = { ...item, ...update };
    db.todos.set(id, newItem);
    return {
      ...id,
      newItem
    }
  },

  /**
   * 
   * @param {{
   *  id: string;
   * }} args 
   */
  delete: (args) => {
    return db.todos.delete(args.id);
  },

  /**
   * 
   * @param {{ id: string }} args 
   */
  get: (args) => {
    return db.todos.get(args.id) || null;
  }
}

module.exports = todosService;