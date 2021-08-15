import giphyAPI from "../APIs/giphyAPI";

// 通常の action creator
const receiveData = (data) => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

// thunk 用の関数を返す action creator
const getUrls = (word) => {
  return (dispatch) => {
    giphyAPI(word).then((res) => {
      const data = res.data.data;
      const imageUrlList = data.map((item) => item.images.downsized.url);
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
