import { Box, Card, Grid } from "@mui/material";
import { HeadTag } from "@/widgets/Head/HeadTag";

export default function Episode() {
    return (
        <>
            <HeadTag title="Episode" desc="Episode page" />
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card component="section" variant="outlined">
                        сайдбар
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card component="section" variant="outlined">
                        <Box sx={{ my: 2 }}>
                            {[...new Array(32)]
                                .map(
                                    () =>
                                        "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
                                )
                                .join("\n")}
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
