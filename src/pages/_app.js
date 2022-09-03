import * as React from 'react';
import Head from "next/head";

import "src/styles/reset.css";
import 'src/styles/tailwind.css';

import Layout from "src/components/layout"

const MyApp = ({ Component, pageProps }) => {
    console.log("hello world")
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
};

export default MyApp;