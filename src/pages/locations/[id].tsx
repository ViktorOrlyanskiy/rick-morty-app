import { Box } from "@mui/material";
import type { GetServerSidePropsContext } from "next";
import { HeadTag } from "@/widgets/Head";
import { ShowsCharacters } from "@/entities/Character";
import { LocationInfo, LocationSchema } from "@/entities/Location";
import { fetchLocationById } from "@/shared/api/apolloClient";

interface LocationProps {
    location: LocationSchema;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const id = context?.params?.id;

    const { data } = await fetchLocationById(id);

    return {
        props: {
            location: data.location as LocationSchema,
        },
    };
}

const LocationPage: React.FC<LocationProps> = ({ location }) => {
    const { name, type, dimension, residents } = location;

    return (
        <>
            <HeadTag title={name} desc={`${name} page`} />
            <LocationInfo
                name={name}
                type={type}
                count={residents.length}
                dimension={dimension}
            />
            <Box mt={6}>
                <ShowsCharacters characters={residents} />
            </Box>
        </>
    );
};

export default LocationPage;
