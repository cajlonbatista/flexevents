const mongoose = require('mongoose');

const Onevent = mongoose.model("Onevent");

module.exports = {
  async show(req, res) {
    try {
      const onevents = await Onevent.paginate({ status: 'active' }, { page: 1, limit: 4});

      return res.status(200).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async search(req, res) {
    try {
      const { tag } = req.params;
      const onevents = await Onevent.find({ tags: tag, status: 'active' });

      return res.status(200).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const onevents = await Onevent.findByIdAndUpdate(id, req.body, { new: true });

      return res.status(201).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Onevent.findByIdAndDelete(id);
      
      return res.status(201).json({ message: 'Sucess' });
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async index(req, res) {
    try {
      const { id } = req.params;
      const onevents = await Onevent.findById(id);

      return res.status(200).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async create(req, res) {
    try {
      const onevents = await Onevent.create(req.body);
      
      return res.status(200).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }
};