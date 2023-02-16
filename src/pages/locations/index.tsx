import { Grid } from "@mui/material";
import { GetServerSidePropsContext } from "next";
import { HeadTag } from "@/widgets/Head";
import { Pagination } from "@/features/Pagination";
import { LocationCard, LocationSchema } from "@/entities/Location";
import { fetchAllLocatios, InfoSchema } from "@/shared/api/apolloClient";
import { List } from "@/shared/ui/List";

interface InfoProps extends InfoSchema {
    page: string;
}

interface LocationsProps {
    locations: LocationSchema[];
    info: InfoProps;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page } = context?.query;
    const response = await fetchAllLocatios(Number(page) || 1);

    return {
        props: {
            locations: response?.data?.locations?.results as LocationSchema,
            info: {
                ...response?.data?.locations?.info,
                page: page || 1,
            } as InfoProps,
        },
    };
}

const Locations: React.FC<LocationsProps> = ({ locations, info }) => {
    return (
        <>
            <HeadTag title="Locations" desc="Locations page" />
            <Grid container spacing={2} flexDirection="column">
                <List
                    data={locations}
                    renderItem={(data) => <LocationCard location={data} />}
                />
                <Pagination page={Number(info.page)} pages={info.pages} />
            </Grid>
        </>
    );
};

export default Locations;
