import { Box, Card, Grid } from "@mui/material";
import { HeadTag } from "@/widgets/Head/HeadTag";

export default function Location() {
    return (
        <>
            <HeadTag title="Location" desc="Location page" />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card component="section" variant="outlined">
                        сайдбар
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card component="section" variant="outlined"></Card>
                </Grid>
            </Grid>
        </>
    );
}
