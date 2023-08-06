import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const swaggerDefinition = {
    info: {
        title: 'REST API for my App', // Title of the documentation
        version: '1.0.0', // Version of the app
        description: 'This is the REST API for my product', // short description of the app
    },
    host: 'localhost:3000', // the host or url of the app
};

const options: Options = {
    swaggerDefinition,
    explorer: true,
    apis: ['./**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
