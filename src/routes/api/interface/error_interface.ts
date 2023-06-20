export interface ErrorCheckIntrerface {
    code : Number
    result : String
    message : String
    errorMessage(res: Boolean) : String
}