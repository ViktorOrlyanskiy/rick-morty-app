import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/router";

interface StProps {
    active?: boolean;
    children: string;
}

const StTypography = styled(Typography)`
    cursor: pointer;
    transition: all 0.3s;
    border-bottom: 3px solid ${grey[800]};

    &:hover {
        color: ${grey[400]};
    }
    ${(props: StProps) =>
        props.active &&
        `
    color: ${grey[500]};
    border-bottom: 3px solid ${grey[500]};
    &:hover {
        color: ${grey[500]};
    }
    `}
`;

interface NavbarLink {
    path: string;
    name: string;
}

export const NavbarLink: React.FC<NavbarLink> = ({ path, name }) => {
    const router = useRouter();
    const isActiveLink = router.pathname === path;

    return (
        <Grid item>
            <Link href={path}>
                <StTypography active={isActiveLink || undefined} fontSize={24}>
                    {name}
                </StTypography>
            </Link>
        </Grid>
    );
};
