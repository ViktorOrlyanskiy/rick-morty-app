import { Card, Grid } from "@mui/material";
import { HeadTag } from "@/widgets/Head";

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
                    <Card component="section" variant="outlined"></Card>
                </Grid>
            </Grid>
        </>
    );
}
