import { UserLayout } from "../components/UserLayout";
import { HeaderInfo } from "../components/HeaderInfo";
import { ItemListContainer } from "../components/ItemListContainer";

export const Category = () => {
  return (
    <UserLayout>
      <main>
        <HeaderInfo />
        <ItemListContainer />
      </main>
    </UserLayout>
  );
};
