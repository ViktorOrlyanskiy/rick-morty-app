import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HeadTag } from "@/widgets/Head";
import { getRouteMain } from "@/shared/consts/routes";

export default function NotFoundPage() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push(getRouteMain());
        }, 3000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <HeadTag title="404" desc="Error" />
            <div className="not-found">
                <h1>Ой...</h1>
                <h2>Такой страницы здесь нет!</h2>
                <p>
                    Перехожу на
                    <Link href={getRouteMain()}>Главную страницу</Link> через 3
                    секунды...
                </p>
            </div>
        </>
    );
}
