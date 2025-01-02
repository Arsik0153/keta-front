import React from 'react';
import Header from './_components/header';
import Hero from './_components/hero';
import HowItWorks from './_components/how-it-works';
import Form from './_components/form';

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <HowItWorks />
            <Form />
        </div>
    );
}
