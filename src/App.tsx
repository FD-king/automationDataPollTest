import { Suspense } from "react";
import HeroSection from "./heroSection/heroSection.tsx";
import MainBody from "./mainBody/mainBody.tsx";
import NavBar from "./navBar/navBar.tsx";
import { Toaster } from "react-hot-toast";
import Footer from "./footer/footer.tsx";
import type { Itechnology } from "./typesFolder/techCardType";
import type { Iimg } from "./typesFolder/imagetypeCard";

const technologyIcons = import.meta.glob<string>("./assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const ImageCardFetch = async (): Promise<Iimg[]> => {
  const res = await fetch("/public/imageData.json");
  const data: Iimg[] = await res.json();
  return data;
};

const TechCardFetch = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}technologies.json`);
  if (!response.ok) {
    throw new Error(`Failed to load technologies: ${response.status}`);
  }

  const data: Itechnology[] = await response.json();
  return data.map((technology) => {
    const iconPath = technology.icon.replace("../src/assets/", "./assets/");
    const icon = technologyIcons[iconPath];
    if (!icon) {
      throw new Error(
        `Missing bundled icon for ${technology.name}: ${technology.icon}`,
      );
    }

    return { ...technology, icon };
  });
};

function App() {
  const techDataPromise = TechCardFetch();
  const imageDataPromise = ImageCardFetch();
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />;
      <div className="container mx-auto">
        <NavBar />
        <HeroSection />
        <Suspense fallback={<div>Loading...</div>}>
          <MainBody
            techDataPromise={techDataPromise}
            ImageCardFetch={imageDataPromise}
          />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
