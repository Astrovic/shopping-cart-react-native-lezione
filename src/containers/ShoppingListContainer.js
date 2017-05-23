import { connect } from 'react-redux';
import { loadItems } from '../actions/itemsActions';
import ShoppingList from '../components/ShoppingList';

// dallo stato, dove vado a mettere automaticamente gli items nel nostro
// componente?  lo stabilisco con il mapping
const mapStateToProps = state => ({
  items: state.items
});


// una prop che permetterà di eseguire il caricamento dei dati
const mapDispatchToProps = dispatch => ({
    loadItems: () => dispatch(loadItems())
});

// connect connette lo stato interno con lo stato globale
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
