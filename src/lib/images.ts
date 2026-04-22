// Centralized image imports for the site
import heroHome from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/523818066.jpg";
import livingArea from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/375749746.jpg";
import beachSunset from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/340432632.jpg";
import bathroomBrick from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/327687691.jpg";
import kitchenDetail from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/327687719.jpg";
import livingSliding from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/490061733.jpg";
import livingReading from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/375749446.jpg";
import bedroomSwan from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/327687717.jpg";
import kitchenSink from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/327687729.jpg";
import coatRack from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/327687720.jpg";

// New Premium & Lifestyle Assets
import livingLifestyle from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/375749559.jpg";
import dogExperience from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/327879056.jpg";
import bathroomPremium from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/490061731.jpg";
import bedroomSwanPremium from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/490061723.jpg";
import propertyCollage from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/490061727.jpg";
import kitchenIslandWide from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/375749373.jpg";
import bathroomStoneSink from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/327687730.jpg";
import kitchenBright from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/490061730.jpg";
import bedroomMain from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/523818066.jpg";
import livingCozy from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/368530098.jpg";
import exteriorTerraceReal from "@/assets/Tiny Beachhouse, Scheveningen (updated prices 2026)/490061726.jpg";

export const images = {
  heroHome,
  livingArea,
  heroAcc: beachSunset,
  beachSunset,
  bathroomBrick,
  kitchenDetail,
  livingSliding,
  livingReading,
  bedroomSwan,
  kitchenSink,
  coatRack,
  // New Assets
  livingLifestyle,
  dogExperience,
  bathroomPremium,
  bedroomSwanPremium,
  propertyCollage,
  kitchenIslandWide,
  bathroomStoneSink,
  kitchenBright,
  bedroomMain,
  livingCozy,
  exteriorTerraceReal,
  // Fallbacks for missing assets if any
  heroInterior: heroHome,
  heroBeach: beachSunset,
  interiorLiving: kitchenBright,
  interiorKitchen: kitchenBright,
  interiorBedroom: bedroomMain,
  interiorBathroom: bathroomPremium,
  exteriorTerrace: exteriorTerraceReal, 
  exteriorHouse: propertyCollage, 
  areaPier: beachSunset,
  areaMuseum: beachSunset,
  areaRestaurant: beachSunset,
  areaDunes: beachSunset,
  omgevingHero: beachSunset,
  detailDecor: bedroomSwanPremium,
};

export const galleryImages: { src: string; alt: string }[] = [
  { src: heroHome, alt: "Spacious bedroom with atmospheric lighting" },
  { src: kitchenBright, alt: "Bright, airy kitchen with natural wood island" },
  { src: livingArea, alt: "Coastal living and kitchen area" },
  { src: livingLifestyle, alt: "Cozy afternoon reading in the nook" },
  { src: dogExperience, alt: "Even your furry friends feel at home at Tiny Beachhouse" },
  { src: propertyCollage, alt: "A glimpse of the Tiny Beachhouse experience" },
  { src: livingCozy, alt: "Warm interior with rustic sliding barn door" },
  { src: bedroomSwanPremium, alt: "Atmospheric bedroom with unique swan lamp" },
  { src: bathroomPremium, alt: "Unique bathroom with walk-in shower" },
  { src: bathroomStoneSink, alt: "Handcrafted stone sink and interior greens" },
  { src: beachSunset, alt: "Golden hour at a Scheveningen beach restaurant" },
  { src: exteriorTerraceReal, alt: "Private terrace view" },
];

