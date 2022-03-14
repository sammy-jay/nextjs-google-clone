import Image from "next/image";

const Avatar = ({ url, className }) => {
  return (
    <Image
      src={url}
      height={50}
      width={50}
      alt="profile pic"
      className={`h-40 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    />
  );
};

export default Avatar;
