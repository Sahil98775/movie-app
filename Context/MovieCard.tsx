import { View, Text, TouchableOpacity, } from 'react-native';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};
type MovieCardProps = {
  movie: Movie;
  onPress: () => void;
};
export default function MovieCard({ movie,onPress }: MovieCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{movie.title}</Text>
    </TouchableOpacity>
  );
}
