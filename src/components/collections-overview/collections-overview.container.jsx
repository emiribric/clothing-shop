import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import collectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionsOverview));
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;