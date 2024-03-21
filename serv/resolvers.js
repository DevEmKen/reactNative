import Todo from "./models/todo.js";
import Product from "./models/product.js";

const resolvers = {
  Query: {
    getProducts: async (_, { after, first, sort }, { dataSources }) => {
      const products = await dataSources.productAPI.getProducts({
        after,
        first,
        sort,
      });
      return products;
    },
    getProduct: async (root, args) => {
      const product = await Product.findById(args.id);
      return product;
    },
    // Welcome and getTodos are boilerplate example code from setup
    welcome: () => {
      return "Welcomeee";
    },
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    getTodo: async (root, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    },
  },
  Mutation: {
    addProduct: async (root, args) => {
      const newProduct = new Product({
        title: args.title,
        detail: args.detail,
        img: args.img,
        rating: args.rating,
      });
      await newProduct.save();
      return newProduct;
    },
    // Add, delete, update Todo are boilerplate example code from setup
    addTodo: async (root, args) => {
      const newTodo = new Todo({
        title: args.title,
        detail: args.detail,
        date: args.date,
      });
      await newTodo.save();
      return newTodo;
    },
    deleteTodo: async (root, args) => {
      await Todo.findByIdAndDelete(args.id);
      return "Todo deleted successfully";
    },
    updateTodo: async (root, args) => {
      const { id, title, detail, date } = args;
      const updatedTodo = {};
      if (title != undefined) {
        updatedTodo.title = title;
      }
      if (detail != undefined) {
        updatedTodo.detail = detail;
      }
      if (date != undefined) {
        updatedTodo.date = date;
      }
      const todo = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
      return todo;
    },
  },
};

export default resolvers;
