import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

type PokemonType = {
  type: {
    name: string;
  };
};

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

export interface Request {
  id: number;
  types: PokemonType[];
}

const usePokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const [loadMore, setLoadMore] = useState("");
  const [pokemonWithStats, setPokemonWithStats] = useState([]);

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getPokemonStats(pokemon.url);

            return {
              name: pokemon.name,
              id,
              types,
            };
          })
        );

        setFilteredPokemons(payloadPokemons as Pokemon[]);
        setPokemons(payloadPokemons as Pokemon[]);
      } catch (error) {
        console.log("getPokemons:", error);
      } finally {
        setLoading(false);
      }
    }
    getPokemons();
  }, []);

  async function getPokemonStats(url: string): Promise<Request> {
    const res = await axios.get(url);
    const { id, types } = res.data as Request;
    return { id, types };
  }

  const searchFilter = (text: string) => {
    if (text) {
      const newData = pokemons.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredPokemons(newData);
      setSearch(text);
    } else {
      setFilteredPokemons(pokemons);
      setSearch(text);
    }
  };

  const handleNavigationPokemonDetail = (pokemonId: number) => {
    navigation.navigate("PokemonDetail", {
      pokemonId,
    });
  };

  return {
    loading,
    pokemons,
    handleNavigationPokemonDetail,
    search,
    filteredPokemons,
    searchFilter,
  };
};

export default usePokemonList;
