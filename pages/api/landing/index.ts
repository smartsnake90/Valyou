import { apiCore } from "../apiCore";

const api = new apiCore();

export const getBitToUSD = async ()=>{
    const result = await api.get( `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,''); 
   return result;
}

export const getEthToBit =async ()=>{
    const result = await api.get( 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=btc,usd',''); 
    return result;
}
