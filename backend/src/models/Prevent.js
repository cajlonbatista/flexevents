const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PreventSchema = new mongoose.Schema({
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
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  neighborhood: {
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
    default: 'presential',
  },
});

PreventSchema.plugin(mongoosePaginate);
mongoose.model('Prevent', PreventSchema);
