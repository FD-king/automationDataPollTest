import toast from "react-hot-toast";
import type { Itechnology } from "../typesFolder/techCardType";

const Stack = ({
  cards,
  handleRemoveCard,
  handleRemoveAll,
}: {
  cards: Itechnology[];
  handleRemoveCard: (id: number) => void;
  handleRemoveAll: () => void;
}) => {
  const isEmpty = cards.length === 0;

  return (
    <div
      className={`w-full rounded-2xl border border-[#edf1f5] bg-white px-8 shadow-[0_2px_4px_rgba(0,0,0,0.04)] ${
        isEmpty ? "h-64 py-9" : "py-9 pb-10"
      }`}
    >
      {/* Header */}
      <h2 className="text-3xl font-bold leading-9 text-[#111827]">
        Your Stack
      </h2>

      <p className="mt-1 text-xl font-normal leading-7 text-[#94a3b8]">
        {isEmpty
          ? "No technologies selected yet."
          : `${cards.length} ${
              cards.length === 1 ? "Technology" : "Technologies"
            } Selected`}
      </p>

      {/* EMPTY STATE */}
      {isEmpty ? (
        <div className="mt-6 flex h-24 w-full items-center justify-center rounded-2xl border border-dashed border-[#d9e2ee]">
          <p className="text-lg font-normal text-[#94a3b8]">
            Your stack is empty.
          </p>
        </div>
      ) : (
        /* SELECTED CARDS */
        <>
          <div className="mt-6 flex flex-col gap-2">
            {cards.map((tech) => (
              <div
                key={tech.id}
                className="flex h-20 w-full items-center justify-between rounded-xl border border-[#dce5f0] bg-white px-4"
              >
                {/* Left side */}
                <div className="flex items-center gap-4">
                  {/* Technology Icon */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 object-contain"
                  />

                  {/* Name + Category */}
                  <div>
                    <h3 className="text-base font-bold leading-5 text-[#111827]">
                      {tech.name}
                    </h3>

                    <p className="text-xs font-medium leading-4 text-[#94a3b8]">
                      {tech.category}
                    </p>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => {
                    handleRemoveCard(tech.id);
                    toast.success(`"${tech.name}" removed from stack.`);
                  }}
                  className="flex h-9 w-9 items-center justify-center text-[#94a3b8] transition hover:text-[#64748b]"
                  aria-label={`Remove ${tech.name}`}
                >
                  <span className="relative block h-7 w-7">
                    <span className="absolute left-1/2 top-1/2 h-7 w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />

                    <span className="absolute left-1/2 top-1/2 h-7 w-0.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={() => {
              handleRemoveAll();
              toast.success("All technologies removed from stack.");
            }}
            className="mt-20 h-12 w-full rounded-xl border border-[#ff6b61] bg-white text-xl font-bold text-[#e7352b] transition hover:bg-[#fff5f4]"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default Stack;
