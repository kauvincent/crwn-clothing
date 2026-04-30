import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import './collection.styles.scss';

const CollectionPage = ({ collections }) => {
    const { collectionId } = useParams();

    const collection = collections[collectionId];

    if (!collection) return null;

    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    collections: state.shop.collections
});

export default connect(mapStateToProps)(CollectionPage);
