import { Fragment, ReactElement } from "react";

interface ListProps<T> {
    data: T[];
    renderItem: (props: T) => ReactElement;
    renderEmpty?: ReactElement;
}

export function List<T>(props: ListProps<T>): ReactElement | null {
    const { data = [], renderItem, renderEmpty = null } = props;

    return data.length ? (
        <>
            {data.map((item, i) => (
                <Fragment key={i}>{renderItem(item)}</Fragment>
            ))}
        </>
    ) : (
        renderEmpty
    );
}
