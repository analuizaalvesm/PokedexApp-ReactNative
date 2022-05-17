import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as S from "./styles";

import { RootTabScreenProps } from "../../types";
import usePokemonList from "./usePokemonList";

import { Card } from "../../components/Card";
import { Feather } from "@expo/vector-icons";

export default function PokemonList({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const {
    pokemons,
    loading,
    handleNavigationPokemonDetail,
    search,
    searchFilter,
    filteredPokemons,
  } = usePokemonList();

  const renderPokemon = useCallback(({ item: pokemon }) => {
    return (
      <>
        <Card
          data={pokemon}
          onPress={() => {
            handleNavigationPokemonDetail(pokemon.id);
          }}
        />
      </>
    );
  }, []);

  const renderEmptyPokemon = useCallback(() => {
    return (
      <S.EmptyContainer>
        <S.EmptyText>Sorry! We couldn't find any Pokémon.</S.EmptyText>
      </S.EmptyContainer>
    );
  }, []);

  return (
    <>
      {loading ? (
        <S.LoadingScreen>
          <ActivityIndicator size={"large"} color={"#000"} />
        </S.LoadingScreen>
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <S.Container>
            <S.TextContainer>
              <S.Title>Pokédex</S.Title>
              <S.Subtitle>
                Search Pokémon by name or using the National Pokedéx number.
              </S.Subtitle>
            </S.TextContainer>
            <S.ContentContainer>
              <S.InputContainer>
                <Feather name="search" size={24} color="#BBB" />
                <S.TextInput
                  value={search}
                  placeholder={"Search"}
                  onChangeText={(text) => searchFilter(text)}
                />
              </S.InputContainer>
              <FlatList
                data={filteredPokemons}
                keyExtractor={(pokemon) => pokemon.id.toString()}
                renderItem={renderPokemon}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={renderEmptyPokemon}
              />
            </S.ContentContainer>
          </S.Container>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}
