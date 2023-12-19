export interface IElement extends Element{
    callback:Function
}
export enum EDirection {
    top = 1,
    left = 2
}
export interface IDomRect{
    element:IElement,
    isIntersecting:boolean | unknown
}

export interface ClientSize {
    width:number,
    height:number
}
export interface IPosition {
    top:number,
    left:number
}
