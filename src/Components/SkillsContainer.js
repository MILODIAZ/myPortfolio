function SkillsContainer ( {nombre, children} ) {
    return (
        <div className="flex flex-col mb-20 lg:w-3/12">
            <h3 className="sm:px-6 sm:py-3 w-fit mx-auto mb-6 lg:mb-11">{nombre}</h3>
            <div className="grid grid-cols-5 lg:grid-cols-3 gap-y-4 justify-items-center">
                {children}                                
            </div>
        </div>
    );
}

export default SkillsContainer;