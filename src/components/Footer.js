import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function () {
  return (
    <div>
         <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 SubhamPanda
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500" href="https://www.facebook.com/subham.rokey" target="_blank" rel="noopener noreferrer">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <FacebookIcon/>
          </svg>
        </a>
        <a className="ml-3 text-gray-500" href="https://github.com/Subham1901" target="_blank" rel="noopener noreferrer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <GitHubIcon/>
          </svg>
        </a>
        <a className="ml-3 text-gray-500" href="https://www.instagram.com/subham_sp24/" target="_blank" rel="noopener noreferrer">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <InstagramIcon/>
          </svg>
        </a>
        <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/subham-prasad-panda-a4b2371b6/" target="_blank" rel="noopener noreferrer">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <LinkedInIcon/>
          </svg>
        </a>
      </span>
    </div>
        </div>
    </div>
  )
}
