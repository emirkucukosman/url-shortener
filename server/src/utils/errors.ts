export const ErrorTypes = {
    NotFound: {
        name: 'NotFound',
        code: 404,
    },
    RequestValidation: {
        name: 'RequestValidationError',
        code: 400,
    },
    AuthorizationError: {
        name: 'AuthorizationError',
        code: 401,
    },
};

export class RequestValidationError extends Error {
    constructor(errors: Record<string, any>) {
        super();
        this.name = ErrorTypes.RequestValidation.name;
        this.message = JSON.stringify(errors);
        Error.captureStackTrace(this, RequestValidationError);
    }
}

export class NotFound extends Error {
    constructor(...args: any[]) {
        super(...args);
        this.name = ErrorTypes.NotFound.name;
        Error.captureStackTrace(this, NotFound);
    }
}
export class AuthorizationError extends Error {
    constructor(...args: any[]) {
        super(...args);
        this.message = 'You are not authorized';
        Error.captureStackTrace(this, AuthorizationError);
    }
}