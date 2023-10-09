import path from 'path'

const __dirname = path.resolve()

const PATH = {
  home: '/',
  buildLoc: 'client/dist',
  buildView: path.resolve(__dirname, 'client', 'dist', 'index.html'),
}

export default PATH
