import axios from "axios";

export const getAsync = async  (url: string): Promise<string|null> => {
    return await axios.get(url)
         .then(r => r.data as string)
         .catch(e => {
             console.log(e.message)
             return null;
         });

}
