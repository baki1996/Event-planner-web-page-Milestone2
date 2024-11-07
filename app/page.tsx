import Feature from "@/Components/Feature";
import Homes from "./Homes/page";
import Venues from "./Venues/page";
import Newsletter from "./Contact/page";
import Gallery from "./Gallery/page";
import Services from "./Services/page";



export default function Home() {
  return (
    <div>
      <Homes/>
      <Feature/>
      <Services/>
      <Gallery/>
      <Venues/>
      <Newsletter/>
    </div>
  );
}
