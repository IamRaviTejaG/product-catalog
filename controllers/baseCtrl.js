import path from 'path'

export default {
  basePage: (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../static/base.html'))
  }
}
