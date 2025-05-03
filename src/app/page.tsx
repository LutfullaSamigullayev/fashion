import { About, Banner, CollectionBottom, CollectionTop, Instagram, NowWear } from "@/components";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <CollectionTop />
      <NowWear />
      <CollectionBottom />
      <About />
      <Instagram />
    </div>
  );
}
