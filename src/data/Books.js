/**
 * Created by tha on 01-04-2017.
 */
import mobx, { observable, computed} from 'mobx';
class Books{
    @observable books = [];
    @observable someInfo = "some info";
}
const books = window.books = new Books();
export default books;
