import react, { useEffect, useState } from "react"
import Axios from "../node_modules/axios/index"
import Link from "../node_modules/next/link"
import Image from "../node_modules/next/image"
import { ICoins } from "../types/ICoins"
import icon from "../public/icon.png"
interface Props {
  coins: ICoins[]
}
export default function Home({coins}:Props) {
  const [text, setText] = useState()
  const [query, setQuery] = useState<ICoins[] | undefined>([])
  
  useEffect(() => {
    setQuery(coins.filter(coin => coin.id.includes(text)))
  }, [text])
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-semibold text-center text-3xl border-b-4 border-transparent-500 m-5 transition-colors hover:border-indigo-500 cursor-pointer">Crypto Coins</h1>
      </div>
      <div className="flex justify-center">
        
        <input type="text" className="bg-gray-100 w-[60%] p-2 rounded-lg outline-none border-[2px] border-gray-500 border-transparent hover:border-indigo-500 active:border-indigo-500 focus:border-indigo-500" onChange={(e:any) => setText(e.target.value)} placeholder="🔎 Search..."/>
      </div>
      <div className="flex flex-wrap justify-center">
        {query.length > 0 ?
          query.map((coin) => (
            <Link href={`coins/${coin.id}`} key={coin.id}>
              <div className="m-5 p-5 bg-gray-100 shadow-lg rounded-sm flex flex-col justify-center transition hover:-translate-y-2 cursor-pointer">
                <h1 className="font-semibold text-lg text-center">{coin.name}</h1>
                <img src={coin.icon} width={70} className="m-auto p-2 m-3 rounded-full" />
                <Link href={`coins/${coin.id}`}>
                  <button className="p-2 m-2 border-[1px] border-gray-400 text-black rounded-md transition hover:bg-indigo-500 hover:text-white">More info</button>
                </Link>
                
                {/* <p>Price: {coin.price}</p>
                <p>Rank: #{coin.rank}</p>
                <p>Symbol: {coin.symbol}</p>
                */}
              </div>
            </Link>
          ))
        :
          coins.map((coin) => (
            <Link href={`coins/${coin.id}`} key={coin.id}>
              <div className="m-5 p-5 bg-gray-100 shadow-lg rounded-sm flex flex-col justify-center transition hover:-translate-y-2 cursor-pointer">
                <h1 className="font-semibold text-lg text-center">{coin.name}</h1>
                <img src={coin.icon} width={70} className="m-auto p-2 m-3 rounded-full" />
                <Link href={`coins/${coin.id}`}>
                  <button className="p-2 m-2 border-[1px] border-gray-400 text-black rounded-md transition hover:bg-indigo-500 hover:text-white">More info</button>
                </Link>
                
                {/* <p>Price: {coin.price}</p>
                <p>Rank: #{coin.rank}</p>
                <p>Symbol: {coin.symbol}</p>
                */}
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}




export async function getStaticProps(context) {
  
  const res = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")

  return {
    props: {
      coins: res.data.coins
    }
  }
}