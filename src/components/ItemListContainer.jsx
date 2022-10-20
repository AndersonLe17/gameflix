import { CardItem } from "./CardItem";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container-fluid container-lg py-3">
      <h2 className="text-center">{greeting}</h2>
      <div className="row g-3">
        <CardItem
            img={
              "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/g/o/god_of_war_ragnarok_ps5.jpg"
            }
            state={true}
            name="God of War Ragnarok (PS5) - Preventa"
            price={379.90}
          />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/c/o/consola-nintendo-switch_-neon-red-_-blue-_5-1500-x-1500_1_2_2.jpg"
          }
          state={true}
          name="Nintendo Switch Consola (Joy-Con Rojo/Azul Neón)"
          price={1819.90}
        />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/1/0/1088594.jpg"
          }
          state={true}
          name="Redragon Cobra M711 RGB Mouse - Blanco"
          price={139.90}
        />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/f/u/funko_goku_ultra_instinct_sign_1_.jpg"
          }
          state={true}
          name="Funko Pop Dragon Ball Super - Goku (Ultra Instinct - Sign)"
          price={99.90}
        />
        <CardItem
            img={
              "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/g/o/god_of_war_ragnarok_ps5.jpg"
            }
            state={false}
            name="God of War Ragnarok (PS5) - Preventa"
            price={379.90}
          />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/c/o/consola-nintendo-switch_-neon-red-_-blue-_5-1500-x-1500_1_2_2.jpg"
          }
          state={false}
          name="Nintendo Switch Consola (Joy-Con Rojo/Azul Neón)"
          price={1819.90}
        />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/1/0/1088594.jpg"
          }
          state={false}
          name="Redragon Cobra M711 RGB Mouse - Blanco"
          price={139.90}
        />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/f/u/funko_goku_ultra_instinct_sign_1_.jpg"
          }
          state={false}
          name="Funko Pop Dragon Ball Super - Goku (Ultra Instinct - Sign)"
          price={99.90}
        />
        <CardItem
            img={
              "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/g/o/god_of_war_ragnarok_ps5.jpg"
            }
            state={true}
            name="God of War Ragnarok (PS5) - Preventa"
            price={379.90}
          />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/c/o/consola-nintendo-switch_-neon-red-_-blue-_5-1500-x-1500_1_2_2.jpg"
          }
          state={true}
          name="Nintendo Switch Consola (Joy-Con Rojo/Azul Neón)"
          price={1819.90}
        />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/1/0/1088594.jpg"
          }
          state={true}
          name="Redragon Cobra M711 RGB Mouse - Blanco"
          price={139.90}
        />
        <CardItem
          img={
            "https://phantom.pe/media/catalog/product/cache/2d2e350e73065c0f42c90f0a12869353/f/u/funko_goku_ultra_instinct_sign_1_.jpg"
          }
          state={true}
          name="Funko Pop Dragon Ball Super - Goku (Ultra Instinct - Sign)"
          price={99.90}
        />
      </div>
    </div>
  );
};
