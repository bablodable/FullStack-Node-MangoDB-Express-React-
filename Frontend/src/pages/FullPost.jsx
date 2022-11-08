import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
      <Post
        id={1}
        title="Ticket to ride best or NO"
        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={{
          avatarUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
          fullName: "Keff",
        }}
        createdAt={"13 February 2022 г."}
        viewsCount={150}
        commentsCount={3}
        tags={["react", "fun", "typescript"]}
        isFullPost
      >
        <p>
          Hey there! What you mean?a
          ef
          wf
          wef
          wefwe
          Mnogo texta
        </p>
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