import { HttpExceptionBodyMessage, HttpStatus } from '@nestjs/common';

export class ErrorDetails {
    description: string;
    errorType: string;
    message: HttpExceptionBodyMessage;
    error: HttpStatus;
    statusCode: number;
}
