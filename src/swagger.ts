const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "swagger title",
      description:
        "swagger 떴냐?",
    },
    servers: [
      {
        url: "http://localhost:12345", // 요청 URL
      },
    ],
  },
  apis: ["./routers/*.js", "./routers/user/*.js"], //Swagger 파일 연동
}
const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }