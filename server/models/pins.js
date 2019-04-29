// mongoose shcema on what to store fror pins?
const mongoose = require('mongoose');

const pinSchema = mongoose.Schema({
  owner: {
    name: { type: String, required: true },
    service: { type: String, required: true },
    id: { type: String, required: true },
  },
  imgDescription: { type: String, required: true },
  imgLink: { type: String, required: true },
  timeStamp: Number,
  savedBy: {
    type: [{
      name: { type: String, required: true },
      service: { type: String, required: true },
      id: { type: String, required: true },
    }],
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('pin', pinSchema);
