import type { Iimg } from "../typesFolder/imagetypeCard";

const ImageHolder = ({ imgData }: { imgData: Iimg }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md w-full">
      {/* Vertical Stack Image Container */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-900/5 flex items-center justify-center p-2">
        <img
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          src={imgData.url}
          alt={imgData.alt}
        />
      </div>

      {imgData.alt && (
        <span className="mt-3 text-sm font-medium text-slate-700 text-center">
          {imgData.alt}
        </span>
      )}
    </div>
  );
};

export default ImageHolder;
