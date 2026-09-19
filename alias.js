//require('module-alias/register');

const path = require('path');
const moduleAlias = require('module-alias');

moduleAlias.addAlias(
    '@utils',
    path.join(__dirname, 'utils')
);

moduleAlias.addAlias(
    '@tests',
    path.join(__dirname, 'tests')
);