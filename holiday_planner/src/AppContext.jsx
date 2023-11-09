import {createContext, useContext } from "react";
// import App from "./App";
import axios from "axios";
import { useQuery} from '@tanstack/react-query'


const ShareDataContext = createContext();


// eslint-disable-next-line react/prop-types
export const AppContext = ({children}) => {

    let user = JSON.parse(localStorage.getItem("info"));
    let token = user?.access_token;

    //fetching all tours
    const { data: dashTours } = useQuery({
        queryKey: ["tours"],
        queryFn: async () => {
          const res = await axios.get("https://holiday-api-zj3a.onrender.com/api/v1/tour/all"
          );
          console.log("++++++++++++++++",res.data)
          return await res.data;

        },
        // onSuccess: () => {
        //   console.log("===========================",res.data);
        // },
      });

      //fetching all users
      const { data: dashUsers } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await axios.get("https://holiday-api-zj3a.onrender.com/api/v1/auth/users", {
            headers: {
              Authorization: "Bearer " + token,
            },
        });
          console.log("ppppppppppppppppp",res.data)
          return await res.data;

        },
        // onSuccess: () => {
        //   console.log("===========================",res.data);
        // },
      });



    return (
        
            <ShareDataContext.Provider value={
                {
                    dashTours,
                    dashUsers
                }
                }>
                {children}
            </ShareDataContext.Provider>
       
    );
};

export const  MyContext = () => useContext(ShareDataContext);