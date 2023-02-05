import { LocationCard, LocationSchema } from "@/entities/Location";
import { fetchAllLocatios } from "@/shared/api/apolloClient";
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
                {locations.map((location) => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </Grid>
        </>
    );
};

export default Locations;
