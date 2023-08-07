
export interface IElement extends Element{
    callback:Function
}
function getElements(el:Element | Element[] | HTMLCollection):Element[]{
    return Array.isArray(el) || el instanceof HTMLCollection ? Array.from(el) : [el];
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
    observe(el:IElement,callback:Function){
        el.callback = callback;
        this.Observer.observe(el);
    }
    unobserve(el:Element | Element[] | HTMLCollection){
        getElements(el).map((target)=>this.Observer.unobserve(target));
    }
    stop(){
        this.Observer.disconnect();
    }
}
