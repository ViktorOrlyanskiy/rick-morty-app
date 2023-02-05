/**
 * switch-case для JSX елементов
 * @param key
 * @param cases
 * @returns
 */

export function switchElement<T>(
    key: T,
    cases: { value: T; element: React.ReactNode }[]
): React.ReactNode {
    let element: React.ReactNode = null;

    cases.forEach((c) => {
        if (c.value === key) {
            element = c.element;
        }
    });

    return element;
}
