import { createSelector } from 'reselect'



const selectShop = state => state.shop

export const selectCollections = createSelector( 
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
    )

    //old way of doing it as array below
    
    // const COLLECTION_ID_MAP = {
      // hats: 1,
      // sneakers: 2,
      // jackets: 3,
      // womens: 4,
      // mens: 5,
  // }
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  
