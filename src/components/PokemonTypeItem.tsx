import { View, Image, Text, StyleSheet } from 'react-native';

export const PokemonTypeItem = ({
  name,
  imageURL,
}: {
  name: string;
  imageURL: string; // TODO: Seems like the type icon does not come from the API, change this to a resource and add a background color parameter
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.typeIcon} source={{ uri: imageURL }} />
      <Text style={styles.typeTitle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  typeIcon: {
    width: 16,
    height: 16,
    backgroundColor: '#00FF00', // TODO: Change this to the actual color
    borderRadius: 16,
  },
  typeTitle: {
    // TODO: This font has a padding in the bottom, causing the views to not center correctly, is there a way to remove the padding?
    fontSize: 12,
    marginStart: 8,
  },
});
