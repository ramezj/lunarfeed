import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Layout from '@/components/layout';
import PricingCard from '@/components/pricing/PricingCard';
import Info from '@/components/pricing/Info';
import Svg from '@/components/pricing/svg';
import Xsvg from '@/components/pricing/Xsvg';
import { PaddleLoader } from '@/components/PaddleLoader';
import { CreditCardIcon } from '@heroicons/react/24/outline';

export default function Pricing(props) {
    const signUserIn = async () => {
        signIn('google');
    }
    const { data: session } = useSession({})
    return (
        <>
        <Layout >
            <title>Lunar, Pricing</title>
            <PaddleLoader />
            <center>
            <br />
            <h1 className='text-4xl font-bold'>Pricing</h1>
            </center>
            <br />
            <br />
            <div className='flex flex-wrap gap-12 justify-center w-full'>
                <PricingCard price='$0 forever' title='Starter' button='Get Started' background={'bg-white'} shadow={'shadow-lg'}>
                <Info><Svg /> 1 Board</Info>
                <Info><Svg /> 15 Feedbacks</Info>
                <Info><Svg /> Authentication Check</Info>
                <Info><Xsvg /> Custom Domain </Info>
                <br />
                {
                session 
                ? <><Link href='/app' className='btn w-full text-white normal-case bg-blue-700 hover:bg-blue-800 dark:bg-white dark:text-black outline-none border-none font-bold rounded-md -mb-2'>Go to Dashboard</Link></>
                : <><button onClick={signUserIn} className='btn w-full text-white normal-case bg-blue-700 hover:bg-blue-800 dark:bg-white dark:text-black outline-none border-none font-bold rounded-md -mb-2'>Get Started</button></>
                }
                </PricingCard >
                <PricingCard price='$15 / month' title='Developer' button='Get Started' background={'bg-white'} shadow={'shadow-lg'}>
                <Info><Svg /> Up to 3 Boards</Info>
                <Info><Svg /> Unlimited Feedbacks</Info>
                <Info><Svg /> Authentication Check</Info>
                <Info><Svg /> Custom Domain - soon</Info>
                <br />
                {
                session 
                ? <><button onClick={(() => {
                    Paddle.Checkout.open({
                      product:63325,
                      success:'/success',
                      passthrough: session.user.id
                    })
                })} 
                className='btn w-full text-white normal-case bg-blue-700 hover:bg-blue-800 dark:bg-white dark:text-black outline-none border-none font-bold rounded-md -mb-2'>
                    {/* <CreditCardIcon className='text-white' width={22} height={22} /> */}
                 Subscribe Now</button></>
                : <><button onClick={signUserIn} className='btn w-full text-white normal-case bg-blue-700 hover:bg-blue-800 dark:bg-white dark:text-black outline-none border-none font-bold rounded-md -mb-2'>
                    {/* <CreditCardIcon className='text-white dark:text-black' width={22} height={22} /> */}
                    Get Started</button></>
                }
                </PricingCard >
            </div>    
            <br />  
        </Layout>
        </>
    )
}