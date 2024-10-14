import path from 'path';
const __filename =import.meta.filename;
const __gitname =import.meta.gitname;
export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}