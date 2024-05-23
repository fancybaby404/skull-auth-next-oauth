import MembershipCard from '@/components/subscription/MembershipCard'
import { subcriptionData } from '@/config/SubscriptionData'
import React from 'react'

export default function Plans() {
  return (
    <div className='flex justify-center items-center flex-col'>

        <h1 className='text-4xl font-black mb-4'>Plans</h1>
        <div className='flex justify-center items-center flex-col md:flex-row gap-4'>
            {subcriptionData.map((data, index) => {
                return (
                    <MembershipCard
                        key={index}
                        title={data.title}
                        benefits={data.benefits}
                        price={data.price.toString()}
                        backgroundColor='bg-transparent'
                        textColor='text-white'
                        headerTextColor={"text-white"}
                        headerBackgroundColor='bg-yellow-600'
                    />
                )
            })}
        </div>

    </div>

  )
}
