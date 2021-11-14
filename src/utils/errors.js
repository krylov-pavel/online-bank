const CODE_ERROR = {
    'INVALID_PASSWORD': 'Неверный пароль',
    'EMAIL_NOT_FOUND': 'Такого email не существует',
    auth: 'Пожалуйста, войдите в систему'
}
export function errors(code) {
    return CODE_ERROR[code] ? CODE_ERROR[code] : 'Неизвестная ошибка'
}
