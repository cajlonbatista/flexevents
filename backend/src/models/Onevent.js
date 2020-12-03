const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const OneventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now(),
  },
  tags: [
    {
      type: String,
      required: false,
    }
  ],
  status: {
    type: String,
    default: 'online',
  }
});

OneventSchema.plugin(mongoosePaginate);
mongoose.model("Onevent", OneventSchema);
