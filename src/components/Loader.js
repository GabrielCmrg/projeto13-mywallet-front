import { Bars } from  'react-loader-spinner';

export default function Loader() {
    return (
        <Bars
            height="30"
            width="30"
            color='white'
            ariaLabel='loading'
        />
    );
};