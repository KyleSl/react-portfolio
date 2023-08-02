import blueitImage from '../assets/blueit.png'
import socialImage from '../assets/socialapi.png'
import storeAPIImage from '../assets/ecommerceAPI.png'
import jateImage from '../assets/jate.png'
import petPalImage from '../assets/petpal.png'
import kidzDirectImage from '../assets/kidzDirect.png'


export default function Portfolio () {
    const cardData = [{
        image: blueitImage,
        title: 'BlueIt',
        text: 'This was a reddit style application that I did a lot of back-end work on',
        link: 'https://github.com/Paulsig007/Blueit'
    },
    {
        image: socialImage,
        title: 'Social API',
        text: 'This is not a deployed application but it was my first use of MongoDB',
        link: 'https://github.com/KyleSl/social-network-api'
    },
    {
        image: storeAPIImage,
        title: 'e-Commerce API',
        text: 'This is not a deployed application but it was a good use of SQL',
        link: 'https://github.com/KyleSl/ecommerce-api'
    },
    {
        image: jateImage,
        title: 'JATE',
        text: 'A basic text editor/note saver that was my first use of webpack',
        link: 'https://github.com/KyleSl/jate'
    },
    {
        image: petPalImage,
        title: 'PetPal',
        text: 'My first group project where I managed the local storage use',
        link: 'https://github.com/OutlawDisco/Pet-Pal'
    },
    {
        image: kidzDirectImage,
        title: 'kidzDirect',
        text: 'First full stack web app. I handled a lot of the backend, mostly the schemas and resolvers',
        link: 'https://github.com/Walter-Conwell/parentSchedulingApp'
    }];
    return (
        <>
        <h2 className="text-white p-1 m-1 mx-3">Portfolio</h2>
        <hr className="text-white m-1" />
        <div className="row row-cols-3 mx-auto">
            {cardData.map( (item) => 
                <div className="card col p-0 border-3">
                <img src={item.image} className="card-img-top" alt="project-image" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <a href={item.link} className="btn btn-primary">Github</a>
                </div>
              </div>
            )}
        </div>
        </>
    );
}