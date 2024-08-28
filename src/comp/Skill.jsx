import html from '../assets/html.png'
import css from '../assets/css.png'
import mongo from '../assets/mongoDB-ts.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tail from '../assets/tail.png'
import fire from '../assets/fire.png'
const Skill = () => {
    return (
        <div>
            <div className='mt-8'>
                <div className="flex flex-wrap gap-4">
                    <div className="avatar justify-center">
                        <div className="w-14 h-12  mask mask-hexagon">
                            <img src={html} />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12  mask mask-hexagon">
                            <img src={css} />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12  mask mask-hexagon">
                            <img src={js} />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12  mask mask-hexagon">
                            <img src={react} />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12  mask mask-hexagon">
                            <img src={mongo} />
                        </div>
                    </div>

                    <div className="avatar justify-center">
                        <div className="w-14 h-12  mask mask-hexagon">
                            <img src={tail} />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12 mask mask-hexagon">
                            <img src={fire} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;