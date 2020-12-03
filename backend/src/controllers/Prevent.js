const mongoose = require('mongoose');

const Prevent = mongoose.model("Prevent");

module.exports = {
  async show(req, res) {
    try {
      const onevents = await Prevent.find();
      return res.status(200).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async search(req, res) {
    try {
      const { tag } = req.params;
      const onevents = await Prevent.find({ tags: tag });
      return res.status(200).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const onevents = await Prevent.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(201).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Prevent.findByIdAndDelete(id);
      return res.status(201).json({ message: 'Sucess' });
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async index(req, res) {
    try {
      const { id } = req.params;
      const onevents = await Prevent.findById(id);
      return res.status(200).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  async create(req, res) {
    try {
      const onevents = await Prevent.create(req.body);
      return res.status(200).json(onevents);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }
};