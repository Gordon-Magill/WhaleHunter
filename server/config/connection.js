const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/spaceGriftWhaleHunter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection