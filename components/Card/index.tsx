import React from "react";
import { TouchableOpacityProps } from "react-native";
import { View } from "react-native";
import * as S from "./styles";

type PokemonType = {
  type: {
    name: string;
  };
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type CardProps = {
  data: Pokemon;
} & TouchableOpacityProps;

export const Card = ({ data, ...rest }: CardProps) => {
  return (
    <S.PokemonCard type={data.types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.PokemonContentType>
          {data.types.map((pokemonType) => (
            <S.PokemonType
              key={pokemonType.type.name}
              type={pokemonType.type.name}
            >
              <S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide>
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
          }}
        />
      </S.RightSide>
    </S.PokemonCard>
  );
};
