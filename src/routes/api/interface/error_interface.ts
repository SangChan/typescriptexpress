export interface ErrorCheckIntrerface {
    code : Number
    result : String
    message : String
    errorMessage(code: Number) : String
}