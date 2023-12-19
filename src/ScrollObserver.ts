import {ClientSize, EDirection, IDomRect, IElement, IPosition} from "./Types";

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
    isIntersecting(rect:DOMRect,position:IPosition):boolean{
        const {width,height,left,top} = rect;
        const {left:scrollLeft,top:scrollTop} = position;
        const {threshold} = this.options;
        const {width:clientWidth,height:clientHeight} = this.clientSize;
        return (clientHeight - top + scrollTop) * (clientWidth - left + scrollLeft) > height * width * (threshold as number);
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
    onScroll(position:IPosition){
        this.DomRefs.map((domRef,index)=>{
            const isIntersecting =  this.isIntersecting(
                domRef.element.getBoundingClientRect(),
                position
            )
            this.interSectionChecking(isIntersecting,index,domRef)
        })
    }
    observe(el:IElement){
        const isIntersecting = this.isIntersecting(el.getBoundingClientRect(),{left:0,top:0});
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
