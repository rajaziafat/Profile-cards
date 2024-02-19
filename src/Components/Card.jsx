import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



function Card({ name, imageUrl, role, location }) {
    return (
        <div className="relative mt-5  backdrop-blur-lg bg-white bg-opacity-10 rounded-xl border border-white border-opacity-20">
        <div className="absolute top-0 right-2 ">
            <FontAwesomeIcon icon={faTimes} className="text-white cursor-pointer py-2" />
        </div>
        <div className="flex items-center gap-4 px-4  py-4 mt-2">
            <img
                className="max-w-[60px] max-h-[60px] rounded-full"
                src={imageUrl}
                alt=""
            />
            <hr className="border-l border-solid h-12" />
            <div className="font-[400] leading-[16px]">
                <h1 className="text-white text-[0.9rem]">{name}</h1>
                <p className="text-[0.9rem] text-gray-500 dark:text-gray-400">
                    {role}
                </p>
                <p className="text-[0.9rem] text-gray-500 dark:text-gray-400">
                    {location}
                </p>
                <hr className="font-bold mt-2" />
            </div>
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
