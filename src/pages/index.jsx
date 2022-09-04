import data from "public/data.json";

import Card from "src/components/card";

const Home = () => {
    console.log(data);
    const list = data.filter(item => !item.isTrending);

    return (
        <>
            <main className="px-4 pt-4">
                <section>
                    <ul className="flex flex-wrap items-stretch justify-between">
                        {
                            list.map((item, index) => <Card { ...item } key={index} />)
                        }
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Home;