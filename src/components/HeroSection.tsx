import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen bg-[#F9F7F1]">
      {/* Decorative Macarons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute z-[1] group cursor-pointer left-[-80px] top-[70px] w-[200px] h-[200px] md:left-[-168px] md:top-[60px] md:w-[330px] md:h-[330px] xl:left-[-200px] xl:top-[80px] xl:w-[380px] xl:h-[380px] floating-decoration">
          <img 
            src="https://macaron.im/assets/image/wait-pink.webp" 
            alt="Left Macaron Decoration" 
            className="w-full h-full object-contain pointer-events-auto transition-transform duration-300 ease-in-out hover:rotate-[10deg] hover:-translate-x-[10px]"
          />
        </div>
        <div className="absolute z-[1] group cursor-pointer right-[-60px] top-[200px] w-[150px] h-[150px] md:right-[-79px] md:top-[251px] md:w-[199px] md:h-[199px] xl:right-[-120px] xl:top-[300px] xl:w-[260px] xl:h-[260px] floating-decoration">
          <img 
            src="https://macaron.im/assets/image/wait-orange.webp" 
            alt="Right Macaron Decoration" 
            className="w-full h-full object-contain pointer-events-auto transition-transform duration-300 ease-in-out hover:rotate-[15deg] hover:-translate-y-[20px]"
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-visible w-full macaron-hero-bg">
        <div className="flex flex-col items-center justify-start relative z-[2] gap-[33px] w-full xl:w-[1120px]">
          <div className="flex flex-col items-center w-full pt-[140px] pb-0 gap-[23px] md:pt-[142px] md:pb-0 md:gap-[50px]">
            <img 
              src="https://macaron.im/assets/image/macaron-logo.png" 
              alt="Macaron Logo" 
              className="object-contain w-[272px] h-[51px] md:w-[463px] md:h-[86px] xl:w-[742px] xl:h-[138px]"
            />
            <div className="flex flex-col items-center w-full">
              <h1 className="text-center text-[hsl(var(--primary))] text-[20px] w-auto md:text-[48px] md:max-w-[936px] md:w-full">
                世界上第一个 Personal AI Agent
              </h1>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center w-full max-w-[1200px] relative z-[2] py-[60px] md:py-[80px]">
          <div className="flex flex-col gap-2.5 md:flex-row md:gap-2.5 xl:flex-row xl:gap-2.5 items-center justify-center w-min relative">
            <div className="w-[200px] h-auto">
              <Button className="macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full">
                获取应用
              </Button>
            </div>
            <div className="w-[200px] h-auto">
              <Button className="h-14 rounded-full px-10 text-base w-full bg-[#FFFFFF80] text-[#2A2A29] hover:bg-[#FFFFFF] hover:text-[#2A2A29]">
                立即试用
              </Button>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center max-w-[1200px] w-full relative z-[2] mb-[60px] px-[32px] md:mb-[80px]">
          <div className="relative rounded-2xl overflow-hidden bg-black cursor-pointer w-full aspect-video max-w-[90vw] md:max-w-[750px] lg:max-w-[865px] xl:max-w-[1120px] mx-auto">
            <img 
              src="https://macaron.im/assets/image/bilibili-video-thumbnail.jpg" 
              alt="Bilibili video thumbnail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="relative flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#00AEEC] cursor-pointer">
                <Play className="w-6 h-6 text-white fill-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* Rolling Macarons */}
        <div className="relative w-full h-[100px] md:h-[140px] overflow-hidden">
          <div className="rolling-animation bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%] flex flex-row items-center justify-center gap-24 pl-32 relative w-full">
            {[
              "https://macaron.im/assets/image/macaron-latte.png",
              "https://macaron.im/assets/image/macaron-espresso.png", 
              "https://macaron.im/assets/image/macaron-mocha.png",
              "https://macaron.im/assets/image/macaron-coldbrew.png",
              "https://macaron.im/assets/image/macaron-matcha.png",
              "https://macaron.im/assets/image/macaron-icetea.png"
            ].map((src, index) => (
              <div key={index} className="rotating-macaron relative overflow-visible flex-none w-40 h-40 md:w-72 md:h-72">
                <img 
                  alt="" 
                  width="288" 
                  height="288" 
                  className="w-full h-full object-cover" 
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;