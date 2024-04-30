import { ValidationError } from 'sequelize';
import { ApiErrorEnum } from './enums/ErrorEnum';
import { HttpException, HttpStatus } from '@nestjs/common';

export const validationErrorCatcher = (error: ValidationError) => {
    ApiErrorEnum.EMAIL;
    switch (error.message) {
        case ApiErrorEnum.EMAIL:
            ApiErrorsHandler.emailError();
            break;
        default:
            console.log(error.message);
    }
};

export const ApiErrorsHandler = {
    emailError: () => {
        throw new HttpException('Mail invalide', HttpStatus.BAD_REQUEST);
    },
    unicityError: () => {
        throw new HttpException('Déjà existant', HttpStatus.CONFLICT);
    },
};
