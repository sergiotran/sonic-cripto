import React from "react";
import Image from "next/image";
import Button from "./button";

const Center = () => {
  return (
    <div className="h-full">
      <div className="flex flex-row gap-3 justify-center">
        <h1 className="text-[120px] text-lg-[240px] text-white text-center drop-shadow-[0_10px_1px_#000]">
          $KOG
        </h1>
      </div>
      <div className="flex flex-col gap-3 text-[#8b1915] rounded-md border-2 border-[#8b1915] mb-10 items-center justify-center py-3 basis-auto bg-white">
        <div className="flex flex-row gap-3">
          <h3>CA:</h3>
          <span>0xC89BfD34a6369C0F8cCF43Ba38cB01b453d59729</span>
        </div>
        <div className="flex flex-row gap-3">
          <h3>Domain:</h3>
          <span>Knuckle@kogerc.info</span>
        </div>
      </div>
      <p className="border-white border-2 bg-[#d4241d] p-5 rounded-md text-lg max-w-4xl text-white font-bold">
        Knuckles OG is the ultimate fusion of memes and cryptocurrency. Join a
        vibrant community, create and share memes, and explore exciting
        investment opportunities with this unique digital asset inspired by the
        iconic Knuckles the Echidna character. Get ready to dive into the world
        of Knuckles OG today!
      </p>
      <div className="flex flex-row gap-5 justify-center mt-10">
        <Button href="https://t.me/knucklesog">Twitter</Button>
        <Button href="https://twitter.com/knucklesOG_eth">Telegram</Button>
      </div>
    </div>
  );
};

export default Center;
