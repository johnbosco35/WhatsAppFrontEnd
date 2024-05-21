
function ValidIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="700pt"
      height="700pt"
      viewBox="0 0 700 700"
      className={className}
    >
      <defs>
        <symbol id="v" overflow="visible">
          <path d="M.281-.016A.134.134 0 01.22 0H.172a.172.172 0 01-.11-.031.148.148 0 01-.046-.11c0-.05.015-.093.046-.125s.067-.047.11-.047c.02 0 .035.008.047.016.02 0 .039.008.062.016v.062C.258-.227.242-.234.234-.234A.084.084 0 00.187-.25c-.03 0-.054.012-.062.031-.012.012-.016.04-.016.078 0 .024.004.043.016.063.008.023.031.031.063.031h.046a.188.188 0 01.047-.031z"></path>
        </symbol>
        <symbol id="c" overflow="visible">
          <path d="M.203-.156C.191-.164.18-.172.172-.172c-.024 0-.04.008-.047.016C.113-.145.109-.13.109-.11V0H.031v-.219H.11v.032C.117-.207.13-.22.141-.22c.007-.008.02-.015.03-.015h.032z"></path>
        </symbol>
        {/* Other symbol definitions */}
      </defs>
      {/* Path definitions */}
      {/* Use elements */}
    </svg>
  );
}

export default ValidIcon;