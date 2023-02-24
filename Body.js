import Carousel from './Carousel';
import Projects from './Projects';
import Services from './Services';
const Body = () => {
    return (
        <>
        <div className=''>
        <div className="flex shadow justify-between px-10 my-1 ">
        <Carousel />
        </div>
        <Services />
        <Projects />
        </div>
        </>
    );
};
export default Body;