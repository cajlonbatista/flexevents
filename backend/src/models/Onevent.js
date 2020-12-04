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
  start: {
    type: String,
    required: true,
  },
  edition: {
    type: Number,
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
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

OneventSchema.plugin(mongoosePaginate);
mongoose.model("Onevent", OneventSchema);
