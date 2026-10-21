import TechCard from "./techCard";
import type { Itechnology } from "../typesFolder/techCardType";
import { use, useState } from "react";
import Stack from "./Stack";
import type { Iimg } from "../typesFolder/imagetypeCard";
import ImageHolder from "./imageHolder";

const MainBody = ({
  techDataPromise,
  ImageCardFetch,
}: {
  techDataPromise: Promise<Itechnology[]>;
  ImageCardFetch: Promise<Iimg[]>;
}) => {
  const techData = use(techDataPromise);
  const imgData = use(ImageCardFetch);

  const [savedCards, setSavedCards] = useState<Itechnology[]>([]);

  // Add card
  const handleSaveCard = (card: Itechnology) => {
    setSavedCards((previousCards) => {
      // Prevent duplicate technologies
      if (previousCards.some((item) => item.id === card.id)) {
        return previousCards;
      }

      return [...previousCards, card];
    });
  };

  // Remove one card
  const handleRemoveCard = (id: number) => {
    setSavedCards((previousCards) =>
      previousCards.filter((card) => card.id !== id),
    );
  };

  // Remove all cards
  const handleRemoveAll = () => {
    setSavedCards([]);
  };

  return (
    <div>
      <div className="pt-28">
        <h2 className="text-[#0F172A] w-304 h-10 font-extrabold text-[36px] leading-none pb-10">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent font-extrabold">
            Technologies
          </span>
        </h2>
        <p className="text-[#64748B] text-[16px] ">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-4 gap-10 px-5">
        <div className="col-span-3 grid grid-cols-3 gap-10">
          {techData.map((tech: Itechnology) => {
            const isSaved = savedCards.some((card) => card.id === tech.id);
            return (
              <TechCard
                handleSaveCard={handleSaveCard}
                techData={tech}
                isSaved={isSaved}
                key={tech.id}
              />
            );
          })}
        </div>

        <div className="col-span-1">
          <Stack
            cards={savedCards}
            handleRemoveCard={handleRemoveCard}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
      <div className="flex gap-4 w-full max-w-2xl mx-auto">
        {imgData.map((img: Iimg) => (
          <ImageHolder imgData={img} key={img.id} />
        ))}
      </div>
    </div>
  );
};

export default MainBody;
