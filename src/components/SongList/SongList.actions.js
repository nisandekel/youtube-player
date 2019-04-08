


export const SONGS_FETCHED = "SONGS_FETCHED";
export const FILTER_LIST = "FILTER_LIST";



const baseUrl = "https://glacial-escarpment-40412.herokuapp.com/songs";
export function getSongsFromServer() {
    return function (dispatch) {
        fetch(baseUrl)
            .then(res=>res.json())
            .then(res=> dispatch(songsFetched(res)));
    }
}

export function songsFetched(allSongs) {
    return { type: SONGS_FETCHED, allSongs };
}

export function filterList(inputVal) {
    return { type: FILTER_LIST, inputVal };
}