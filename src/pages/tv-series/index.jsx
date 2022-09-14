
import data from "public/data.json";

import Card from "src/components/card";
import Title from "src/components/title";

const Container = () => {
    const list = data.filter(item => item.category.toLowerCase() === "tv series");

    return (
        <main className="main overflow-y-auto pt-4 xl:pl-4">
            <section className="mt-8 px-4 xl:pr-4">
                <Title>TV Series</Title>
                <ul className="flex flex-wrap items-stretch mt-6">
                    {
                        list.map((item, index) => <Card { ...item } key={index} />)
                    }
                </ul>
            </section>
        </main>
    );
};

export default Container;