import Myself from '../assets/myselfmountain.jpg'

const AboutMe = () => {
    return (
        <div className='relative bg-primary-text rounded-t-3xl px-10 py-5'>
            <h1 className="uppercase text-[84px] font-black text-primary-background">about me</h1>
            <img src={Myself} className='w-full h-[35rem] object-cover object-center rounded-3xl mt-4 border-[4px] border-primary-background' alt="Gambarku" />
        </div>
    )
}

export default AboutMe