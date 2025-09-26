import { Button } from "@/components/ui/button";

const TechnicalSection = () => {
  return (
    <div className="w-full flex justify-center">
      <section className="relative overflow-hidden bg-transparent w-full flex flex-col items-center justify-center gap-12 min-h-screen px-5 py-12 max-w-[500px] mx-auto md:gap-10 md:px-5 md:py-15 md:max-w-[800px] lg:flex-row lg:gap-10 lg:px-8 lg:py-15 lg:max-w-[1200px]">
        <div className="flex items-center justify-center w-full relative z-[2]">
          <div className="flex w-full flex-col gap-12 md:gap-[70px] md:max-w-[1024px] lg:flex-1 lg:max-w-[1170px]">
            <div className="flex flex-col items-center gap-[70px] w-full">
              <div className="flex flex-col items-center gap-4 w-full text-center">
                <h3 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">
                  Design and training of Macaron agent
                </h3>
                <p className="text-lg md:text-xl text-[#595856] max-w-[1020px]">
                  We develop our in-house RL platform that supports up to 1T-parameter LLMs with high efficiency and low cost, and improve three key agentic capabilities of LLMs with RL.
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-9 w-full">
                <div className="relative overflow-visible">
                  <img 
                    alt="Benchmark Chart" 
                    width="1028" 
                    height="598" 
                    className="w-full h-auto aspect-[1.719] md:w-[923px] lg:w-[923px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[102%] hover:shadow-xl" 
                    src="https://macaron.im/assets/image/rl-for-agentic-memory.png"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-7 w-full">
              <div className="w-full h-px bg-black/5"></div>
              
              <div className="w-full flex flex-col gap-6 md:flex-row md:gap-3.5 lg:flex-row lg:gap-3.5">
                <div className="flex-1">
                  <div className="flex flex-col items-center justify-start gap-2.5 w-[370px] md:gap-0">
                    <div className="text-center">
                      <span className="inline-block tabular-nums transition-all duration-300 cursor-pointer text-[40px] md:text-[58px] lg:text-[72px] font-light text-black font-[Inter]">
                        96%
                      </span>
                    </div>
                    <p className="text-center text-black/50 leading-relaxed text-sm md:text-lg">GAIA Level 1</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col items-center justify-start gap-2.5 w-[370px] md:gap-0">
                    <div className="text-center">
                      <span className="inline-block tabular-nums transition-all duration-300 cursor-pointer text-[40px] md:text-[58px] lg:text-[72px] font-light text-black font-[Inter]">
                        671B+
                      </span>
                    </div>
                    <p className="text-center text-black/50 leading-relaxed text-sm md:text-lg">Base Model for RL</p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col items-center justify-start gap-2.5 w-[370px] md:gap-0">
                    <div className="text-center">
                      <span className="inline-block tabular-nums transition-all duration-300 cursor-pointer text-[40px] md:text-[58px] lg:text-[72px] font-light text-black font-[Inter]">
                        216+
                      </span>
                    </div>
                    <p className="text-center text-black/50 leading-relaxed text-sm md:text-lg">Cases Generated in 36min</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-px bg-black/5"></div>
            </div>
            
            <div className="flex flex-col items-center w-full max-w-[600px] mx-auto">
              <div className="flex flex-col gap-2.5 md:flex-row md:gap-2.5 xl:flex-row xl:gap-2.5 items-center justify-center w-min relative">
                <div className="w-[290px] h-auto">
                  <Button className="macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full">
                    Read technical blog
                  </Button>
                </div>
                <div className="w-[290px] h-auto">
                  <Button 
                    disabled 
                    className="bg-[#dddddb] text-white border-none shadow-none cursor-not-allowed h-14 rounded-full px-10 text-base w-full"
                  >
                    Open weights model
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSection;