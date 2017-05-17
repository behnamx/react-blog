// - Import firebase service
import {firebaseRef, firebaseAuth} from 'app/firebase/'

// - Import image gallery action types
import * as types from 'actionTypes'

// - Import app API
import * as FileAPI from 'FileAPI'

/* _____________ UI Actions _____________ */


// - To set image gallery open/close
export const openImageGallery = (status) => {
  return {type: types.OPEN_IMAGE_GALLERY, status}
}




// - Select image
export const imageSelect = (image, URL) => {
  return {type: types.IMAGE_SELECT_GALLERY, image, URL}

}

// - Clear selected data
export const clearSelectData = () => {
  return {type: types.CLEARS_SELECT_IMAGE_GALLERY}

}

// - Clear all data in image gallery store
export const clearAllData = () => {
  return{
    type: types.CLEAT_ALL_DATA_IMAGE_GALLERY
  }
}

// - Download image for image gallery
export const downloadForImageGallery = () => {
  return (dispatch, getState) => {
    var uid = getState().authorize.uid
    console.log('user id : ', uid);
    if (uid) {
      var imagesRef = firebaseRef.child(`user-files/${uid}/files/images`);

      return imagesRef.once('value').then((snapshot) => {
        var images = snapshot.val() || {};
        var parsedImages = [];
        Object.keys(images).forEach((imageId) => {
          parsedImages.push({
            id: imageId,
            ...images[imageId]
          });
        });
        console.log('ParsedImages : ', parsedImages);
        dispatch(addImageList(parsedImages));
      });

    }
  }

}

/* _____________ CRUD Database_____________ */

// - Add image in database


/* _____________ CRUD State _____________ */

// - Add image list to image gallery
export const addImageList = (images) => {
  return {type: types.ADD_IMAGE_LIST_GALLERY, images}
}

// - Add image to image gallery
export const addImage = (image) => {
  return {type: types.ADD_IMAGE_GALLERY, image}
}
