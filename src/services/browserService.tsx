import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

class BrowserService {
    
    public navegadorEhMobile = (breakpoint = 768) => {
        const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
            window.addEventListener("resize", handleResize);
    
            return () => window.removeEventListener("resize", handleResize);
        }, [breakpoint]);
    
        return isMobile;
    };

    public recuperarParametro = (parametro: string) => {
        const [searchParams] = useSearchParams();
        return searchParams.get(parametro);
    };
}

const browserService = new BrowserService();
export default browserService;