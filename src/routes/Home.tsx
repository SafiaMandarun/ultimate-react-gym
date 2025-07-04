import Card from "../components/Card";
import { Hero } from "../components/Hero";
import { useFetchAll } from "../hooks/useFetchAllApi";
import type { EquipmentProps } from "../models/equipment.model";

const Home = () => {
  const { eq } = useFetchAll();

  return (
    <>
      <Hero></Hero>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mb-16 ">
        {eq.map((eq: EquipmentProps) => {
          return <Card name={eq.name} claim={eq.claim} pricePerMinute={eq.pricePerMinute} image={eq.image}></Card>;
        })}
      </div>
    </>
  );
};

export default Home;
