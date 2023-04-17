const swaggerAutogen = require('swagger-autogen')()

const options = {
  info: {
    title: "swagger 타이틀",
    description: "swagger 떴냐?",
  },
  host: "localhost:12345",
  schemes: ["http"],
}

const outputFile = './swagger_output.json' // swagger-autogen이 실행 후 생성될 파일 위치와 이름
const endpointsFiles = ['./src/app.ts', './src/routes/api/*.ts'] // 읽어올 Router가 정의되어 있는 js파일들

//아래 코드에 .then() 이후를 삭제한다.
swaggerAutogen(outputFile, endpointsFiles, options);