import { HeadTag } from "@/widgets/Head/HeadTag";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFoundPage() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
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
                    Перехожу на <Link href="/">Главную страницу</Link> через 3
                    секунды...
                </p>
            </div>
        </>
    );
}
