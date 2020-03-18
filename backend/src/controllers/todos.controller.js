import TodosRepository from "../repositories/todo.repository";

export default {
  async index(req, res) {
    try {
      const { contains = "" } = req.query;

      const todosFilters = {
        description: {
          $regex: contains,
          $options: "i"
        }
      };

      const todos = await TodosRepository.find(todosFilters);

      return res.json(todos);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ error });
    }
  },

  async store(req, res) {
    const { description } = req.body;
    try {
      await TodosRepository.insert({ description });

      return res.status(204).json([]);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  async update(req, res) {
    const { done } = req.body;
    const { id } = req.params;

    try {
      await TodosRepository.update(id, done);
      return res.status(204).json([]);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  async destroy(req, res) {
    const { id } = req.params;
    try {
      await TodosRepository.remove(id);
      return res.status(204).json([]);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
};
