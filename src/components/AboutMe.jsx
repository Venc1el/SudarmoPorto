import Myself from '../assets/myselfmountain.jpg'

const AboutMe = () => {
    return (
        <div className='relative bg-primary-text rounded-3xl px-4 md:px-10 pt-5 pb-20'>
            <h1 className="uppercase text-[36px] md:text-[84px] font-black text-primary-background">about me</h1>
            <img src={Myself} className='w-full h-64 md:h-[35rem] object-cover object-center rounded-3xl mt-4 drop-shadow-lg' alt="Gambarku" />
            <p className='text-lg md:text-[36px] mt-5 md:mt-10 text-primary-background uppercase font-black text-center leading-1 md:leading-none'>
                I&apos;m Sudarmo Adi, a passionate programmer with a knack for solving problems and crafting elegant solutions through code.
            </p>
        </div>
    )
}

export default AboutMe