// - Import firebase component
import firebase, {firebaseRef} from 'app/firebase/'

// - Import utility components
import moment from 'moment'

// - Import action types
import * as types from 'actionTypes'

// - Import actions
import * as postWritingActions from 'postWritingActions'

/* ----------------------------------------- */



// - Clea all data in post store
export const clearAllData = () => {

  console.log("clear data");

  return{
    type: types.CLEAR_ALL_DATA_POST
  }
}

// - Add a post with image
export const addImagePost = (post) => {

  console.log("image post");

  return{
    type: types.ADD_IMAGE_POST,
    post
  }

}

// - Add a normal post
export var dbAddPost = (newPost,callBack) => {

  console.log("normal post");

  return(dispatch,getState) => {

    var uid = getState().authorize.uid
    var post = {
           postTypeId: 0,
           creationDate: moment().unix(),
           deletationDate: '',
           score: 0,
           viewCount: 0,
           body: newPost.body,
           ownerUserId: uid,
           ownerDisplayName: newPost.name,
           ownerAvatar: newPost.avatar,
           lastEditDate: '',
           tags: newPost.tags || [],
           commentCounter: 0,
           image:'',
           video:'',
           deleted:false
         }


    var postRef = firebaseRef.child(`userPosts/${uid}/posts`).push(post)
    return postRef.then(()=>{
      dispatch(addPost({
        ...post,
        id: postRef.key
      }))
      callBack()
    },(error) => console.log(error))
  }
}

export const addVideoPost = (post) => {

  console.log("video post");

  return{
    type: types.ADD_VIDEO_POST,
    post
  }
}

// - Add a normal post
  export const addPost = (post) => {

    console.log("normal post 2");

    return{
      type: types.ADD_POST,
      post
    }
}

// - Add a post with image
 export const dbAddImagePost = (newPost,callBack) => {

  console.log("image post 2");

   return(dispatch,getState) => {
     var uid = getState().authorize.uid
     var post = {
            postTypeId: 1,
            creationDate: moment().unix(),
            deletationDate: '',
            score: 0,
            viewCount: 0,
            body: newPost.body,
            ownerUserId: uid,
            ownerDisplayName: newPost.name,
            ownerAvatar: newPost.avatar,
            lastEditDate: '',
            tags: newPost.tags || [],
            commentCounter: 0,
            image:newPost.image,
            video:'',
            deleted:false
          }


     var postRef = firebaseRef.child(`userPosts/${uid}/posts`).push(post)
     return postRef.then(()=>{
       dispatch(addPost({
         ...post,
         id: postRef.key
       }))
       callBack()

     })
   }

 }



// - Add a list of post
export const addPosts = (posts) => {

  console.log("list of posts");

  return {
    type: types.ADD_LIST_POST,
    posts
  }
}



 // - Read all user posts from data base
 export const dbGetPosts = () => {

  console.log("get all post ");

   return (dispatch, getState) => {
     var uid = getState().authorize.uid
     if (uid) {
       var postsRef = firebaseRef.child(`userPosts/${uid}/posts`);

       return postsRef.once('value').then((snapshot) => {
         var posts = snapshot.val() || {};
         var parsedPosts = [];
         Object.keys(posts).forEach((postId) => {
           parsedPosts.push({
             id: postId,
             ...posts[postId]
           });
         });

         dispatch(addPosts(parsedPosts));
       });

     }
   }
 }
