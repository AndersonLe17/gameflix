import CartListContainer from "../components/CartListContainer/CartListContainer";
import { UserLayout } from "../components/UserLayout";

export const Cart = () => {
  return (
    <UserLayout>
      <main>
        <CartListContainer/>
      </main>
    </UserLayout>
  );
};
