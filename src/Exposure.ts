import {IElement} from "./Types";

function getElements(el:IElement | IElement[] | HTMLCollection):IElement[]{
    return Array.isArray(el) || el instanceof HTMLCollection ? Array.from(el as IElement[]) : [el as IElement];
}
export default class Exposure {
    private Observer:IntersectionObserver;

    constructor(
        options: IntersectionObserverInit = {threshold: 0.3 }
    ) {
        const callback: IntersectionObserverCallback = (entries, observer) => {
            entries.map((entry)=>{
                const {target,isIntersecting} = entry;
                (target as IElement).callback.call(
                    null,
                    isIntersecting,
                    ()=>observer.unobserve(target),
                    ...arguments
                );
            })
        };
        this.Observer = new IntersectionObserver(callback,options);
    }

    observe(els:IElement | IElement[],callback:Function){
        getElements(els).map((el)=>{
            el.callback = callback;
            this.Observer.observe(el);
        })

    }
    unobserve(el:IElement | IElement[] | HTMLCollection){
        getElements(el).map((target)=>this.Observer.unobserve(target));
    }
    stop(){
        this.Observer.disconnect();
    }
}
