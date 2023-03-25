import React, { useEffect } from 'react'
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { fetchPosts } from '../../store/slices/posts/postsApi';
import { selectPosts } from '../../store/slices/posts/postsSlice';
import { resetSearch, selectSearch } from '../../store/slices/search/searchSlice';
import Post from '../Post/Post'

function Posts() {
  const dispatch = useDispatch();

  const {postsData} = useSelector(selectPosts);

  const search = useSelector(selectSearch);

  useEffect(() => {
    if (!postsData.length) {
      dispatch(fetchPosts());
    }
  }, []);

  useEffect(() => {
    return () => {
      dispatch(resetSearch());
    };
  }, []);

  const filteredPosts = useMemo(() => {
    let initialFilteredPosts = [
      ...postsData.filter((post) => post.name.includes(search)),
    ];
    
    initialFilteredPosts = [
      ...initialFilteredPosts.filter((post) => post.name.startsWith(search)),
      ...initialFilteredPosts.filter((post) => !post.name.startsWith(search)),
    ];

    return initialFilteredPosts;
  }, [postsData, search]);


  return (
    <>
      {
        filteredPosts.map(el => <Post key={el.id} id={el.id} comments={el.comments} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} />)
      }
    </>
  )
}

export default Posts