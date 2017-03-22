import Reflux from 'reflux'
import UserActions from '../actions/UserActions'

let UserStore = Reflux.createStore({
    listenables: UserActions,
    onInitCompleted: function (data) {
        console.log(data);
        this.trigger(data)
    }
});

export default UserStore