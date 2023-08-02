import avatar from '../assets/sleepypanda.jpg'

export default function AboutMe () {
    return (
        <div>
            <h2 className="text-white p-1 m-1 mx-3">About Me</h2>
            <hr className="text-white m-1" />
            <div className="row">
                <img className="col-3 m-2 rounded" src={avatar} alt="red-panda" />
                <div className="col-8 p-2">
                    <h3 className='text-white'>Kyle Slaughter</h3>
                    <hr className='text-white m-1' />
                    <p className='text-white'>My name is Kyle Slaughter. I am 19 years old and a begginer level web developer. I specialize in back-end logical things like databases and query routes, but I can do some basic front-end stuff. For example, I built this whole website. I graduated from a top 3 highschool in Colorado with a 3.97 GPA. I got a 1470 on the SAT but just couldn't do college. I spent a few months doing an online bootcamp through Denver University and it taught me mostly everything I know about web development. I would say my strengths are how fast I learn and how quickly I can code.</p>
                </div>
            </div>
        </div>
    );
}