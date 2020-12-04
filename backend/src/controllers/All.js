const mongoose = require('mongoose');

const Onevent = mongoose.model("Onevent");
const Prevent = mongoose.model("Prevent");

module.exports = {
  async all(req, res) {
    var events = []; 
    const onevents = await Onevent.paginate({ status: 'active' }, { page: 1, limit: 4 });
    const prevents = await Prevent.paginate({ status: 'active' }, { page: 1, limit: 4 });
    for (const on of onevents.docs) {
      events.push(on);
    }
    for (const ot of prevents.docs) {
      events.push(ot);
    }
    res.status(200).json(events);
  },
  async search(req, res) {
    var events = [];
    const { tag } = req.params;
    const onevents = await Onevent.paginate({ tags: tag });
    const prevents = await Prevent.paginate({ tags: tag });
    for (const on of onevents.docs) {
      events.push(on);
    }
    for (const ot of prevents.docs) {
      events.push(ot);
    }
    res.status(200).json(events);
  }
}