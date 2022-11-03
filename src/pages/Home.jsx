import { UserLayout } from "../components/UserLayout";
import { Banner } from "../components/Banner";
import { AdvertisingProducts } from "../components/AdvertisingProducts";

export const Home = () => {
  return (
    <UserLayout>
      <Banner />
      <main>
        <AdvertisingProducts/>
      </main>
    </UserLayout>
  );
};