import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import from createApi from react redux

//      nazwa               headers from API
const cryptoNewsHeaders = {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "e58944c2ffmsh6bfd8ec855e097dp103410jsnbfad29c4a9b7",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/";
//      url from url: ''

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) =>
                createRequest(
                    `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
                ),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
