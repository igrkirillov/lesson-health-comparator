function compareByHealthDesc(ch1, ch2) {
  const { health: health1 } = ch1;
  const { health: health2 } = ch2;
  if (health1 > health2) {
    return -1;
  } if (health1 < health2) {
    return 1;
  }
  return 0;
}

export default function sort(characters) {
  if (!characters) {
    return characters;
  }
  return characters.sort(compareByHealthDesc);
}
