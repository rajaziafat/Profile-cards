
function Card({ name, imageUrl, role, location }) {
    return (
        <div className="flex items-center gap-4 mt-5 ">
            <img
                className="max-w-[75px] max-h-[75px] rounded-full"
                src={imageUrl}
                alt=""
            />

            <hr className="border-l border-solid h-12 " />

            <div className="font-medium text-xl sm:text-xl">
                <div>{name}</div>
                <div className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                    {role}
                </div>
                <div className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                    {location}
                </div>
                <hr className="font-bold mt-2 " />
            </div>
        </div>
    );
}

function App() {
    // Array of data
    const data = [
        {
            name: 'Andreas Wohlers Fotografie',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
            role: 'Photographer',
            location: 'Bremen/Germany'
        },
        {
            name: 'Franck',
            imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
            role: 'Photographer',
            location: 'Bamberg/Germany'
        },
        {
            name: 'Leonie,Ltl',
            imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
            role: 'Model',
            location: 'Erlangen/Germany'
        },
    ];

    return (
        <div>
            {data.map((item, index) => (
                <Card
                    key={index}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    role={item.role}
                    location={item.location}
                />
            ))}
        </div>
    );
}

export default App;
