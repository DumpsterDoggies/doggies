import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import BlockContent from "../block-content";
import Container from "../container";
import RoleList from "../role-list";


function Post(props) {
  const { _rawBody, title,  mainImage, members, 
    publishedAt, 
    relatedPosts } = props;
  return (
    <article >
      {props.mainImage && mainImage.asset && (
        <div >
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div >
          <div >
            <h1 >{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside >
            {publishedAt && (
              <div >
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do YYYY")}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title="Post members" />}
   
            {relatedPosts && relatedPosts.length > 0 && (
              <div >
                <h3 >Related Posts</h3>
                <ul>
                  {relatedPosts.map(post => (
                    <li key={`related_${post._id}`}>
                      {post.slug ? (
                        <Link to={`/post/${post.slug.current}`}>{post.title}</Link>
                      ) : (
                        <span>{post.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default Post;
