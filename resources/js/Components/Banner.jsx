export default function Banner(){
    return <>
        <div className="banner ">
            <div className="container mx-auto">
                <div className="banner__breadcrumbs flex gap-[10px] align-center">
                    <p className="flex gap-[10px] align-center">Home </p><span><a href="#">Showcase</a></span>
                </div>
                <div className="banner__heading mt-[2rem]"><h1>Showcase</h1></div>
                <div className="banner__text w-full lg:w-1/2 mt-[2rem]">
                    <p>For years, we’ve been providing our Brisbane, Melbourne, 
                        Adelaide & Sydney customers with audio visual solutions ranging
                         from home theatre system installation and home automation to simple 
                         yet elegant TV mounting. Universal Home Theatre pride ourselves on being a
                          true one-stop solution for all your home theatre needs. Years of trade experience with home theatres means we
                           have the knowledge and expertise to tailor and build the perfect home theatre system for you.
                    </p>
                </div>
            </div>
        </div>
    </>
}