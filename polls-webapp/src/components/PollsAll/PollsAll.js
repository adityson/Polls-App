import { useSelector } from 'react-redux'

import Poll from './Poll/Poll';

const PollsAll = () => {

    const polls = useSelector((state) => state.polls);
    console.log(polls);

    return (
        <>
            <h1>All Polls </h1>
            <Poll />
            <Poll />
        </>
    )
}

export default PollsAll
