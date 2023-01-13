import './Lists.css';

import Card from '../UI/Card'

const Lists = props => {

    let lists = '';

    if(props.users) {
        lists = props.users.map(user => {
            return <li key={ user.id }>
                { user.name } ({ user.age } years old)
            </li>
        });
    }
    
    return <Card>
        <ul className='Users-ul'>
            { lists }
        </ul>
    </Card>
}   

export default Lists;