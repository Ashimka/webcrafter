import Features from "../Components/Features";
import Hero from "../Components/Hero";
import Portfolio from "../Components/Portfolio";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch("/");

  return (
    <>
      {loading && <div>Загрузка...</div>}

      {error && <div>Ошибка: {error}</div>}

      {data && (
        <>
          <Hero
            title={data.title}
            description={data.description}
            image={data.image}
          />
          <Features feature={data?.feature ? data?.feature : []} />
          <Portfolio />
        </>
      )}
    </>
  );
};

export default Home;
