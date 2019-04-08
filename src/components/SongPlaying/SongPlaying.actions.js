export const SONG_CHANGED = "SONG_CHANGED";

export const PLAY_QUOTE = "PLAY_QUOTE";

export const songChanged = (song) => {
    return { type: SONG_CHANGED, song }
}

export const playQuote = (quote) => {
    return { type: PLAY_QUOTE, quote }
}