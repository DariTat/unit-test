export default function displayLife(player) {
  if (player.health >= 50) {
    return 'healthy';
  }
  if (player.health >= 15) {
    return 'wounded';
  }
  if (player.health < 15) {
    return 'critical';
  }
  return 0;
}
