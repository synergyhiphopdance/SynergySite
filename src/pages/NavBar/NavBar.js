import {Navbar, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export function NavBar() {
  return (
    <Navbar>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href=''>
          About Synergy
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/performances">
          Best of Synergy
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/team">
          Meet the Team
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/auditions">
          2023-2024 Auditions
        </Link>
      </NavbarItem>
    </NavbarContent>
    </Navbar>
  );
}