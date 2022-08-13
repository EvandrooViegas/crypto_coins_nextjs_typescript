import React from 'react'
import Axios from "../../node_modules/axios/index"
import { ICoins } from '../../types/ICoins'
import Link from "../../node_modules/next/link"

interface Props {
    coin: ICoins
}
function coin({coin} : Props) {

  return (
    <div className="m-5 p-5 flex flex-col sm:flex items-center mb-5">
        <h1 className="font-semibold text-2xl sm:text-center">{coin.name}</h1>
        <div className='flex justify-around flex-wrap sm:flex flex-col justify-center items-center'>
            <div className='flex-1 sm:flex justify-center items-center'>
                <img src={coin.icon} width={100} className="mr-auto rounded-full" />
            </div>
            <div>
                <p><span className='font-semibold'>Price</span>: {coin.price}</p>
                <p><span className='font-semibold'>Rank: </span> #{coin.rank}</p>
                <p><span className='font-semibold'>Symbol</span> {coin.symbol}</p>

                {
                    coin.websiteUrl ?
                    <Link href={coin.websiteUrl}>
              
                        <button className="w-[100%] p-2 m-2 ml-auto border-[1px] border-gray-400 text-black rounded-md transition hover:bg-indigo-500 hover:text-white">Official Website</button>
                
                    </Link> : 
                    <p className='w-[100%] p-2 m-2 ml-auto border-[1px] border-gray-400 text-black rounded-md transition hover:bg-indigo-500 hover:text-white'>Coin dont have a website!</p>
                }
            </div>
        </div>
                
    
    </div>
  )
}

export default coin

export async function getStaticPaths() {
    const res = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
    const data = res.data.coins 
    const paths = data.map((coin:ICoins) => {
      return {
        params: {id:coin.id.toString()}
      }
    })
  
    return {
      paths, 
      fallback: false
    }
}
  
export async function getStaticProps({params}) {
  
    const res = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
    const coinName = params.id
    
    const coin = res.data.coins.filter(coin => coin.id === coinName)[0]
  
    return {
      props: {
        coin
      }
    }
  }