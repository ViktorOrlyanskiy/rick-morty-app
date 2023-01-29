import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/router";

interface StProps {
    activeLink: boolean;
    children: string;
}
// пеерделать
const StTypography = styled(Typography)`
    cursor: pointer;
    transition: all 0.3s;
    border-bottom: 3px solid ${grey[800]};

    &:hover {
        color: ${grey[400]};
    }
    ${(props: StProps) =>
        props.activeLink &&
        `
    color: #3f88f7;
    border-bottom: 3px solid #3f88f7;
    &:hover {
        color: #3f88f7;
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
                <StTypography fontSize={20}>{name}</StTypography>
            </Link>
        </Grid>
    );
};
