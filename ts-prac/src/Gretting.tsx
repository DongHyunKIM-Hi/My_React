import React from 'react';

type GreetingsProps = {
    name: string;   
    mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({name})=>{
    return <div>{name}</div>;
};


export default Greetings;