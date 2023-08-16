import {ClientSize, EDirection, IDomRect, IElement} from "./Types";

export default class ScrollObserver {
    private DomRefs:IDomRect[] = [];
    options:IntersectionObserverInit;
    private clientSize:ClientSize = {
        width:innerWidth,
        height:innerHeight
    };
    constructor(
        options: IntersectionObserverInit
    ) {
        this.options = options;
    }
    setClientSize(size:ClientSize){
        this.clientSize = size;
    }
    getRefs(){
        return this.DomRefs;
    }
    unobserve(index:number){
        this.DomRefs.splice(index,1)
    }
    isIntersecting(rect:DOMRect):boolean{
        const {width,height,left,top} = rect;
        const {threshold} = this.options;
        const {width:clientWidth,height:clientHeight} = this.clientSize;
        return (clientHeight - top) * (clientWidth - left) > height * width * (threshold as number);
    }
    interSectionChecking(isIntersecting:boolean,index:number,domRef:IDomRect){
        if(isIntersecting !== domRef.isIntersecting){
            domRef.isIntersecting = isIntersecting;
            domRef.element.callback.call(
                null,
                isIntersecting,
                ()=>{
                    this.unobserve(index);
                },
                ...arguments
            );
        }
    }
    onScroll(){
        this.DomRefs.map((domRef,index)=>{
            const isIntersecting =  this.isIntersecting(domRef.element.getBoundingClientRect())
            this.interSectionChecking(isIntersecting,index,domRef)
        })
    }
    observe(el:IElement){
        const isIntersecting = this.isIntersecting(el.getBoundingClientRect());
        const ref:IDomRect = {
            element:el,
            isIntersecting:undefined
        }
        this.DomRefs.push(ref);
        this.interSectionChecking(isIntersecting,this.DomRefs.length - 1,ref);
    }
    stop(){
        this.DomRefs = [];
    }
}
