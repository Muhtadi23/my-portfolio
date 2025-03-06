import Image from "next/image";

const Skill = () => {
    return (
        <div>
            <div className='mt-8'>
                <div className="flex flex-wrap gap-4">
                    <div className="avatar justify-center">
                        <div className="w-14 h-12 relative mask mask-hexagon">
                            <Image
                                src="/html.png"
                                alt="HTML Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12 relative mask mask-hexagon">
                            <Image
                                src="/css.png"
                                alt="HTML Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12 relative mask mask-hexagon">
                            <Image
                                src="/mongoDB-ts.png"
                                alt="HTML Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12 relative mask mask-hexagon">
                            <Image
                                src="/javascript.png"
                                alt="HTML Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12 relative mask mask-hexagon">
                            <Image
                                src="/react.png"
                                alt="HTML Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    <div className="avatar justify-center">
                        <div className="w-14 h-12 relative mask mask-hexagon">
                            <Image
                                src="/tail.png"
                                alt="HTML Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div className="avatar justify-center">
                        <div className="w-14 h-12 relative mask mask-hexagon">
                            <Image
                                src="/fire.png"
                                alt="HTML Icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
