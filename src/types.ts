export type componentConfig = {
  selector: string
  data: object
  template: (props:object) => HTMLElement
}

export type createElementType = (tag:string|object, attrs: object, ...children:HTMLElement[]) => HTMLElement