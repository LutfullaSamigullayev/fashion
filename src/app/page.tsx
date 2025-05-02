import { About, Banner, CollectionBottom, CollectionTop, NowWear } from "@/components";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <CollectionTop />
      <NowWear />
      <CollectionBottom />
      <About />
    </div>
  );
}
