import { HttpResponse } from "../models/http-response-model"

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            "message": "Success!",
        }
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async (error: Error): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: error.message
    }
}

export const notFound = async (message: string): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: {
            "message": message || "Resource not found"
        }
    }
}

export const internalServerError = async (error: Error): Promise<HttpResponse> => {
    return {
        statusCode: 500,
        body: {
            "message": error.message || "Internal server error"
        }
    }
}

