import swaggerAutogen from 'swagger-autogen';

import '../config/router'

const outputFile = '../swagger/swagger_output.json';
const endpointsFiles = [
  '../../modules/pages/pages.route',
  '../../modules/auth/auth.route'
];
const config = {}

swaggerAutogen()(outputFile, endpointsFiles, config).then(async () => {
  await import('../../index');
})