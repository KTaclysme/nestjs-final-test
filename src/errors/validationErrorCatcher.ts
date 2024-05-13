import { ValidationErrorItem } from 'sequelize';
import { ValidationErrorEnum } from './enums/ErrorEnum';
import { HttpException, HttpStatus } from '@nestjs/common';

export const validationErrorCatcher = (
    validationErrorItem: ValidationErrorItem[],
    // pensez à des params pour garder une trace du parcours [ User ]: [ addUser ] : validationError.message
) => {
    for (const validationError of validationErrorItem) {
        switch (true) {
            case validationError.message.includes(ValidationErrorEnum.EMAIL):
                ApiErrorsHandler.emailError();
                break;
            case validationError.message.includes(ValidationErrorEnum.ID):
                ApiErrorsHandler.idError();
                break;
            case validationError.message.includes(ValidationErrorEnum.UNIQUE):
                ApiErrorsHandler.unicityError();
                break;
            default:
                console.log({
                    validationErrorMessage: validationError.message,
                });
                ApiErrorsHandler.default(validationError.message);
        }
    }
};

export const ApiErrorsHandler = {
    emailError: () => {
        throw new HttpException('Mail invalide', HttpStatus.BAD_REQUEST);
    },
    idError: () => {
        throw new HttpException('Id invalide', HttpStatus.CONFLICT);
    },
    unicityError: () => {
        throw new HttpException('Déjà existant', HttpStatus.CONFLICT);
        // return new HttpException('Déjà existant', HttpStatus.CONFLICT);
    },
    default: (validationErrorMessage: string) => {
        throw new HttpException(validationErrorMessage, HttpStatus.BAD_REQUEST);
    },
};
