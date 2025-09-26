import { Button } from "@/components/ui/button";

const ShowcaseSection = () => {
  const showcaseItems = [
    {
      title: "宝宝餐点规划",
      description: "从农场到勺子：新鲜宝宝辅食",
      image: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/68941203129a8b22ebbd18c4-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20",
      href: "/playbook/baby-meal-planner"
    },
    {
      title: "法律学习指南",
      description: "法律智慧触手可得，立即解锁",
      image: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893a06e96e8fcf6105f8975-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20",
      href: "/playbook/law-study-guide"
    },
    {
      title: "专属图书推荐指南",
      description: "发现你的下一本心动好书",
      image: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6892e40e7bac40bbf77f6e33-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20",
      href: "/playbook/book-match-guide"
    },
    {
      title: "完美底妆配对专业版",
      description: "今天就找到你的完美粉底色号",
      image: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893a82696e8fcf6105f8aae-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20",
      href: "/playbook/foundation-match-pro"
    },
    {
      title: "风格同步",
      description: "用完美衣柜，装点你的每一天",
      image: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/68936c05def845e53c83c0a3-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20",
      href: "/playbook/stylesync"
    },
    {
      title: "绿波能源",
      description: "用清洁能源，今天就开启明天的未来",
      image: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6892550cc28019528d81a777-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20",
      href: "/playbook/greenwave-energy"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="text-center mb-12 md:mb-16 p-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">实际操作</h2>
          <p className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto">
            其他 AI 助手帮助你工作。Macaron 帮助你更好生活。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {showcaseItems.map((item, index) => (
            <div key={index}>
              <a className="block" href={item.href}>
                <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[356px]">
                  <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                    <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                      <div 
                        className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                        style={{ backgroundImage: `url("${item.image}")` }}
                        role="img"
                        aria-label={`${item.title} screenshot`}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center w-full mt-12 md:mt-16">
          <div className="w-[290px] h-auto">
            <Button className="macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full">
              在灵感库中查看超过 200 个案例
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;