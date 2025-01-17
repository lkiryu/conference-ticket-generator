import { useContext } from 'react'
import { UserDataContext } from "../../context/UserDataContext";
import logo from '../../assets/images/logo-full.svg'
import githubIcon from '../../assets/images/icon-github.svg'

export default function Ticket() {
    const { userData } = useContext(UserDataContext)

    return (
        <section className="flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-4 text-center sm:w-80 sm:text-4xl">Congrats, <span className="bg-gradient-to-r from-orange_500 to-white bg-clip-text text-transparent">{userData.fullName}!</span><br />Your ticket is ready</h1>
            <p className="text-xl mb-24 text-neutral_300 text-center sm:w-80 sm:text-base sm:mb-16">We've emailed your ticket to <br /> <span className="text-orange_500">{userData.email}</span> and will send updates in <br /> the run up to the event.</p>
            <div className="flex relative flex-col justify-between items-start bg-pattern_ticket w-[600px] h-[280px] p-8 sm:w-[300px] sm:h-[140px] sm:p-4 sm:bg-contain">    
                <div className='flex flex-col items-start gap-4 sm:gap-1'>
                    <img className='h-10 sm:h-4' src={logo} alt="logo" />
                    <span className='ml-16 text-neutral_300 sm:text-xs sm:ml-6'>Jan 31, 2025 / Austin, TX</span>
                </div>
                <div className='flex items-center'>
                    <img className='w-20 h-20 rounded-xl mr-4 sm:w-12 sm:h-12 sm:mr-2' src={userData.preview} alt="avatar" />
                    <div className='sm:w-40'>
                        <p className='text-2xl sm:text-lg sm:truncate'>{userData.fullName}</p>
                        <span className='flex text-neutral_300'>
                            <img className='mr-2' src={githubIcon} alt="github icon" />
                            {userData.githubUser}
                        </span>
                    </div>
                </div>
                <span className='absolute top-[120px] right-2 rotate-90 text-4xl text-neutral_300 text-opacity-40 sm:text-lg sm:top-[56px]'>#{userData.ticketNumber}</span>
            </div>
        </section>
    )
}