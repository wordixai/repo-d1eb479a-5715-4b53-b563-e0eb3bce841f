import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 h-11 md:h-16 border-b border-[#E9E7E2] w-full fixed top-0 left-0 z-50 bg-[#F9F7F1]">
      <a className="flex items-center space-x-2" href="/">
        <img 
          src="https://macaron.im/assets/image/logo.png" 
          alt="Macaron" 
          width="120" 
          height="38" 
          className="md:w-[153px] md:h-[48px] rounded-lg"
        />
      </a>
      
      <div className="hidden md:flex items-center gap-20">
        <a className="text-base text-black hover:text-gray-500 transition-all duration-200 px-3 py-2 rounded-lg" href="/blog">
          博客
        </a>
        <a className="text-base text-black hover:text-gray-500 transition-all duration-200 px-3 py-2 rounded-lg" href="/playbook">
          灵感库
        </a>
        <button className="text-base text-black hover:text-gray-500 transition-colors">
          联系我们
        </button>
        <a className="text-base text-black hover:text-gray-500 transition-all duration-200 px-3 py-2 rounded-lg" href="/qa">
          常见问题
        </a>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0">
          <a href="https://www.producthunt.com/products/macaron-ai" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://macaron.im/assets/image/product-of-the-week.svg" 
              alt="Product of the Week - Macaron AI" 
              className="w-[138px] h-[30px] md:w-[222px] md:h-[48px]" 
              width="138" 
              height="30"
            />
          </a>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden rounded-full h-8 w-8">
          <Menu className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 md:h-10 md:w-10">
          <Globe className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;