import ScrollObserver from "./ScrollObserver";
import {ClientSize, IElement} from "./Types";

function getElements(el:Element | Element[] | HTMLCollection):Element[]{
    return Array.isArray(el) || el instanceof HTMLCollection ? Array.from(el) : [el];
}
export default class Exposure {
    private Observer:IntersectionObserver;
    private ScrObserver:ScrollObserver;

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
        this.ScrObserver = new ScrollObserver(options);
    }
    observe(el:IElement,callback:Function){
        el.callback = callback;
        this.Observer.observe(el);
    }
    scrollEventHandler(){
       this.ScrObserver.onScroll()
    }
    observeByScroll(el:IElement,callback:Function){
        el.callback = callback;
        this.ScrObserver.observe(el);
    }
    unobserve(el:Element | Element[] | HTMLCollection){
        getElements(el).map((target)=>this.Observer.unobserve(target));
    }
    unobserveByScroll(el:Element | Element[] | HTMLCollection){
        getElements(el).map((target)=>{
            const findIndex = this.ScrObserver.getRefs().findIndex(({element:ref})=>ref === target);
            if(findIndex >= 0)this.ScrObserver.unobserve(findIndex);
        });
    }
    setClientSize(size:ClientSize){
        this.ScrObserver.setClientSize(size);
    }
    stopByScroll(){
        this.ScrObserver.stop()
    }
    stop(){
        this.Observer.disconnect();
    }
}
