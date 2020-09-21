import React, { createContext, useContext } from "react";
import { useLocalStore, useObserver } from "mobx-react-lite";

const StoreContext = createContext({});

const HeroProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    heroes: ["Batman", "Superman", "Wonder Woman"],
    addHero: (hero) => {
      store.heroes.push(hero);
    },
    get heroesCount() {
      return store.heroes.length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const HeroesHeader = () => {
  const store: any = useContext(StoreContext);

  return useObserver(() => <h1>{store.heroesCount} Heroes! </h1>);
};

const HeroesList = () => {
  const store: any = useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.heroes.map((hero) => (
        <li key={hero}>{hero}</li>
      ))}
    </ul>
  ));
};

const HeroForm = () => {
  const store = React.useContext(StoreContext);
  const [hero, setHero] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        // @ts-ignore
        store.addHero(hero);
        setHero(""); // resets the local state to an empty string
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={hero}
        onChange={(e) => {
          setHero(e.target.value);
        }}
      />
      <button type="submit">Add Hero </button>
    </form>
  );
};

export default function MobxReactDemo() {
  return (
    <HeroProvider>
      <main>
        <HeroesHeader />
        <HeroesList />
        <HeroForm />
      </main>
    </HeroProvider>
  );
}
