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
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusantium molestias dolorem, dolorum temporibus veniam, nostrum error enim voluptatum eaque reprehenderit quia facere quaerat iure illo ut numquam veritatis. Hic, qui repellat? Saepe corporis beatae nemo voluptatibus assumenda repudiandae fugit est vero consequuntur nesciunt, animi dolore in possimus aliquid facilis doloremque iste natus facere. Reiciendis quidem porro voluptatibus animi. Ea, exercitationem dolorum inventore quaerat tempora culpa suscipit soluta repellendus harum excepturi qui cum, illo, totam ratione quae vitae eaque veniam eligendi. Iure, accusamus vel nostrum, aliquid explicabo voluptatem qui dignissimos quae deleniti itaque earum sint tempore expedita molestiae facere voluptatum.</p>
                </div>
            </div>
        </div>
    );
}