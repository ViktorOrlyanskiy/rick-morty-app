import styled from "@emotion/styled";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { ContainerPage } from "@/shared/ui/ContainerPage";

const StLink = styled.a`
    border-bottom: 1px solid ${(p: any) => p.color};

    &:hover {
        color: ${(p: any) => p.color};
    }
`;

interface FooterProps {}

export const Footer: React.FC<FooterProps> = (props) => {
    const {} = props;
    const theme = useTheme();
    const color = theme.palette.info.main;
    return (
        <Box
            component="footer"
            height={110}
            p={2}
            sx={{ backgroundColor: "#424242" }}
        >
            <ContainerPage>
                <Stack direction="row" justifyContent="space-between">
                    <Box>
                        <Typography fontSize={16} color="white" gutterBottom>
                            Characters: 826
                        </Typography>
                        <Typography fontSize={16} color="white" gutterBottom>
                            Locations: 126
                        </Typography>
                        <Typography fontSize={16} color="white" gutterBottom>
                            Episodes: 51
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontSize={16} color="white" gutterBottom>
                            By{" "}
                            <StLink
                                color={color}
                                href="https://github.com/ViktorOrlyanskiy/rick-morty-app"
                            >
                                Viktor Orlynskiy
                            </StLink>{" "}
                            2023
                        </Typography>
                        <Typography fontSize={16} color="white" gutterBottom>
                            Data source:{" "}
                            <StLink
                                color={color}
                                href="https://rickandmortyapi.com/"
                            >
                                Rick and Morty Api
                            </StLink>
                        </Typography>
                    </Box>
                </Stack>
            </ContainerPage>
        </Box>
    );
};
