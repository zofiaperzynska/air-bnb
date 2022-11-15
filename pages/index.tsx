import type { GetStaticPathsResult, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export interface ExploreData {
  img: string;
  location: string;
  distance: string;
}

export interface CardData {
  img: string;
  title: string;
}

export interface LargeCardData {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}
interface HomeProps {
  exploreData?: ExploreData[];
  cardData?: CardData[];
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {props.exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {props.cardData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // https://jsonkeeper.com/b/4G1G
  const exploreData = await fetch(
    "https://api.jsonbin.io/v3/qs/6373c6a30e6a79321e4a9be5"
  ).then((res) => res.json());

  // https://jsonkeeper.com/b/VHHT
  const cardData = await fetch(
    "https://api.jsonbin.io/v3/qs/6373c6d165b57a31e6b875d1"
  ).then((res) => res.json());

  return {
    props: {
      exploreData: exploreData.record,
      cardData: cardData.record,
    },
  };
};
