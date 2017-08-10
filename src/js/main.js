import searchUser from './search-user';
import getRepositories from './repositories'

const user = searchUser('felipecesr');
const repositories = getRepositories('felipecesr');

user.then(data => console.log(data));
repositories.then(data => console.log(data));
