import Head from "next/head";

interface HeadTag {
    title: string;
    desc: string;
}

export const HeadTag: React.FC<HeadTag> = ({ title, desc }) => {
    return (
        <Head>
            <title>Rick & Morty Wiki | {title}</title>
            <meta name="description" content={desc} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
