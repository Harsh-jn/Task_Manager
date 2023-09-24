const notFound = (req,res) =>res.status(404).send('routes does not exist')

module.exports = notFound