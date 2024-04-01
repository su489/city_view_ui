import React from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

const Post = ({ data, bgColor, color }) => {
  return (
    <>
      <div className='post_container'
        style={{
          backgroundColor: `${bgColor}`,
          color:`${color}`,
        }}
      >
        <div className='person'>
          <div className='author'>
            <div className='img'>
              <img src={data.pImg}
                alt="" />
            </div>
            <div className='text'>
              <h3>{data.userName}</h3>
              <p>{data.title}</p>
            </div>
          </div>
          <div className='dot'><BiDotsVerticalRounded /></div>
        </div>
        <p>{data.description}</p>
        <div className='post_img'>
          <img src={data.mImg}
            alt="" />
        </div>
        <div className='like_comment'>
          <div className='items'>
            <FaHeart />{data.like}{" "}k</div>
          <div className='items'><FaComment /> {data.comment}{""}k </div>
          <div className='items'><IoShareSocialSharp />{data.share} K
          </div>
        </div>
      </div>
    </>
  )
}

export default Post