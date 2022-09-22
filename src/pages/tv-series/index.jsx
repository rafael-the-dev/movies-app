import { useMemo, useState } from "react";

import data from "public/data.json";

import Card from "src/components/card";
import Form from "src/components/search-form";
import List from "src/components/list";
import Main from "src/components/main";
import Title from "src/components/title";

export async function getStaticProps() {
    const tvSeriesList = data.filter(item => item.category.toLowerCase() === "tv series");

    return {
      props: {
        tvSeriesList
      },
    }
};

const Container = ({ tvSeriesList }) => {
    const [ searchList, setSearchList ] = useState([]);

    const formMemo = useMemo(() => (
        <div className="px-4">
            <Form 
                data={[ ...tvSeriesList ]}
                setData={setSearchList}
            />
        </div>
    ), []);

    const tvSeriesSection = useMemo(() => (
        <section className="mt-8 px-4 xl:pr-4">
            <Title>TV Series</Title>
            <List>
                {
                    tvSeriesList.map((item, index) => <Card { ...item } key={index} />)
                }
            </List>
        </section>
    ), [ tvSeriesList ])

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
                ) : tvSeriesSection
            }
        </Main>
    );
};

export default Container;