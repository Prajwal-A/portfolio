import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {SiHackerrank} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/>   LinkedIn</a>
      <a href="https://github.com" target="_blank"><AiFillGithub/>   GitHub</a>
      <a href="https://leetcode.com/Prajwal-A/" target="_blank"><SiLeetcode/>   LeetCode</a>
      <a href="https://www.hackerrank.com/prajwalalewoor21" target="_blank"><SiHackerrank/>   HackerRank</a>
    </div>
  )
}

export default HeaderSocials
