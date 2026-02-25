import { Link } from "@tanstack/react-router";

import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
  ] as const;

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/logo-icon.svg"
              alt="SignSecure"
              className="h-7 w-auto"
            />
            <span className="font-display font-bold text-base tracking-tight text-foreground">
              Sign<span className="text-brand-cobalt">Secure</span>
            </span>
          </Link>
          <nav className="flex gap-4 text-sm">
            {links.map(({ to, label }) => {
              return (
                <Link key={to} to={to}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
}
