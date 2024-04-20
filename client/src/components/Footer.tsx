import { Heart } from "lucide-react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="pt-5 hidden md:flex  pb-3 items-center gap-1 justify-center  font-black">
      <p>awocato</p> | <p>{year}</p> |{" "}
      <p className="flex gap-1">
        made with <Heart className="w-4 text-red-500 fill-red-500 " />
      </p>
    </div>
  );
}

export default Footer;
