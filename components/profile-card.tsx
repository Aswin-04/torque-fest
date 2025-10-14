import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { red } from '@mui/material/colors';
import { Profile } from '@/lib/types';
import Image from 'next/image';

const ProfileCard = ({profile}: {profile: Profile}) => {
  return (
    <div data-aos="fade-in" className="border profile-card relative font-sans flex flex-col items-center mt-10 w-[320px] pt-6 pb-8 rounded-3xl text-center bg-zinc-950/80 backdrop-blur-lg shadow-inner">
      <div className="bg-card mb-4  rounded-full w-[170px] h-[170px] flex items-center justify-center">
        <Image src={profile.img} alt={profile.imgAlt}  className="rounded-full w-[160px] h-[160px]"/>
      </div>
      <h3 className="text-xl mb-4 font-medium text-gray-200">{profile.name}</h3>
      {profile.year && (
        <p className="mb-4 text-sm text-white-400">{profile.year}</p>
      )}
      <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon sx={{ color: red[500] }} fontSize="large"/>
      </a>
    </div>
  )
}

export default ProfileCard