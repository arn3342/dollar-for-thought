/**
 *
 * @param {*} req
 * @param {Response} res
 * @param {*} next
 */
exports.upload_resume = (req, res, next) => {
  // Do your processing here...

  // If success, simply call the below line
  // res.status(200).send('your response object or a string')
  res.status(200).send('Uploaded CV')

  // else call
  // res.status(400).send('your response object or error message')
}

function read_resume () {}
