export interface ErrorCheckIntrerface {
    code : Int
    result : String
    message : String
    errorMessage(res: Boolean) : String
}