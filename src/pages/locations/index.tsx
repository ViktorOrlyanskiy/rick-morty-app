import { LocationCard, LocationSchema } from "@/entities/Location";
import { fetchAllLocatios } from "@/shared/api/apolloClient";
import { List } from "@/shared/ui/List";
import { HeadTag } from "@/widgets/Head/HeadTag";
import { Grid } from "@mui/material";

interface LocationsProps {
    locations: LocationSchema[];
}

export async function getServerSideProps() {
    const response = await fetchAllLocatios();

    return {
        props: {
            locations: response?.data?.locations?.results as LocationSchema,
        },
    };
}

const Locations: React.FC<LocationsProps> = ({ locations }) => {
    return (
        <>
            <HeadTag title="Locations" desc="Locations page" />
            <Grid container spacing={2} flexDirection="column">
                <List
                    data={locations}
                    renderItem={(data) => <LocationCard location={data} />}
                />
            </Grid>
        </>
    );
};

export default Locations;
