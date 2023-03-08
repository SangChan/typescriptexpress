const swaggerAutogen = require('swagger-autogen')()

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "swagger title",
      description:
        "swagger 떴냐?",
    },
  },
  apis: ["**/*.ts"], //Swagger 파일 연동
}

const outputFile = './swagger_output.json' // swagger-autogen이 실행 후 생성될 파일 위치와 이름
const endpointsFiles = ['./src/app.ts'] // 읽어올 Router가 정의되어 있는 js파일들

//아래 코드에 .then() 이후를 삭제한다.
swaggerAutogen(outputFile, endpointsFiles, options);