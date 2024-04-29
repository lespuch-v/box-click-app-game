const emojist = ['🌟', '🥳', '🎉', '🚀'];

function randomEmoji() {
  const rnd = Math.floor(Math.random() * emojist.length);
  return emojist[rnd];
}

export default randomEmoji;
