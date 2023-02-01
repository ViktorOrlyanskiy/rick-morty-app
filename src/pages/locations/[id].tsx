import type { GetServerSidePropsContext } from "next";
import { Box } from "@mui/material";
import { HeadTag } from "@/widgets/Head/HeadTag";
import { LocationInfo, LocationSchema } from "@/entities/Location";
import { fetchLocationById } from "@/shared/api/apolloClient";
import { CharacterCard } from "@/entities/Character";
import { FetchCharacters } from "@/features/fetchCharacters";

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
    console.log(location);

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
                <FetchCharacters characters={residents} />
            </Box>
        </>
    );
};

export default LocationPage;
