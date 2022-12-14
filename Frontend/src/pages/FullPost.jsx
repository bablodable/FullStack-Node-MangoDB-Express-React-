import React from "react";
import { useParams } from 'react-router-dom';
import axios from "../axios";
import ReactMarkdown from 'react-markdown';

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
// import { objectTraps } from "immer/dist/internal";

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.warn(err);
      alert('Error try get post');
    });
  }, );

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost/>;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ''}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text} />
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Bob Bartender",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Никому не говори, но я болею за тебя",
          },
          {
            user: {
              fullName: "Merg",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "Time a wait for no one",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};