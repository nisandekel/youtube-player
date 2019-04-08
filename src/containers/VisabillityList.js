import SongList from './../components/SongList/SongList.view';
import {filterList} from './../components/SongList/SongList.actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        filterList: (inputVal) => dispatch(filterList(inputVal))
    }
  }
  
  export default connect(null, mapDispatchToProps)(SongList);