const { GraphQLError } = require("graphql");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {},
  Mutation: {},
};

module.exports = resolvers;
