import styled, { css } from "styled-components/native";

interface PokemonType {
  type?: string;
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  background-color: ${({ theme, type }) => theme.colors.backgroundCard[type]};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const ContentLeftSide = styled.View`
  padding: 20px;
  flex: 1;
`;

export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    background-color: ${theme.colors.boxType[type]};
    border-radius: 3px;
    margin-right: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.light_text};
    text-transform: capitalize;
  `}
`;

export const RightSide = styled.View`
  /* padding-top: 20px; */
  justify-content: center;
  align-items: center;
  width: 70%;
  position: relative;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.background};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${theme.colors.background};
  `}
`;

export const PokemonImage = styled.Image`
  margin-top: -10px;
  width: 130px;
  height: 100px;
`;

export const PokeballCardDetail = styled.Image`
  position: absolute;
  right: -20px;
`;

