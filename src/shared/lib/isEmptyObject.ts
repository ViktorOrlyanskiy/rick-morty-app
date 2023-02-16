/**
 * Проверяет пустой обьект или нет
 * @param object
 * @returns boolean flag
 */

export function isEmptyObject(object: any) {
    return Object.keys(object).length === 0;
}
