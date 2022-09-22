import { useMemo, useState } from "react"

import data from "public/data.json";

import Card from "src/components/card";
import Form from "src/components/search-form";
import List from "src/components/list";
import Main from "src/components/main";
import Title from "src/components/title";

export async function getStaticProps() {
    const moviesList = data.filter(item => item.category.toLowerCase() === "movie");

    return {
      props: {
        moviesList
      },
    }
};

const Container = ({ moviesList }) => {
    const [ searchList, setSearchList ] = useState([]);

    const formMemo = useMemo(() => (
        <div className="px-4">
            <Form 
                data={[ ...moviesList ]}
                setData={setSearchList}
            />
        </div>
    ), []);

    const moviesSection = useMemo(() => (
        <section className="mt-8 px-4 xl:pr-4">
            <Title>Movies</Title>
            <List>
                {
                    moviesList.map((item, index) => <Card { ...item } key={index} />)
                }
            </List>
        </section>
    ), []);

    return (
        <Main>
            { formMemo }
            {
                searchList.length > 0 ? (
                    <div className="mt-8 px-4 xl:pr-4">
                        <List>
                            {
                                searchList.map((item, index) => <Card { ...item } key={`${item.title}${index}`} />)
                            }
                        </List>
                    </div>
                ) : moviesSection
            }
        </Main>
    );
};

export default Container;