import Todo from "./models/Todo.js";

const resolvers = {
  Query: {
    welcome: () => {
      return "Welcomeee";
    },
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
  },
};

export default resolvers;
