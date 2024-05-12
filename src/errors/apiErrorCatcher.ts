import { ApiErrorEnum } from './enums/ErrorEnum';
import { HttpException, HttpStatus } from '@nestjs/common';

export const apiErrorCatcher = (apiErrorEnum: ApiErrorEnum) => {
    switch (true) {
        case apiErrorEnum.includes(ApiErrorEnum.USER_NULL):
            ApiErrorsHandler.userNullError();
            break;
        default:
            console.log({
                apiErrorEnum: apiErrorEnum,
            });
            ApiErrorsHandler.default(apiErrorEnum);
    }
};

export const ApiErrorsHandler = {
    userNullError: () => {
        throw new HttpException('User is null', HttpStatus.BAD_REQUEST);
    },
    default: (apiErrorMessage: string) => {
        throw new HttpException(apiErrorMessage, HttpStatus.BAD_REQUEST);
    },
};
