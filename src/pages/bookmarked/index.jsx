
import data from "public/data.json";

import Card from "src/components/card";
import List from "src/components/list";
import Title from "src/components/title";

const Container = () => {
    const moviesList = data.filter(item => item.category.toLowerCase() === "movie" && item.isBookmarked);
    const tvSeriesList = data.filter(item => item.category.toLowerCase() === "tv series" && item.isBookmarked);

    return (
        <main className="grow main overflow-y-auto pt-4 xl:pl-4">
            <section className="mt-8 px-4 xl:pr-4">
                <Title>Bookmarked Movies</Title>
                <List>
                    {
                        moviesList.map((item, index) => <Card { ...item } key={index} />)
                    }
                </List>
            </section>
            <section className="mt-12 px-4 xl:pr-4">
                <Title>Bookmarked TV Series</Title>
                <List>
                    {
                        tvSeriesList.map((item, index) => <Card { ...item } key={index} />)
                    }
                </List>
            </section>
        </main>
    );
};

export default Container;