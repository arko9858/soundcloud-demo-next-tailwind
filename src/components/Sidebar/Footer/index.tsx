const mockData = [
  {
    label: "Legal",
    href: "/",
  },
  {
    label: "Privacy",
    href: "/",
  },
  {
    label: "Cookie Policy",
    href: "/",
  },
  {
    label: "Consent Manager",
    href: "/",
  },
  {
    label: "Imprint",
    href: "/",
  },
  {
    label: "Artist Resources",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "Charts",
    href: "/",
  },
];

const Footer = () => {
  return (
    <div className="text-gray-4 text-xs tracking-wide">
      <div className="flex flex-wrap py-2">
        {mockData.map((el) => (
          <div key={el.label}>
            <a href={el.href}>{el.label}</a>
            <span>&nbsp;-&nbsp;</span>
          </div>
        ))}
      </div>
      <div className="text-gray-1">
        <span className="text-blue-400 font-semibold">Language: </span>
        <span className="font-thin">English (US)</span>
      </div>
    </div>
  );
};

export default Footer;
