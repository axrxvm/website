import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-background text-foreground">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Woops, wrong door.</p>
      <p className="text-muted-foreground mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2 rounded-xl shadow bg-primary text-primary-foreground hover:bg-primary/90 transition"
      >
        Take me home
      </Link>
    </div>
  );
};

export default NotFound;
