import { ValidationError } from 'sequelize';
import { ApiErrorEnum } from './enums/ErrorEnum';
import { HttpException, HttpStatus } from '@nestjs/common';

export const validationErrorCatcher = (error: ValidationError) => {
    for(const validationError of error.errors) {
        switch (error.message) {
            case ApiErrorEnum.EMAIL:
                ApiErrorsHandler.emailError();
                break;
            case ApiErrorEnum.UNIQUE:
                    ApiErrorsHandler.unicityError();
                break;
            default:
                console.log(validationError.message);
        }
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
