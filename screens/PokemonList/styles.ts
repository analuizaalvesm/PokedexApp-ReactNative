import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 20px 20px 0px 20px;
`;

export const EmptyContainer = styled.View`
  width: 100%;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
`;

export const InputContainer = styled.View`
  height: 50px;
  border-radius: 8px;
  padding: 10px;
  background-color: #F1F1F1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  width: 90%;
  padding-left: 10px;
  font-size: 14px;
`;

export const TextContainer = styled.View`
margin-top: 60px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #808080;
  margin-top: 5px;
`;

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
`;