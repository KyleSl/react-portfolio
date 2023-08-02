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
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quos iure soluta explicabo quod quis iste omnis. Neque veniam omnis distinctio explicabo, libero, quisquam accusantium excepturi eaque modi voluptates quas corporis? Quidem laboriosam adipisci iusto. Quam cupiditate, odio animi nemo saepe iste eligendi adipisci odit quod impedit, necessitatibus natus nulla.</p>
                </div>
            </div>
        </div>
    );
}