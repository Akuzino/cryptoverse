import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": "e58944c2ffmsh6bfd8ec855e097dp103410jsnbfad29c4a9b7",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),

        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) =>
                createRequest(
                    `/coin/${coinId}/history?timePeriod=${timePeriod}`
                ),
        }),

        // getExchanges: builder.query({
        //     query: () => createRequest(`/exchanges`),
        // }),
    }),
});

export const {
    useGetCryptosQuery,
    // useGetExchangesQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery, // use    and   Query
} = cryptoApi;
