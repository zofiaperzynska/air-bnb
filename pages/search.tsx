import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Search = () => {
  return (
    <div>
      <Header />

      <main className='flex'>
        <section>
          <p className='text-xs'>300+ Stays for 5 number of Guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in New York
          </h1>
          <div className=' lg:inline-flex'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;