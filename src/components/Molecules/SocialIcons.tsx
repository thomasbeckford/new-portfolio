import SocialIcon from "../Atoms/SocialIcon";

const socialIcons = [
  {
    name: "facebook",
  },
  {
    name: "twitter",
  },
  // {
  //   name: "instagram",
  //   icon: IconInstagram,
  // },
  {
    name: "linkedin",
  },
];

export default function SocialIcons() {
  return (
    <>
      {socialIcons.map((item) => (
        <SocialIcon key={item.name} name={item.name} />
      ))}
    </>
  );
}
