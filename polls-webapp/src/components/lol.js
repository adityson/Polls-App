    const [subject, setSubject] = useState('');
    const [duration, setDuration] = useState('1 day');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
    }

//<form onSubmit={onSubmit}>
    //<div>
        //<input type='text' placeholder='Poll Subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
    //</div>
    //<div>
        //<input type='text' placeholder='Poll Duration (in days)' value={duration} onChange={(e) => setDuration(e.target.value)}/>
    //</div>
    //<div>
        //<input type='submit' value='Create'/>
    //</div>
//</form>
//

//<div>
    //{polls.map((poll) => (
        //<h4 key={ poll.id }>{ poll.subject }</h4>
    //))}
//</div>

