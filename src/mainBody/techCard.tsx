import { toast } from "react-hot-toast";
import type { Itechnology } from "../typesFolder/techCardType";

const TechCard = ({
  techData,
  handleSaveCard,
  isSaved,
}: {
  techData: Itechnology;
  handleSaveCard: (card: Itechnology) => void;
  isSaved: boolean;
}) => {
  return (
    <div className="container mx-auto w-full max-w-95 rounded-[22px] border border-slate-200 bg-white p-7.5 shadow-sm">
      <div className="flex items-start justify-between">
        <img
          className="h-12 w-12 object-contain"
          src={techData.icon}
          alt={techData.name}
        />

        {techData.badge && (
          <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-500">
            {techData.badge}
          </span>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-[28px] font-bold text-slate-900">
          {techData.name}
        </h2>

        <p className="mt-3 text-[17px] leading-[1.6] text-slate-500">
          {techData.description}
        </p>
      </div>

      <div>
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="shrink-0 rounded-md bg-slate-100 px-2.5 py-1 text-sm text-slate-600">
            {techData.category}
          </span>

          <span className="shrink-0 whitespace-nowrap text-sm text-slate-500">
            {techData.level}
          </span>

          <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-slate-700">
            <span className="text-base text-amber-400">★</span>
            {techData.rating}
          </span>
        </div>
      </div>

      <button
        disabled={isSaved}
        className={`mt-6 w-full rounded-[10px] px-4 py-3 text-base font-medium transition ${
          isSaved
            ? "cursor-not-allowed bg-slate-300 text-slate-600"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
        onClick={() => {
          handleSaveCard(techData);
          toast.success("Successfully added to stack!");
        }}
      >
        {isSaved ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
