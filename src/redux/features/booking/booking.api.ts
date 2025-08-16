import { baseApi } from "@/redux/base.api";

 

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/booking",
        method: "POST",
        data: bookingData,
      }),
      invalidatesTags: ["BOOKING"],
    }),
    // getTourTypes: builder.query({
    //   query: () => ({
    //     url: "/tour/tour-types",
    //     method: "GET",
    //   }),
    //   providesTags: ["TOUR"],
    //   transformResponse: (response) => response.data,
    // }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;