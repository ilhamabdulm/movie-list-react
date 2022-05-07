import lessToJS from 'less-vars-to-js';
import fs from 'fs';
import path from 'path';

export const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './variables.less'), 'utf8')
);
