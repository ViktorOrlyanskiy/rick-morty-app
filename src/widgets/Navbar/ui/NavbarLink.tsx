import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";

interface StProps {
    activeLink?: boolean;
    children: string;
}
const StSpan = styled.span`
    border-bottom: 3px solid ${grey[800]};
    transition: all 0.3s;
    font-size: 20px;
    cursor: pointer;

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
    const { pathname } = useRouter();
    console.log(pathname);
    console.log(path);
    const isActiveLink = pathname.includes(path);

    return (
        <Grid item>
            <Link href={path}>
                <StSpan activeLink={isActiveLink}>{name}</StSpan>
            </Link>
        </Grid>
    );
};
