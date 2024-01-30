import FooterLogo from "~/assets/images/footer-logo.svg";
import Links from "./Links";

export default function Footer() {
  const footerLinks = [
    {
      title: "Hakkında",
    },
    {
      title: "Erişebilirlik",
    },
    {
      title: "Yardım Merkezi",
    },
    {
      title: "Gizlilik ve Şartlar",
      dropdown: true,
    },
    {
      title: "Reklam Tercihleri",
    },
    {
      title: "Reklam",
    },
    {
      title: "Ticari Hizmetler",
      dropdown: true,
    },
    {
      title: "LinkedIn uygulamasını yükle",
    },
    {
      title: "Daha Fazla",
    },
  ];

  return (
    <div className="mb-2 overflow-hidden">
      <div className="p-4 flex items-center justify-center flex-wrap">
        <Links links={footerLinks} />
      </div>

      <div className="flex items-center justify-center text-xs gap-x-0.5 text-white text-opacity-90">
        <img src={FooterLogo} alt="Footer logo" height={14} />
        <div>LinkedIn Corporation © 2024</div>
      </div>
    </div>
  );
}
