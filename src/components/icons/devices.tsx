export function TabletIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <g clipPath="url(#a)">
        <path d="M12 20h1v2h-1v-2z"></path>
        <path d="M21 1H4a1 1 0 00-1 2v19a1 1 0 001 2h17a1 1 0 001-2V3a1 1 0 00-1-2zm0 2v15H4V3h17zM4 22v-3h17v3H4z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h25v25H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path d="M8 23l-1-1-1-1V4l1-1 1-1h9l1 1 1 1v17l-1 1-1 1H8zm-1-3v2h11v-2H7zm0-1h11V6H7v13zM7 5h11V3H7v2z"></path>
    </svg>
  );
}

export function DesktopIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path d="M10 21v-1l2-2H4l-1-2V6l1-1 1-1h15l1 1 1 1v10a2 2 0 01-2 2h-7l2 2v1h-5zm-6-6h17V5H4v10z"></path>
    </svg>
  );
}

export function WatchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path d="M16 7H9L7 9v7l2 2h7l2-2V9l-2-2zm0 0V3H9v4h7zm0 11v4H9v-4h7z"></path>
    </svg>
  );
}

export function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path d="M8 21H6l-1-1-1-1v-6a8 8 0 013-6 8 8 0 019-2 8 8 0 015 8v6l-1 1-1 1h-2v-7h3v-1l-2-6-5-2-6 2-2 6v1h3v7zm-1-6H5v5h2v-5zm11 0v5h2v-5h-2z"></path>
    </svg>
  );
}
